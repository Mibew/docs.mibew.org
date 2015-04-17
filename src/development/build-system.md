---
title: Build system
show_in_menu: contents
nav_sort: 40
---

# Build System

The build process is needed to download third-party libraries, compile
templates, minify and concatenate JavaScript files, etc. It means that you have
to use build system if you want to modify Mibew's Core or use the latest
unreleased version from the respository.

Mibew uses [Gulp.js](http://gulpjs.com/) as a build system. You also needs
[node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) to make Gulp
works. For the most common tasks [PHP](http://php.net/) is also needed.

There are several actions one should do before use the version from the repository:

1. Obtain a copy of the repository using `git clone`, download button, or another way.
2. Install [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/).
3. Install [Gulp](http://gulpjs.com/).
4. Navigate to `src/` directory of the local copy of the repository.
5. Install npm dependencies using `npm install`.
6. Run Gulp to build Mibew using `gulp default`.

Finally `.tar.gz` and `.zip` archives of the ready-to-use Mibew will be
available in `src/release/` directory.

The `default` task that was used above is just one of many available build
tasks. The full list can be got by running `gulp -T` in `src/` directory of
Mibew repository. Here is descripion of the most frequently used tasks:

* `gulp rebuild`: installs all necessary dependencies and compile (minifies, concats,
  ...) all files that should be compiled. The result of the task is a
  redy-to-use development version of Mibew.
* `gulp default`: the same as `gulp rebuild` but also packs the sources into
  archives under `src/release/` directory.
* `gulp phpcs`: runs [PHP Code Sniffer](https://github.com/squizlabs/PHP_CodeSniffer)
  to check if the sources follows coding style.
