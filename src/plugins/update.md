---
title: Update
show_in_menu: contents
nav_sort: 10
---

# Plugin update

Update procedure can vary from plugin to plugin but the common steps are the
same and listed below. Also it's recommended to check README file shipped
with a plugin before update it.


## The process

### Get the plugin

First of all you need to download new version of plugin's sources. In the most
cases plugin's author provides prepared `.zip` or `.tar.gz` archive with the
plugin sources.

All officially approved plugins are listed at https://mibew.org/plugins page.


### Update sources

When you've got the plugin's archive you should extract files from it and
replace old plugin's files with new ones.

For example, files of "**FooCorp:Connector**" plugin should be situated in
`<mibew base path>/plugins/FooCorp/Mibew/Plugin/Connector/` directory.

**Warning**: Letters case in the path is important!

It's highly recommended to backup files before replace them.


### Update database

After plugin's files are updated the database should be updated too. To do so
navigate to `<mibew base URL>/operator/plugin` page and click on "_update_" link
in plugin's row.

It's highly recommended to backup database before the update.

If the plugin was updated correctly the value in "_state_" column will be
changed to "_working_". If it does not check apache's error log for details
about the problem.
