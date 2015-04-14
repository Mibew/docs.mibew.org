---
title: Installation and update
show_in_menu: contents
---

# Installation and update

## Requirements

 * Apache web server 1.3.34 or above with the ability to use local .htaccess
   files (mod_rewrite module is optional, but recommended)
 * MySQL database 5.0 or above
 * PHP 5.3.3 or above with PDO, pdo_mysql and gd extensions


## Getting the sources

At the moment there are several options to get the source of Mibew.


### Prebuilt version

This version should be used in the most cases. The installation package is just
a `.zip` (`.tar.gz`) archive with all Mibew's files. It contains all third-party
dependencies. The current stable version is available at SourceForge
[here](http://sourceforge.net/projects/mibew/).


### Building from sources

Prebuilt version cannot suit all needs of the community. In some cases a user
may be interested in the latest development version of Mibew or in using custom
(patched) version of the Core.

The following instructions are addressed to users who have basic knowledge about
[node.js](http://nodejs.org/), [npm](https://www.npmjs.org/), [Gulp](http://gulpjs.com/)
and [Composer](https://getcomposer.org/).

There are several actions one should do before use the latest version of Mibew
from the repository:

1. Obtain a copy of the repository using `git clone`, download button, or another way.
2. Make sure [PHP](http://php.net/) is installed and can be used in CLI mode.
2. Install [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/).
3. Install [Gulp](http://gulpjs.com/).
5. Navigate to `src/` directory of the local copy of the repository.
6. Install npm dependencies using `npm install`.
7. Run Gulp to build Mibew using `gulp default`.

Finally `.tar.gz` and `.zip` archives of the ready-to-use Mibew will be
available in `src/release` directory.


## Installation

When the archive with Mibew is downloaded the installation process can be
started. Here are the instructions:

1. Create folder with name 'mibew' in the root of your website.
2. Upload all the files contained in installation archive (retaining the directory
   structure) into created folder.
   Be sure to chmod the mibew folder to `0755`.
3. On unix/linux platforms change the owner of `/mibew/files/avatar` and
   `/mibew/cache` folders to the user, under which the web server is running
   (for instance, www). The owner should have all rights on the folders
   `/mibew/files/avatar` and `/mibew/cache`
   (`chmod 0700 /mibew/files/avatar && chmod 0700 /mibew/cache`).
4. Add a MySQL database with the name `mibew`
5. Copy `/mibew/configs/default_config.yml` to `/mibew/configs/config.yml`
6. Edit `/mibew/configs/config.yml` to the information needed to connect to the
   database
7. Using your web browser visit `http://<yourdomain>/mibew/install` and
   perform step-by-step installation.
8. Remove `/mibew/install.php` file from your server
9. Logon as
        user: admin
        password: <your password>
10. Configure periodically running tasks by setting up an automated
    process to visit the page `http://<yourdomain>/cron?cron_key=<key>`

    The full URL including the secret "cron key" used to protect against
    unauthorized access can be seen on the 'General' tab at the 'Settings' page.


## Update

1. Backup your `mibew/configs/config.yml`
2. Backup your `mibew/images/avatar` folder.
3. Backup your database. Although it's not required, it's strongly recommended
   to to so.
3. Delete all items in mibew folder on the server.
4. Upload all files contained in the downloaded archive (retaining the
   directory structure) into mibew folder.
5. On unix/linux platforms change the owner of `/mibew/files/avatar` and
  `/mibew/cache` folders to the user, under which the web server is running
  (for instance, www). The owner should have all rights on the folders
  `/mibew/files/avatar` and `/mibew/cache`
  (`chmod 0700 /mibew/files/avatar && chmod 0700 /mibew/cache`).
6. Restore all settings in `mibew/configs/config.yml`
7. Restore contents of mibew/images/avatar folder.
8. Visit `http://<yourdomain>/mibew/update/` and follow the instructions
   to update the database tables (if needed).
9. Remove `mibew/install.php` file from your server.


## Start work

Congratulations! You finished the installation/update process. Now you should
perform several steps to start work:
1. Get button code at `http://<yourdomain>/mibew/operator/button-code`.
2. Add HTML code of the button setup to the target's site markup.
3. Wait for your visitors on "Pending users"
   (`http://<yourdomain>/mibew/operator/users`) page.
