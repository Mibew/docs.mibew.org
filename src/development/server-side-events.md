---
title: Server side events
show_in_menu: contents
nav_sort: 20
---

# Server side events

Mibew provides Events subsystem that can be used by plugins. All events logic
encapsulated inside `\Mibew\EventDispatcher\EventDispatcher` class.

There are several common actions that can be done with event dispatcher:

* attach a listener to an event using
  `\Mibew\EventDispatcher\EventDispatcher::attachListener()` method.
* detach a listener from the event using
  `\Mibew\EventDispatcher\EventDispatcher::detachListener()` method.
* trigger event using `\Mibew\EventDispatcher\EventDispatcher::triggerEvent()`
  method.

To get more info about these actions take a look at the source code of
`\Mibew\EventDispatcher\EventDispatcher` class.


## List of events

* [Ban events](#ban-events)
* [Button events](#button-events)
* [Cron events](#cron-events)
* [Group events](#group-events)
* [Invitation events](#invitation-events)
* [Operator events](#operator-events)
* [Page events](#page-events)
* [Resource events](#resource-events)
* [Routing events](#routing-events)
* [Thread events](#thread-events)
* [Users events](#users-events)
* [Visitor events](#visitor-events)
* [Widget events](#widget-events)


### <a name="ban-events"></a>Ban events

#### Create

The event can be referenced using value of `\Mibew\EventDispatcher\Events::BAN_CREATE`
constant.

This event is triggered after a ban has been created. An associative
array with the following items is passed to the event handlers:

* "ban": an instance of `\Mibew\Ban` class.


#### Update

The event can be referenced using value of `\Mibew\EventDispatcher\Events::BAN_UPDATE`
constant.

This event is triggered after a ban is saved. An associative array with
the following items is passed to the event handlers:

 * "ban": an instance of `\Mibew\Ban`, the state of the ban after the update.
 * "original_ban": an instance of `\Mibew\Ban`, the state of the ban before the
   update.


#### Delete

The event can be referenced using value of `\Mibew\EventDispatcher\Events::BAN_DELETE`
constant.

This event is triggered after a ban has been deleted. An associative
array with the following items is passed to the event handlers:

* "id": int, deleted ban ID.


### <a name="button-events"></a>Button events

#### Generate

The event can be referenced using value of `\Mibew\EventDispatcher\Events::BUTTON_GENERATE`
constant.

This event is triggered after a button has been generated. An associative
array with the following items is passed to the event handlers:

* "button": an instance of `\Canteen\HTML5\Fragment` which
   represents markup of the button.
* "generator": an instance of `\Mibew\Button\Generator\GeneratorInterface` which
  is used for button generation.


### <a name="cron-events"></a>Cron events

#### Run

The event can be referenced using value of `\Mibew\EventDispatcher\Events::CRON_RUN`
constant.

This event is triggered when cron is run. It provides an ability for plugins to
perform custom maintenance actions.


### <a name="group-events"></a>Group events

#### Create

The event can be referenced using value of `\Mibew\EventDispatcher\Events::GROUP_CREATE`
constant.

This event is triggered after a group has been created. An associative array
with the following items is passed to the event handlers:

* "group": group's array.


#### Update

The event can be referenced using value of `\Mibew\EventDispatcher\Events::GROUP_UPDATE`
constant.

This event is triggered after a group is saved. An associative array with the
following items is passed to the event handlers:

* "group": array, the state of the group after update.
* "original_group": array, the state of the group before update.


#### Delete

The event can be referenced using value of `\Mibew\EventDispatcher\Events::GROUP_DELETE`
constant.

This event is triggered after a group has been deleted. An associative array
with the following items is passed to the event handlers:

* "id": int, deleted group ID.


#### Update operators

The event can be referenced using value of `\Mibew\EventDispatcher\Events::GROUP_UPDATE_OPERATORS`
constant.

This event is triggered after a set of operators related with a group has been
changed. An associative array with the following items is passed to the event
handlers:

* "group": group's array.
* "original_operators": array, list of operators IDs before the update.
* "operators": array, list of operators IDs after the update.


### <a name="invitation-events"></a>Invitation events

#### Create

The event can be referenced using value of `\Mibew\EventDispatcher\Events::INVITATION_CREATE`
constant.

This event is triggered after an invitation has been created. An associative
array with the following items is passed to the event handlers:

* "invitation": an instance of `\Mibew\Thread` class.


#### Accept

The event can be referenced using value of `\Mibew\EventDispatcher\Events::INVITATION_ACCEPT`
constant.

This event is triggered after an invitation has been accepted by a visitor. An
associative array with the following items is passed to the event handlers:

* "invitation": an instance of `\Mibew\Thread` class.


#### Reject

The event can be referenced using value of `\Mibew\EventDispatcher\Events::INVITATION_REJECT`
constant.

This event is triggered after an invitation has been rejected by a visitor. An
associative array with the following items is passed to the event handlers:

* "invitation": an instance of `\Mibew\Thread` class.


#### Ignore

The event can be referenced using value of `\Mibew\EventDispatcher\Events::INVITATION_IGNORE`
constant.

This event is triggered after an invitation has been ignored by a visitor and
automatically closed by the system. An associative array with the following
items is passed to the event handlers:

* "invitation": an instance of `\Mibew\Thread` class.


### <a name="operator-events"></a>Operator events

#### Authenticate

The event can be referenced using value of `\Mibew\EventDispatcher\Events::OPERATOR_AUTHENTICATE`
constant.

This event is triggered if an operator cannot be authenticated by the system. It
provides an ability for plugins to implement custom authentication logic. An
associative array with the following items is passed to the event handlers:

* "operator": array, if a plugin has extracted operator from the request
  it should set operator's data to this field.
* "request": `\Symfony\Component\HttpFoundation\Request`,
  incoming request. Can be used by a plugin to extract an operator.


#### Log in

The event can be referenced using value of `\Mibew\EventDispatcher\Events::OPERATOR_LOGIN`
constant.

This event is triggered after an operator logged in using system login form. An
associative array with the following items is passed to the event handlers:

* "operator": array of the logged in operator info;
* "remember": boolean, indicates if system should remember operator.


#### Log out

The event can be referenced using value of `\Mibew\EventDispatcher\Events::OPERATOR_LOGOUT`
constant.

This event is triggered after an operator is logged out.


#### Create

The event can be referenced using value of `\Mibew\EventDispatcher\Events::OPERATOR_CREATE`
constant.

This event is triggered after an operator has been created. An associative array
with the following items is passed to the event handlers:

* "operator": operator's array.


#### Update

The event can be referenced using value of `\Mibew\EventDispatcher\Events::OPERATOR_UPDATE`
constant.

This event is triggered after an operator is saved. An associative array with
the following items is passed to the event handlers:

* "operator": array, the state of the operator after update.
* "original_operator": array, the state of the operator before update.


#### Delete

The event can be referenced using value of `\Mibew\EventDispatcher\Events::OPERATOR_DELETE`
constant.

This event is triggered after an operator has been deleted. An associative array
with the following items is passed to the event handlers:

* "id": int, deleted operator ID.


### <a name="page-events"></a>Page events

#### Add CSS

The event can be referenced using value of `\Mibew\EventDispatcher\Events::PAGE_ADD_CSS`
constant.

This event is triggered before CSS assets are attached to a page. It provides an
ability for plugins to add custom CSS files (or inline styles) to a page. An
associative array with the following items is passed to the event handlers:

* "request": `\Symfony\Component\HttpFoundation\Request`, a request instance.
  CSS files will be attached to the requested page.
* "css": array of assets. Each asset can be either a string with relative URL of
  a CSS file or an array with "content", "type" and "weight" items. See
  `\Mibew\Asset\AssetManagerInterface::getCssAssets()` for details of their
  meaning. Modify this array to add or remove additional CSS files.


#### Add JavaScript

The event can be referenced using value of `\Mibew\EventDispatcher\Events::PAGE_ADD_JS`
constant.

This event is triggered before JavaScript assets are attached to a page. It
provides an ability for plugins to add custom JavaScript files (or inline
scripts) to a page. An associative array with the following items is passed to
the event handlers:

* "request": `\Symfony\Component\HttpFoundation\Request`, a
  request instance. JavaScript files will be attached to the requested
  page.
* "js": array of assets. Each asset can be either a string with relative URL of
  a JavaScript file or an array with "content", "type" and "weight" items. See
  `\Mibew\Asset\AssetManagerInterface::getJsAssets()` for details of their
  meaning. Modify this array to add or remove additional JavaScript files.


#### JavaScipt plugin options

The event can be referenced using value of `\Mibew\EventDispatcher\Events::PAGE_ADD_JS_PLUGIN_OPTIONS`
constant.

This event is triggered before options of JavaScript plugins are attached to a
page. It provides an ability for plugins to pass some data to the client side.
An associative array with the following items is passed to the event handlers:

* "request": `\Symfony\Component\HttpFoundation\Request`, a request instance.
  Plugins will work at the requested page.
* "plugins": associative array, whose keys are plugins names and values are
  plugins options. Modify this array to add or change plugins options.


### <a name="resource-events"></a>Resource events

#### Access denied

The event can be referenced using value of `\Mibew\EventDispatcher\Events::RESOURCE_ACCESS_DENIED`
constant.

This event is triggered if the access for resource is denied. An
associative array with the following items is passed to the event
handlers:

* "request": `\Symfony\Component\HttpFoundation\Request`, incoming request
  object.
* "response": `\Symfony\Component\HttpFoundation\Response`, if a plugin wants to
  send a custom response to the client it should attach a response object to
  this field.


#### Not found

The event can be referenced using value of `\Mibew\EventDispatcher\Events::RESOURCE_NOT_FOUND`
constant.

This event is triggered if a resource is not found. An associative array with
the following items is passed to the event handlers:

* "request": `\Symfony\Component\HttpFoundation\Request`, incoming request
  object.
* "response": `\Symfony\Component\HttpFoundation\Response`, if a plugin
  wants to send a custom response to the client it should attach a response
  object to this field.


### <a name="routing-events"></a>Routing events

#### Alter

The event can be referenced using value of `\Mibew\EventDispatcher\Events::ROUTES_ALTER`
constant.

This event is triggered after all routes are loaded. It provides an ability for
plugins to alter routes collection before it will be used. An associative array
with the following items is passed to the event handlers:

* "routes" an instance of `\Symfony\Component\Routing\RouteCollection` class.


### <a name="thread-events"></a>Thread events

#### Function call

The event can be referenced using value of `\Mibew\EventDispatcher\Events::THREAD_FUNCTION_CALL`
constant.

This event is triggered when an API a function is called at client side in the
"_chat_" application, but the system is not aware of this function.

Plugins can implement custom API functions by attaching handlers to the event.
If a plugin wants to return some results, it should use "results" element of the
event arguments array (see below).

An associative array with the following items is passed to the event handlers:

* "request_processor": an instance of `\Mibew\RequestProcessor\ThreadProcessor`
  which processes the current call.
* "function": string, name of the function that was called.
* "arguments": associative array of arguments that was passed to the function.
* "results": array, list of function results.

Here is an example of the event handler:

```php
public function callHandler(&$function)
{
    // Check that the function we want to implement is called.
    if ($function['function'] == 'microtime') {
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

The event can be referenced using value of `\Mibew\EventDispatcher\Events::THREAD_CREATE`
constant.

This event is triggered after a thread has been created. An associative array
with the following items is passed to the event handlers:

* "thread": an instance of `\Mibew\Thread`.


#### Update

The event can be referenced using value of `\Mibew\EventDispatcher\Events::THREAD_UPDATE`
constant.

This event is triggered after a thread is saved. An associative array with the
following items is passed to the event handlers:

* "thread": an instance of `\Mibew\Thread`, state of the thread after the
  update.
* "original_thread": an instance of `\Mibew\Thread`, state of the thread before
  the update.


#### Delete

The event can be referenced using value of `\Mibew\EventDispatcher\Events::THREAD_DELETE`
constant.

This event is triggered after a thread has been deleted. An associative array
with the following items is passed to the event handlers:

* "id": int, deleted thread ID.


#### Close

The event can be referenced using value of `\Mibew\EventDispatcher\Events::THREAD_CLOSE`
constant.

This event is triggered after a thread has been closed. An associative array
with the following items is passed to the event handlers:

* "thread": an instance of `\Mibew\Thread`.


#### Post message

The event can be referenced using value of `\Mibew\EventDispatcher\Events::THREAD_POST_MESSAGE`
constant.

This event is triggered before a message has been posted to thread. It provides
an ability for plugins to alter message, its kind or options. An associative
array with the following items is passed to the event handlers:

* "thread": an instance of `\Mibew\Thread`.
* "message_kind": int, message kind.
* "message_body": string, message body.
* "message_options": associative array, list of options passed to
  `\Mibew\Thread::postMessage()` method as the third argument.


#### Alter messages

The event can be referenced using value of `\Mibew\EventDispatcher\Events::THREAD_GET_MESSAGES_ALTER`
constant.

This event is triggered after messages related with a thread are loaded. It
provides an ability for plugins to alter messages set. An associative array with
the following items is passed to the event handlers:

* "thread": an instance of `\Mibew\Thread`.
* "messages": array, list of messages. Each message is an associative array. See
  `\Mibew\Thread::getMessages()` return value for details of its structure.


### <a name="users-events"></a>Users events

#### Alter threads

The event can be referenced using value of `\Mibew\EventDispatcher\Events::USERS_UPDATE_THREADS_ALTER`
constant.

This event is triggered before the threads list is sent to the "users" client
side application. It provide an ability to alter the list. A plugin can attach
some fields to each thread or completeley replace the whole list. An associative
array with the following items is passed to the event handlers:

* "threads": array of threads data arrays.


#### Load visitors

The event can be referenced using value of `\Mibew\EventDispatcher\Events::USERS_UPDATE_VISITORS_LOAD`
constant.

This event is triggered before the list of on site visitors is loaded for
sending to the "users" client side application. It provide an ability for
plugins to load, sort and limit visitors list. An associative array with the
following items is passed to the event handlers:

* "visitors": array of visitors data arrays. Each visitor array must contain at
  least the following keys: "id", "userName", "userAgent", "userIp", "remote",
  "firstTime", "lastTime", "invitations", "chats", "invitationInfo". If there
  are no visitors an empty array should be used.

If the "visitors" item was not set by a plugin the default system loader
will be used.


#### Alter visitors

The event can be referenced using value of `\Mibew\EventDispatcher\Events::USERS_UPDATE_VISITORS_ALTER`
constant.

This event is triggered before the on site visitors list is sent to the
"_users_" client application. It provide an ability to alter the list. A plugin
can attach some fields to each visitor or completeley replace the whole list. An
associative array with the following items is passed to the event handlers:

* "visitors": array of visitors data arrays.


#### Function call

The event can be referenced using value of `\Mibew\EventDispatcher\Events::USERS_FUNCTION_CALL`
constant.

This event is triggered when an API a function is called at client side in the
"_users_" application, but the system is not aware of this function.

Plugins can implement custom API functions by attaching handlers to the event.
If a plugin wants to return some results, it should use "results" element of the
event arguments array (see below).

An associative array with the following items is passed to the event handlers:

* "request_processor": an instance of `\Mibew\RequestProcessor\UsersProcessor`
  which processes the current call.
* "function": string, name of the function that was called.
* "arguments": associative array of arguments that was passed to the function.
* "results": array, list of function results.

Here is an example of the event handler:

```php
public function callHandler(&$function)
{
    // Check that the function we want to implement is called.
    if ($function['function'] == 'microtime') {
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

#### Create

The event can be referenced using value of `\Mibew\EventDispatcher\Events::VISITOR_CREATE`
constant.

This event is triggered when a visitor is tracked by the widget for the first
time. An associative array with the following items is passed to the event
handlers:

* "visitor": array, list of visitor's info. See returned value of
  `track_get_visitor_by_id()` function for details of its structure.


#### Track

The event can be referenced using value of `\Mibew\EventDispatcher\Events::VISITOR_TRACK`
constant.

This event is triggered every time a visitor is tracked by the widget. An
associative array with the following items is passed to the event handlers:

* "visitor": array, list of visitor's info. See returned value of
  `track_get_visitor_by_id()` function for details of its structure.


#### Delete old

The event can be referenced using value of `\Mibew\EventDispatcher\Events::VISITOR_DELETE_OLD`
constant.

This event is triggered after old visitors are deleted. An associative array
with the following items is passed to the event handlers:

* "visitors": array, list of removed visitors' IDs.


### <a name="widget-events"></a>Widget events

#### Alter response

The event can be referenced using value of `\Mibew\EventDispatcher\Events::WIDGET_RESPONSE_ALTER`
constant.

This event is triggered every time the widget data is ready to be sent. An
associative array with the following items is passed to the event listeners:

* "visitor": array, visitor's info.
* "request": an instance of `\Symfony\Component\HttpFoundation\Request` which
  represents incoming request.
* "response": array, set of data that will be sent to the widget. See
  description of its stucture and use case below.
* "route_url_generator": an instance of `\Mibew\Routing\Generator\SecureUrlGeneratorInterface`.
* "asset_url_generator": an instance of `\Mibew\Asset\Generator\UrlGeneratorInterface`.

This event can be used to do something at page the visitor is currenlty browsing.

For example we can call a function every time the widget get the response from
the server. Here is the event listener code from a plugin:

```php
public function callHandler(&$args)
{
    // This is just a shortcut for URL generator.
    $g = $args['asset_url_generator'];

    // The external libraries can be loaded before the function will be
    // called. There can be as many libraries as needed (even none).
    // The keys of the "load" array are libraries IDs and values are
    // their URLs.
    $args['response']['load']['the_lib'] = 'http://example.com/lib.js';
    $args['response']['load']['the_func'] = $g->generate($this->getFilesPath() . '/func.js');

    // The "handlers" array contains a list of functions that should be
    // called.
    $args['response']['handlers'][] = 'usefulFunc';

    // The "dependencies" array lists all libraries a function depend on.
    // In this example "usefulFunc" depends on libraries with "the_lib"
    // and "the_func" IDs.
    $args['response']['dependencies']['usefulFunc'] = array('the_lib', 'the_func');

    // Some extra data can be passed to the function.
    $args['response']['data']['usefulFunc'] = array('time' => microtime(true));
}
```

Here is the JavaScript part of the example:

```javascript
(function(Mibew) {
    // Notice the full function name. All callable functions must be
    // defined as properties of Mibew.APIFunctions object.
    Mibew.APIFunctions.usefulFunc = function(data) {
        // Do some job here.
        console.dir(data.usefulFunc);
    }
})(Mibew);
```
