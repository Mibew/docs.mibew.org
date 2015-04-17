---
title: Core architecture
show_in_menu: contents
nav_sort: 0
---

# Core Architecture

The Core of Mibew can be separated in three parts: server-side application and
client side application and widget. This page does not describe low-level
organization of the parts but provides their overview, describes their purpose
and illustrates how they interact with each other.


## Server side application

Server side part of Mibew works with Apache, PHP and MySQL. It's written in the
top of [Symfony 2](http://symfony.com/) framework. At the current state Mibew
does not use full Symfony's stack but uses several Symfony's components.

Mibew does not depends only on Symfony. There are some other third-party
server-side libraries that are used in Mibew. Here is the list:

* [Composer](https://getcomposer.org/) is used to manage dependencies.
* [Handlebars.php](https://github.com/XaminProject/handlebars.php) is the
  template engine of Mibew.
* [Handlebars.php helpers](https://github.com/JustBlackBird/handlebars.php-helpers)
  gives extra power to templates.
* [Stash](http://www.stashphp.com/) is used to work with cache.
* [Canteen HTML5](https://github.com/Canteen/CanteenHTML5) library simplifies
  dynamic markup generation.
* [PHP semver](https://github.com/vierbergenlars/php-semver) is used within
  plugins manager to resolve plugins' dependencies.
* [Swiftmailer](http://swiftmailer.org/) is used as an abstraction over mail
  sending functionality.
* [UAParser](https://github.com/ua-parser/uap-php) helps to determine browser
  used by a client.
* [Punycode](https://github.com/true/php-punycode) library is used to build IDN
  support.

Server side part of Mibew can be split into subsystem. This subsystems are not
completely isolated but can be described separately. At the moment the most
important subsystems are:

* Cache subsystem
* Client application's requests processor
* Events dispatcher
* Plugins manager
* Routing subsystem
* Styles and templates


## Client side application

Client side application is written in JavaScript. It's built on the top of
[Marionette.js](http://marionettejs.com/) framework and uses some other
third-party libraries:

* [jQuery](https://jquery.com/) is used for DOM manipulations
* [Underscore.js](http://underscorejs.org/) is used to simplify routine
  JavaScript operations.
* [Backbone.js](http://backbonejs.org/) is the base of Marionette.js.
* [Handlebars.js](http://handlebarsjs.com/) is the template engine.
* [Vex](http://github.hubspot.com/vex/docs/welcome/) provides beautiful and
  customizable dialog popups.
* [Validator.js](https://github.com/chriso/validator.js) simplifies data
  validation at client side.

Client side application is a Marionette.js application which does restricted
number of tasks. Not all JavaScript files in Mibew are related with client side
applications. At the moment there are three client side applications:

* Chat application
* Users application
* Thread log application

_Chat application_ implements all client-side logic behind both user and
operator chat windows. The application exchanges data with the server-side
application using special RPC-like protocol.

_Users application_ represents all client-side logic behind the page with
awaiting users. The application exchanges data with the server-side
application using special RPC-like protocol.

_Thread log application_ is a stub application that only renders thread log.
This application does not exchange data with the server.


## Client — Server interaction

This is just an overview of the interaction. It does not contains full
description of low level stuff powers the interaction.

Interaction between client-side application and server-side application is a
kind of RPC interaction. Let's name interaction parts as Alice and Bob. Each
data package which is transferred from Alice to Bob can contain requests for
functions invocation and results of previous Bob's requests.

Alice can synchronously run several functions at Bob's side. Each function can
use use results of previously ran functions as its arguments. Such behavior
provides unlimited flexibility and reduces transferred packages count.

Let's back to programming. A part of client side app (namely `Mibew.Server`
object which is placed in `js/source/default/server.js`) sends AJAX request to
the Mibew server at regular intervals. Also there is an option to send such
requests immediately.

Encoded package is sent as body of HTTP(S) POST request. The server-side
application invoke all requested functions and generates response package in
JSON format. If the server-side application needs to call something at client
side requests for calls are included in the response package.

At the server side `\Mibew\RequestProcessor\ClientSideProcessor` class is
responsible for the interaction. Actually it's an abstract class, so different
client side application are served by different requests processors:

* `\Mibew\RequestProcessor\ThreadProcessor` is used to interact with
  _chat application_.
* `\Mibew\RequestProcessor\UsersProcessor` is used to interact with
  _users application_.


## Widget

Widget is a bunch of HTML markup and JavaScript code which is inserted in the
target page. In other words the widget is a chat button.

Code of The widget is written with pure JavaScript without any
libraries/frameworks. It's done intentionally to avoid problems with the target
site's libraries.

## Widget — Server interaction

Interaction between server and widget is optional. It's used only when
**Enable "Tracking and inviting"** option is turned on in Mibew settings.

The widget sends requests to the server at regular intervals. To avoid problems
with cross-domain requests JSONP technique is used.

At the moment there is no way to pass custom data from widget to server.
Nevertheless the server can use powerful RPC-like protocol to do something at
widget side (within target page context). It also allows to load external
JavaScript libraries before a function will be invoked.
