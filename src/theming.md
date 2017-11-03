---
title: Theming
show_in_menu: contents
nav_sort: 30
---

# Theming

**Mibew Messenger** provides an ability to heavily alter its look'n'feel in a
number of ways. Here is the list of parts that can be themed:

* [Chat button](#chat-button).
* [Chat window](#chat-window).
* [Invitation to chat](#invitation).
* [Administrative interface](#interface).

## <a name="chat-button"></a>Theming chat button

Graphical chat buttons could have different outlook depending on their style
that could be specified during the process of button code generation.

Usually the button contains some text, that's why button styles considered to
be tied to localization. So appropriate images should be placed in the
directory of a locale, i.e. in `locales/<2-letter code>/button/`.

The name of a button image has a special format:
`<name of the style>_<button state>.<extension>`, where `<button state>` should
be either _'on'_ (for an image that is shown if there are operators ready to
chat) or _'off'_ (for an image that is shown if there are no free operators),
and `<extension>` should be either _'gif'_ or _'png'_.

If there are images for both states of a button, the appropriate style will be
automatically available for the related locale in the button generation form.

## <a name="chat-window"></a>Theming chat window

Styles for the chat window are stored in `styles/chats/` directory, with each
style in its own subdirectory. For example, the style named _'default'_ is
stored in `styles/chats/default/` directory.

**Mibew Messenger** automatically scans the styles directory, so new chat
styles becomes available in the button generation form and at the _'Settings'_
page immediately after addition.

Here is the description of files and directories that are used in the
_'default'_ style (which is, obviously, the default style for chat windows in
**Mibew Messenger**):

* `chat.css`: the main CSS file of the style. Connected in
  `src/mibew/styles/chats/default/templates_src/server_side/_layout.handlebars`.
* `chat_ie7.css`: additional CSS file that is used only in IE7. Connected in
  `src/mibew/styles/chats/default/templates_src/server_side/chat.handlebars`.
* `config.yml`: style configuration. Contains information about the style and
  its options.
* `iframe.css`: CSS file used to customize the chat popup. Its name and path
  are specified in `config.yml`.
* `images/`: directory containing all images used in CSS files and in the
  markup of style templates.
* `js/source/`: directory containing raw JavaScript files used in the style.
* `js/compiled/scripts.js`: compiled, minified and merged JavaScript files.
  Connected in `styles/chats/default/templates_src/server_side/chat.handlebars`.
* `screenshots/`: directory containing previews for the style.
* `templates_src/server_side/`: directory containing Handlebars templates to
  be rendered at the **Server** side.
* `templates_src/client_side/`: directory contanining raw Handlebars.js
  templates to be rendered at the **Client** side.
* `templates_compiled/cliend_side/templates.js`: compiled and merged
  Handlebars.js templates to be used at the **Client** side.

The style needs to be built (with its JavaScripts and templates compiled)
before use. See `src/gulpfile.js` (`chat-styles`,
`chat-styles-handlebars`, `chat-styles-js` tasks) for more info.

If one needs to create a custom style, it is possible to copy the default
style and use it as a starting point. But one should be aware that probably
it will be neccessary to alter the Gulp tasks mentioned above.

## <a name="invitation"></a>Theming invitation

Styles for invitations are stored in `styles/invitations/` directory, with each
style in its own subdirectory. For example, the style named _'default'_ is
stored in `styles/invitations/default/` directory.

**Mibew Messenger** automatically scans the styles directory, so new invitation
styles becomes available in the button generation form and at the _'Settings'_
page immediately after addition.

Here is the description of files and directories that are used in the
_'default'_ style (which is, obviously, the default style for invitations in
**Mibew Messenger**):

* `24x24.png`: image, used in `invite.css`.
* `close.gif`: image, used in `invite.css`.
* `config.yml`: style configuration. Contains information about the style and
  its options.
* `invite.css`: CSS file defining the outlook of the invitation popup.
* `screenshots/`: directory containing previews for the style.

If one needs to create a custom invitation style, it is possible to copy the
default style and use it as a starting point.

## <a name="interface"></a>Theming administrative interface

Styles for the administrative interface of **Mibew Messenger** are stored in
`styles/pages/` directory, with each style in its own subdirectory.
For example, the style named _'default'_ is stored in `styles/pages/default/`
directory.

**Mibew Messenger** automatically scans the styles directory, so new interface
styles becomes available at the _'Settings'_ page immediately after addition.

Here is the description of files and directories that are used in the
_'default'_ style (which is, obviously, the default style for the
administrative interface of **Mibew Messenger**):

* `config.yml`: style configuration. Contains information about the style and
  its options.
* `css/`: directory containing CSS files of the style.
* `images`: directory containing images used in CSS files and in the markup
  of style templates.
* `js/`: directory containing JavaScripts connected in the markup of style
  templates.
* `screenshots/`: directory containing previews for the style.
* `templates_src/server_side/`: directory containing Handlebars templates to
  be rendered at the **Server** side.
* `templates_src/client_side/`: directory contanining raw Handlebars.js
  templates to be rendered at the **Client** side.
* `templates_compiled/cliend_side/templates.js`: compiled and merged
  Handlebars.js templates to be used at the **Client** side.

The style needs to be built (with its templates compiled) before use.
See `src/gulpfile.js` (`page-styles` task) for more info.

If one needs to create a custom style, it is possible to copy the default
style and use it as a starting point. But one should be aware that probably
it will be neccessary to alter the Gulp task mentioned above.
