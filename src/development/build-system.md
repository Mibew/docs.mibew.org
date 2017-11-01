---
title: Build system
show_in_menu: contents
nav_sort: 40
---

# Build System

The build process is needed to download third party libraries, compile
templates, minify and concatenate JavaScript files, etc. It means that you have
to use build system whenever you want to modify the **Core** of
**Mibew Messenger** and/or use the development version of **Mibew Messenger**
from the repository.

**Mibew Messenger** utilizes [Gulp.js](http://gulpjs.com/) as a build system.
To make Gulp run [node.js](https://nodejs.org/) and
[npm](https://www.npmjs.com/) are required. For most common build tasks
[PHP](http://php.net/) is required too.

There are several steps one should take before using the development version
of **Mibew Messenger** from the repository:

1. Obtain a local copy of the repository using `git clone`, download button,
   or in another way.
2. Make sure that [PHP](http://php.net/) is installed and can be used in CLI
   mode.
2. Install [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/).
3. Install [Gulp](http://gulpjs.com/).
5. Navigate to `src/` directory of the local copy of the repository.
6. Install npm dependencies using `npm install`.
7. Run Gulp to build **Mibew Messenger** using `gulp default`.

Finally, `.tar.gz` and `.zip` archives of the ready-to-use development version
of **Mibew Messenger** will be available in `src/release` directory.

The `default` task that was given above is just one of many available build
tasks. The full list of build tasks can be obtained by running `gulp -T` in
`src/` directory of the repository. Here are descriptions of several most
frequently used tasks:

* `gulp rebuild`: installs all necessary dependencies and compile (minifies,
  concats, ...) all files that should be compiled. The result of the task is a
  redy-to-use development version of **Mibew Messenger**.
* `gulp default`: the same as `gulp rebuild` but also packs **Mibew Messenger**
  into the installation archives in `src/release/` directory.
* `gulp phpcs`: runs
  [PHP Code Sniffer](https://github.com/squizlabs/PHP_CodeSniffer) to check
  whether the source code complies with the coding style.
