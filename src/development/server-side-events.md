---
title: Server side events
show_in_menu: contents
nav_sort: 20
---

# Server side events

**Mibew Messenger** provides Events subsystem that can be used by plugins. All
events logic encapsulated inside `\Mibew\EventDispatcher\EventDispatcher`
class.

There are several common actions that can be done with the event dispatcher:

* attach a listener to an event using
  `\Mibew\EventDispatcher\EventDispatcher::attachListener()` method.
* detach a listener from an event using
  `\Mibew\EventDispatcher\EventDispatcher::detachListener()` method.
* trigger an event using
  `\Mibew\EventDispatcher\EventDispatcher::triggerEvent()` method.

To get more info about these actions take a look at the source code of
`\Mibew\EventDispatcher\EventDispatcher` class.


## List of events

* [Ban events](#ban-events).
* [Button events](#button-events).
* [Cron events](#cron-events).
* [Group events](#group-events).
* [Invitation events](#invitation-events).
* [Operator events](#operator-events).
* [Page events](#page-events).
* [Resource events](#resource-events).
* [Routing events](#routing-events).
* [Thread events](#thread-events).
* [Users events](#users-events).
* [Visitor events](#visitor-events).
* [Widget events](#widget-events).


### <a name="ban-events"></a>Ban events

#### Create

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::BAN_CREATE` constant.

This event is triggered after a ban has been created. An associative array with
the following items is passed to event handlers:

* _'ban'_: an instance of `\Mibew\Ban` class, the state of the created ban.


#### Update

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::BAN_UPDATE` constant.

This event is triggered after a ban has been saved. An associative array with
the following items is passed to event handlers:

 * _'ban'_: an instance of `\Mibew\Ban` class, the state of the ban after update.
 * *'original_ban'*: an instance of `\Mibew\Ban` class, the state of the ban
   before update.


#### Delete

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::BAN_DELETE` constant.

This event is triggered after a ban has been deleted. An associative array with
the following items is passed to event handlers:

* _'id'_: integer, ID of the deleted ban.


### <a name="button-events"></a>Button events

#### Generate

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::BUTTON_GENERATE` constant.

This event is triggered after a button has been generated. An associative array
with the following items is passed to event handlers:

* _'button'_: an instance of `\Canteen\HTML5\Fragment` class, representation of
  the markup of the generated button.
* _'generator'_: an instance of `\Mibew\Button\Generator\GeneratorInterface`
  class that was used for button generation.


### <a name="cron-events"></a>Cron events

#### Run

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::CRON_RUN` constant.

This event is triggered when system cron tasks are running (more specifically
after the statistics calculation but before the check for updates). It
provides plugins an ability to perform custom maintenance operations.


### <a name="group-events"></a>Group events

#### Create

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::GROUP_CREATE` constant.

This event is triggered after a group has been created. An associative array
with the following items is passed to event handlers:

* _'group'_: array containing all data fields of the created group. See
  `create_group()` function in `libs/groups.php` file for more info.


#### Update

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::GROUP_UPDATE` constant.

This event is triggered after a group has been saved. An associative array with
the following items is passed to event handlers:

* _'group'_: array, the state of the group after update.
* *'original_group'*: array, the state of the group before update.


#### Delete

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::GROUP_DELETE` constant.

This event is triggered after a group has been deleted. An associative array
with the following items is passed to event handlers:

* _'id'_: integer, ID of the deleted group.


#### Update operators

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::GROUP_UPDATE_OPERATORS` constant.

This event is triggered after a set of operators belonging to a group has been
altered. An associative array with the following items is passed to event
handlers:

* _'group'_: array containing all data fields of the group.
* *'original_operators'*: array, the list of IDs of operators before update.
* _'operators'_: array, the list of IDs of operators after update.


### <a name="invitation-events"></a>Invitation events

#### Create

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::INVITATION_CREATE` constant.

This event is triggered after an invitation has been created. An associative
array with the following items is passed to event handlers:

* _'invitation'_: an instance of `\Mibew\Thread` class, the state of the thread
  related to the invitation.


#### Accept

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::INVITATION_ACCEPT` constant.

This event is triggered after an invitation has been accepted by a visitor. An
associative array with the following items is passed to event handlers:

* _'invitation'_: an instance of `\Mibew\Thread` class, the state of the thread
  related to the invitation.


#### Reject

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::INVITATION_REJECT` constant.

This event is triggered after an invitation has been rejected by a visitor. An
associative array with the following items is passed to event handlers:

* _'invitation'_: an instance of `\Mibew\Thread` class, the state of the thread
  related to the invitation.


#### Ignore

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::INVITATION_IGNORE` constant.

This event is triggered after an invitation has been ignored by a visitor and
was automatically closed by the system. An associative array with the following
items is passed to event handlers:

* _'invitation'_: an instance of `\Mibew\Thread` class, the state of the thread
  related to the invitation.


### <a name="operator-events"></a>Operator events

#### Authenticate

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::OPERATOR_AUTHENTICATE` constant.

This event is triggered if an operator cannot be authenticated by the system
(i.e. the operator is not logged in yet). It provides plugins an ability to
implement custom authentication logic. An associative array with the following
items is passed to event handlers:

* _'operator'_: array, if a plugin has extracted operator from the incoming
  request, it should populate the array with the operator's data. See
  `update_operator()` function in `libs/operator.php` file for more info.
* _'request'_: an instance of `\Symfony\Component\HttpFoundation\Request` class,
  incoming request. Can be used by a plugin to extract an operator.


#### Log in

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::OPERATOR_LOGIN` constant.

This event is triggered after an operator has been logged in using the
standard login form. An associative array with the following items is passed
to event handlers:

* _'operator'_: array containing all data fields of the operator.
* _'remember'_: boolean, indicates whether the system should "remember" the
  operator.


#### Log out

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::OPERATOR_LOGOUT` constant.

This event is triggered after an operator has been logged out.


#### Create

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::OPERATOR_CREATE` constant.

This event is triggered after an operator has been created. An associative
array with the following items is passed to event handlers:

* _'operator'_: array containing all data fields of the operator.


#### Update

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::OPERATOR_UPDATE` constant.

This event is triggered after an operator has been saved. An associative array
with the following items is passed to event handlers:

* _'operator'_: array, the state of the operator after update.
* *'original_operator'*: array, the state of the operator before update.


#### Delete

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::OPERATOR_DELETE` constant.

This event is triggered after an operator has been deleted. An associative
array with the following items is passed to event handlers:

* _'id'_: integer, ID of the deleted operator.


### <a name="page-events"></a>Page events

#### Add CSS

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::PAGE_ADD_CSS` constant.

This event is triggered before CSS assets are attached to a page of the
administrative interface of **Mibew Messenger**. It provides plugins an
ability to connect pages to custom CSS files or add inline styles to pages.
An associative array with the following items is passed to event handlers:

* _'request'_: an instance of `\Symfony\Component\HttpFoundation\Request`
  class. CSS files will be attached to the requested page.
* _'css'_: array of assets. Each asset can be either a string with the relative
  URL of a CSS file or an array with _'content'_, _'type'_ and _'weight'_
  items. See `\Mibew\Asset\AssetManagerInterface::getCssAssets()` for more
  info. One should modify this array to add (or remove) extra CSS files.


#### Add JavaScript

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::PAGE_ADD_JS` constant.

This event is triggered before JavaScript assets are attached to a page of the
administrative interface of **Mibew Messenger**. It provides plugins an ability
to connect pages to custom JavaScript files or add inline scripts to pages.
An associative array with the following items is passed to event handlers:

* _'request'_: an instance of `\Symfony\Component\HttpFoundation\Request` class.
  JavaScript files will be attached to the requested page.
* _'js'_: array of assets. Each asset can be either a string with the relative
  URL of a JavaScript file or an array with _'content'_, _'type'_ and _'weight'_
  items. See `\Mibew\Asset\AssetManagerInterface::getJsAssets()` for more info.
  One should modify this array to add (or remove) extra JavaScript files.


#### JavaScipt plugin options

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::PAGE_ADD_JS_PLUGIN_OPTIONS` constant.

This event is triggered before options of JavaScript plugins are attached to a
page. It provides plugins an ability to pass some data to the **Client** side.
An associative array with the following items is passed to event handlers:

* _'request'_: an instance of `\Symfony\Component\HttpFoundation\Request` class.
  Options will be attached to the requested page.
* _'plugins'_: associative array, whose keys are names of plugins and values are
  their options. One should modify this array to add (or alter) plugins
  options.


### <a name="resource-events"></a>Resource events

#### Access denied

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::RESOURCE_ACCESS_DENIED` constant.

This event is triggered if the access to a resource is denied. An associative
array with the following items is passed to event handlers:

* _'request'_: an instance of `\Symfony\Component\HttpFoundation\Request` class,
  incoming request object.
* _'response'_: an instance of `\Symfony\Component\HttpFoundation\Response`
  class, if a plugin wants to send a custom response to a **Client** it should
  attach a response object to this field.


#### Not found

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::RESOURCE_NOT_FOUND` constant.

This event is triggered if a resource is not found. An associative array with
the following items is passed to event handlers:

* _'request'_: an instance of `\Symfony\Component\HttpFoundation\Request` class,
  incoming request object.
* _'response'_: an instance of `\Symfony\Component\HttpFoundation\Response`
  class, if a plugin wants to send a custom response to a **Client** it should
  attach a response object to this field.


### <a name="routing-events"></a>Routing events

#### Alter

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::ROUTES_ALTER` constant.

This event is triggered after all routes has been loaded. It provides plugins
an ability to alter the routes collection before it will be used. An
associative array with the following items is passed to event handlers:

* _'routes'_: an instance of `\Symfony\Component\Routing\RouteCollection` class.


### <a name="thread-events"></a>Thread events

#### Function call

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::THREAD_FUNCTION_CALL` constant.

This event is triggered if an API function is called at the **Client** side in
the **Chat application**, but the system is not aware of this function.

Plugins can implement custom API functions by attaching handlers to this event.
If a plugin should return some results, it should use _'results'_ element of
the event arguments array (see below).

An associative array with the following items is passed to event handlers:

* *'request_processor'*: an instance of
  `\Mibew\RequestProcessor\ThreadProcessor` class that handles the current call.
* _'function'_: string, name of the function that was called.
* _'arguments'_: associative array of arguments passed to the function.
* _'results'_: array, the list of results of the function call.

Here is an example of the event handler:

```php
public function callHandler(&$function)
{
    // Ensure that the function we want to implement was called.
    if ($function['function'] === 'microtime') {
        // Check some function's arguments.
        $as_float = empty($function['arguments']['as_float'])
            ? false
            : $function['arguments']['as_float'];
        // Invoke the function and return the results.
        $function['results']['time'] = microtime($as_float);
    }
}
```


#### Create

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::THREAD_CREATE` constant.

This event is triggered after a thread has been created. An associative array
with the following items is passed to event handlers:

* _'thread'_: an instance of `\Mibew\Thread` class, the state of the created
  thread.


#### Update

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::THREAD_UPDATE` constant.

This event is triggered after a thread has been saved. An associative array
with the following items is passed to event handlers:

* _'thread'_: an instance of `\Mibew\Thread` class, the state of the thread
  after update.
* *'original_thread'*: an instance of `\Mibew\Thread` class, the state of the
  thread before update.


#### Delete

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::THREAD_DELETE` constant.

This event is triggered after a thread has been deleted. An associative array
with the following items is passed to event handlers:

* _'id'_: integer, ID of the deleted thread.


#### Close

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::THREAD_CLOSE` constant.

This event is triggered after a thread has been closed. An associative array
with the following items is passed to event handlers:

* _'thread'_: an instance of `\Mibew\Thread` class, the state of the closed
  thread.


#### Post message

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::THREAD_POST_MESSAGE` constant.

This event is triggered before a message has been posted to a thread. It
provides plugins an ability to alter the message itself and/or its kind or
options. An associative array with the following items is passed to event
handlers:

* _'thread'_: an instance of `\Mibew\Thread` class, the state of the thread.
* *'message_kind'*: integer, a kind of the message. See `KIND_*` constants in
  `\Mibew\Thread` for more info.
* *'message_body'*: string, a body of the message.
* *'message_options'*: associative array, the list of options passed to
  `\Mibew\Thread::postMessage()` method as a third argument.


#### Alter messages

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::THREAD_GET_MESSAGES_ALTER` constant.

This event is triggered after messages related to a thread has been loaded. It
provides plugins an ability to alter messages. An associative array with the
following items is passed to event handlers:

* _'thread'_: an instance of `\Mibew\Thread` class, the state of the thread.
* _'messages'_: array, the list of messages. Each message is an associative
  array. See the return value of `\Mibew\Thread::getMessages()` method for more
  info.


#### User is ready (since Mibew Messenger 2.1.0)

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::THREAD_USER_IS_READY` constant.

This event is triggered after the thread has been created, the user
has successfully passed pre-chat survey and all system messages has been sent
to him. This event is not triggered if there are no operators online and
therefore the chat cannot be started. An associative array with the following
items is passed to event handlers:

* _'thread'_: an instance of `\Mibew\Thread` class, the state of the thread.


### <a name="users-events"></a>Users events

#### Alter threads

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::USERS_UPDATE_THREADS_ALTER` constant.

This event is triggered before the list of threads is sent to the
**Users application** on the **Client** side. It provides plugins an ability to
alter the list. A plugin can attach some custom fields to each thread or even
completely replace the whole list. An associative array with the following
items is passed to event handlers:

* _'threads'_: array of threads, each item is the data related to a single
  thread. See `\Mibew\RequestProcessor\UsersProcessor\apiUpdateThreads()`
  method for more info.


#### <a name="load-visitors-event"></a>Load visitors

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::USERS_UPDATE_VISITORS_LOAD` constant.

This event is triggered before the list of active site visitors is loaded to be
sent to the **Users application** on the **Client** side. It provides plugins
an ability to load, sort and/or trim the visitors list. An associative array
with the following items is passed to event handlers:

* _'visitors'_: array of visitors, each item is the data related to a single
   visitor. Each visitor array must contain at least following keys:
   _'id'_, _'userName'_, _'userAgent'_, _'userIp'_, _'remote'_, _'firstTime'_,
   _'lastTime'_, _'invitations'_, _'chats'_, _'invitationInfo'_. If there are
   no active visitors, an empty array should be used.

If a plugin will not set the _'visitors'_ item, the default system loader will
be used.


#### Alter visitors

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::USERS_UPDATE_VISITORS_ALTER` constant.

This event is triggered before the list of active site visitors list is sent to
the **Users application** on the **Client** side. It provides plugins an
ability to alter the list. A plugin can attach some custom fields to each
visitor or even completely replace the whole list. An associative array with
the following items is passed to event handlers:

* _'visitors'_: array of visitors, each item is the data related to a single
  visitor. See "[Load visitors](#load-visitors-event)" event and
  `\Mibew\RequestProcessor\UsersProcessor\apiUpdateVisitors()` method
  for more info.


#### Function call

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::USERS_FUNCTION_CALL` constant.

This event is triggered if an API function is called at the **Client** side in
the **Users application**, but the system is not aware of this function.

Plugins can implement custom API functions by attaching handlers to this event.
If a plugin should return some results, it should use _'results'_ element of
the event arguments array (see below).

An associative array with the following items is passed to event handlers:

* *'request_processor'*: an instance of `\Mibew\RequestProcessor\UsersProcessor`
  class that handles the current call.
* _'function'_: string, name of the function that was called.
* _'arguments'_: associative array of arguments passed to the function.
* _'results'_: array, the list of results of the function call.

Here is an example of the event handler:

```php
public function callHandler(&$function)
{
    // Ensure that the function we want to implement is called.
    if ($function['function'] === 'microtime') {
        // Check some function's arguments.
        $as_float = empty($function['arguments']['as_float'])
            ? false
            : $function['arguments']['as_float'];
        // Invoke the function and return the results.
        $function['results']['time'] = microtime($as_float);
    }
}
```


### <a name="visitor-events"></a>Visitor events

#### <a name="visitor-create-event"></a>Create

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::VISITOR_CREATE` constant.

This event is triggered when a visitor has been tracked by the **Widget** for
the first time. An associative array with the following items is passed to
event handlers:

* _'visitor'_: array populated with the data of a visitor. See returned value
  of `track_get_visitor_by_id()` function from `libs/track.php` for more info.


#### Track

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::VISITOR_TRACK` constant.

This event is triggered every time a visitor has been tracked by the
**Widget**. An associative array with the following items is passed to event
handlers:

* _'visitor'_: array populated with the data of a visitor. See returned value of
  `track_get_visitor_by_id()` function from `libs/track.php` for more info.

Note that when a visitor will be tracked by the **Widget** for the first time,
initially the "[Create](#visitor-create-event)" event will be triggered, and
the "Track" event will be triggered only afterwards.

#### Delete old

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::VISITOR_DELETE_OLD` constant.

This event is triggered after old visitors have been deleted. An associative
array with the following items is passed to event handlers:

* _'visitors'_: array, the list of IDs of removed visitors.


### <a name="widget-events"></a>Widget events

#### Alter response

The event can be referenced using the value of
`\Mibew\EventDispatcher\Events::WIDGET_RESPONSE_ALTER` constant.

This event is triggered every time the **Widget** data is ready to be sent. An
associative array with the following items is passed to event listeners:

* _'visitor'_: array populated with the data of a visitor. See returned value of
  `track_get_visitor_by_id()` function from `libs/track.php` for more info.
* _'request'_ an instance of `\Symfony\Component\HttpFoundation\Request` class,
  incoming request object.
* _'response'_: array, a set of data that will be sent to the **Widget**. See
  description of its stucture and an example use case below.
* *'route_url_generator'*: an instance of
  `\Mibew\Routing\Generator\SecureUrlGeneratorInterface` class.
* *'asset_url_generator'*: an instance of
  `\Mibew\Asset\Generator\UrlGeneratorInterface` class.

This event can be used to perform something at the page the visitor is
currenlty browsing.

For example we can call a function every time the **Widget** gets a response
from the **Server**. Here is the event listener code from a plugin:

```php
public function callHandler(&$args)
{
    // This is just a shortcut for the URL generator.
    $g = $args['asset_url_generator'];

    // External libraries could be loaded before the function will be
    // called. There could be as many libraries as needed (even none).
    // Keys of the 'load' array are IDs of the libraries and values are
    // their URLs.
    $args['response']['load']['the_lib'] = 'http://example.com/lib.js';
    $args['response']['load']['the_func'] = $g->generate($this->getFilesPath() . '/func.js');

    // The 'handlers' array contains a list of functions that should be
    // called.
    $args['response']['handlers'][] = 'usefulFunc';

    // The 'dependencies' array contains a list of all libraries a function depends on.
    // In this example 'usefulFunc' depends on libraries with IDs equal to 'the_lib'
    // and 'the_func'.
    $args['response']['dependencies']['usefulFunc'] = array('the_lib', 'the_func');

    // Some extra data could be passed to the function too.
    $args['response']['data']['usefulFunc'] = array('time' => microtime(true));
}
```

Here is the JavaScript part of the example:

```javascript
(function(Mibew) {
    // Pay attention to the full function name. All callable functions must be
    // defined as a properties of Mibew.APIFunctions object.
    Mibew.APIFunctions.usefulFunc = function(data) {
        // Do some job here.
        console.dir(data.usefulFunc);
    }
})(Mibew);
```
