---
title: Core architecture
show_in_menu: contents
nav_sort: 0
---

# Core Architecture

The **Core** of **Mibew Messenger** can be divided into three basic parts: the
**Server** side application, client side applications and the **Widget**. This
page does not describe low-level organization of the parts, but provides their
overview, describes their purpose and illustrates how they interacts with each
other.


## Server side application

The **Server** side part of **Mibew Messenger** is written in PHP and works
with MySQL database. It's built on top of [Symfony 2](http://symfony.com/) web
framework. In its actual state **Mibew Messenger** does not use full Symfony's
stack but utilizes several Symfony's components.

**Mibew Messenger** does not depend solely on Symfony. There are other third
party server side libraries used in **Mibew Messenger** too. Here is the list:

* [Composer](https://getcomposer.org/) is used to manage dependencies.
* [Handlebars.php](https://github.com/XaminProject/handlebars.php) is the
  server side template engine of **Mibew Messenger**.
* [Handlebars.php helpers](https://github.com/JustBlackBird/handlebars.php-helpers)
  gives some extra power to templates.
* [Stash](http://www.stashphp.com/) is used to work with cache.
* [Canteen HTML5](https://github.com/Canteen/CanteenHTML5) library simplifies
  dynamic markup generation.
* [PHP semver](https://github.com/vierbergenlars/php-semver) is used within the
  plugins manager to handle plugins' dependencies.
* [Swiftmailer](http://swiftmailer.org/) is used as an abstraction layer for
  sending emails.
* [UAParser](https://github.com/ua-parser/uap-php) helps to detect browser
  used by a client.
* [Punycode](https://github.com/true/php-punycode) library is used to provide
  IDN support.

The **Server** side part of **Mibew Messenger** can be divided into a number of
subsystems. These subsystems are not completely isolated but can be described
separately. At the moment the most important subsystems are:

* Cache subsystem.
* Client application's requests processor.
* Events dispatcher.
* Plugins manager.
* Routing subsystem.
* Styles and templates.


## Client side applications

Client side applications are written in JavaScript. They're built on top of
[Marionette.js](http://marionettejs.com/) framework and utilize several other
third party libraries:

* [jQuery](https://jquery.com/) is used for DOM manipulations.
* [Underscore.js](http://underscorejs.org/) is used to simplify routine
  JavaScript operations.
* [Backbone.js](http://backbonejs.org/) is the base of Marionette.js framework.
* [Handlebars.js](http://handlebarsjs.com/) is the client side template engine.
* [Vex](http://github.hubspot.com/vex/docs/welcome/) provides beautiful and
  customizable dialog popups.
* [Validator.js](https://github.com/chriso/validator.js) simplifies data
  validation at the client side.

As it was pointed above a client side application is a Marionette.js
application that performs a limited number of tasks. One should note that not
all JavaScript files in **Mibew Messenger** are related to client side
applications. At the moment there are three client side applications:

* **Chat application**.
* **Users application**.
* **Thread log application**.

**Chat application** implements all client side logic for both user and
operator chat windows. The application communicates with the **Server** side
application using the special RPC-like protocol.

**Users application** implements all client side logic for the page with the
list of awaiting users. The application communicates with the **Server** side
application using the special RPC-like protocol.

**Thread log application** is a stub application that only renders thread log.
This application does not exchange data with the **Server** side application.


## Client — Server interaction

This is just an overview of the interaction. It does not contain a full
description of low level stuff that powers the interaction.

Interaction between a client side application and the **Server** side
application is an RPC-like interaction. Let's call interacting parties
Alice and Bob. Each data package that is transferred from Alice to Bob
may contain requests for functions invocation and results of previous Bob's
requests.

Alice can synchronously call several functions at Bob's side. Each function can
use results of previously called functions as its arguments. Such behaviour
provides unlimited flexibility and reduces the number of transferred packages.

A part of a client side application (namely `Mibew.Server` object which is
defined in `js/source/default/server.js`) sends AJAX request to the web server
of **Mibew Messenger** at regular intervals. Also there is an option to send
such request immediately.

Encoded package is sent as the body of HTTP(S) POST request. The **Server**
side application invokes all requested functions and generates the response
package in JSON format. If the **Server** side application needs to call
something at the client side, requests for these calls should be included in
the response package.

At the **Server** side `\Mibew\RequestProcessor\ClientSideProcessor` class is
responsible for the interaction. Actually it's an abstract class, so requests
from different client side applications are served by different requests
processors:

* `\Mibew\RequestProcessor\ThreadProcessor` is used to interact with the
  **Chat application**.
* `\Mibew\RequestProcessor\UsersProcessor` is used to interact with the
  **Users application**.


## The Widget

The **Widget** is a mix of HTML markup and JavaScript code that should be
inserted into the markup of the target site. In other words the **Widget** is a
chat button.

The code of the **Widget** is written in pure JavaScript without use of any
libraries or frameworks. It is done intentionally to avoid possible problems
with the JavaScript code of the target site.

## Widget — Server interaction

Interaction between the **Server** and the **Widget** is optional. It is used
only if _Enable "Tracking and inviting"_ option is turned on in the settings of
**Mibew Messenger**.

The **Widget** sends requests to the **Server** at regular intervals. To avoid
problems with cross-domain requests JSONP technique is used.

At the moment there is no way to pass custom data from the **Widget** to the
**Server**. Nevertheless the **Server** can use powerful RPC-like protocol to
do something at the **Widget** side (within the context of the target web page).
It also makes possible to load external JavaScript libraries before invocation
of a function.
