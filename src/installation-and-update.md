---
title: Installation and update
show_in_menu: contents
nav_sort: 0
---

# Installation and update

## Requirements

 * Apache web server 1.3.34 or above with the ability to use local .htaccess
   files (mod_rewrite module is optional, but highly recommended).
 * MySQL database 5.0 or above.
 * PHP 7.2.5 or above with PDO, pdo_mysql, cURL, mbstring and GD extensions.


## Getting the sources

At the moment there are several options to get the source of **Mibew
Messenger**.


### Prebuilt version

This version should be used in most cases. The installation package is just
a `.zip` archive (`.tar.gz` archive is also available) with all files of
**Mibew Messenger**. It contains all third party dependencies too. The link to
the current stable version is available at the
[dedicated page](https://mibew.org/download) on the official site of the
project.


### Building from sources

Prebuilt version cannot suit all needs of the community. In some cases a user
may be interested in the latest development version of **Mibew Messenger**, or
in using custom (patched) version of the **Core**.

The following instructions are addressed to users who have basic knowledge
about [node.js](http://nodejs.org/), [npm](https://www.npmjs.org/),
[Gulp](http://gulpjs.com/), and [Composer](https://getcomposer.org/).

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


## Installation

When the archive with **Mibew Messenger** is downloaded the installation
process can be started. Here are the instructions:

1. Create the directory with name _'mibew'_ in the document root of your
   website.
2. Upload all files from the installation archive (retaining the directory
   structure) into the created directory.
   Make sure that both you and your web server can access the contents of the
   directory. On \*nix platform you may have to manually set the permissions
   bitmask to `0755` (`chmod 0755 mibew`).
3. In case of \*nix platform change the owner of `mibew/files/avatar` and
   `mibew/cache` directories to the user of the web server (depending on
   system the name of the user could vary, for example it can be `www` or
   `www-data`).
   The owner should have all rights on the directories `mibew/files/avatar`
   and `mibew/cache`
   (`chmod 0700 mibew/files/avatar && chmod 0700 mibew/cache`).
4. Create a MySQL database with the name `mibew`.
5. Copy the file `mibew/configs/default_config.yml` to
   `mibew/configs/config.yml`.
6. Edit `mibew/configs/config.yml` to specify the information needed to
   connect to the database.
7. Using your web browser visit `http://<yourdomain>/mibew/install` and
   perform step-by-step installation via the web interface.
8. Delete the `mibew/install.php` file.
9. Login as
        user: `admin`
        password: `<your password>`
10. Configure periodically running tasks by setting up an automated
    process to access the web page
    `http://<yourdomain>/cron?cron_key=<cron key>`

    The full URL including the secret "cron key" used to protect against
    unauthorized access can be seen on the _'General'_ tab at the _'Settings'_
    page in the administrative interface of your **Mibew Messenger**.


## Update

Starting from the 2.0.0-beta.1 version **Mibew Messenger** can be updated to
later versions using built-in update tool.

Please note that the update tool doesn't fully automate the whole update
process, but only the database migrations.

Also please note that there are neither migration tools nor update guides for
the obsolete 1.6.x versions of **Mibew Messenger**.

Here are the instructions for the update process:

1. Backup your `mibew/configs/config.yml` file.
2. Backup your `mibew/files/avatar` directory.
3. Backup your database. Although it's not required, it's strongly recommended
   to do so.
3. Disable all plugins.
4. Delete all items in `mibew` directory on the server.
5. Upload all files from the installation archive (retaining the directory
   structure) into `mibew` directory.
6. In case of \*nix platform change the owner of `mibew/files/avatar` and
  `mibew/cache` directories to the user of the web server (depending on system
  the name of the user could vary, for example it can be `www` or `www-data`).
  The owner should have all rights on the directories `mibew/files/avatar` and
  `mibew/cache`
  (`chmod 0700 mibew/files/avatar && chmod 0700 mibew/cache`).
7. Restore all **Mibew Messenger** settings in `mibew/configs/config.yml`.
8. Restore contents of `mibew/files/avatar` directory.
9. Using your web browser Visit `http://<yourdomain>/mibew/update/` and follow
   the instructions to update the database tables (if needed).
10. Delete the `mibew/install.php` file.
11. Enable disabled plugins.

## Get started

Congratulations! You finished the installation/update process. Now you should
take several steps to get started:
1. Configure and generate the button code at
   `http://<yourdomain>/mibew/operator/button-code`.
2. Add HTML code of the button to a target's site markup.
3. Wait for visitors on _'Pending users'_ page in the administrative interface
   of your **Mibew Messenger** (i.e. `http://<yourdomain>/mibew/operator/users`).
