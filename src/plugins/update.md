---
title: Update
show_in_menu: contents
nav_sort: 10
---

# Plugin update

Update procedure can vary from plugin to plugin but the common steps are the
same and listed below. Also it's recommended to check the README file shipped
with a plugin before update.


## The process

### Get the plugin

First of all you need to download the plugin. In most cases plugin's author
provides prepared `.zip` (or `.tar.gz`) archive with the code.

The list of all stable and officially approved plugins can be found at the
[dedicated page](https://mibew.org/plugins) on the official web site of the
project.


### Update sources

When you've got the archive with an actual version of a plugin you should
extract files from it and upload them to the **Mibew Messenger**'s web server
replacing the old version of a plugin.

It is highly recommended to backup old files before replacement.


### Update database

After update of the plugin's files, the database should be updated too. To do
so you should navigate to `<mibew base URL>/operator/plugin` page and click on
_'update'_ link in the plugin's row.

It is highly recommended to backup the database before update.

If the plugin was updated successfully the value in _'state'_ column will
change to _'working'_. If it did not, one should check the error log of the
web server for details of the problem.
