---
title: Installation
show_in_menu: contents
nav_sort: 0
---

# Plugin installation

Installation procedure can vary from plugin to plugin but the common steps are
the same and listed below. Also it's recommended to check the README file
shipped with a plugin before installation.


## The process

### Get the plugin

First of all you need to download the plugin. In most cases plugin's author
provides prepared `.zip` (or `.tar.gz`) archive with the code.

The list of all stable and officially approved plugins can be found at the
[dedicated page](https://mibew.org/plugins) on the official web site of the
project.


### Upload the plugin

When you've got the plugin's archive you should extract files from it and
upload them to the **Mibew Messenger**'s web server. The files of the plugin
should be placed in
`<mibew base path>/plugins/<Vendor name>/Mibew/Plugin/<Plugin name>/`
directory.

For example the full name of the main file of "**FooCorp:Connector**" plugin
should be
`<mibew base path>/plugins/FooCorp/Mibew/Plugin/Connector/Plugin.php`.

**Warning**: Paths are case sensitive! One should preserve the letters case in
it!


### Configure the plugin

A plugin may require additional configuration. Check plugin's description or
README file shipped with a plugin to find out whether the plugin needs to be
configured.

All configuration values for plugins are set in the basic configuration file
of **Mibew Messenger**, i.e. in `configs/config.yml`. If you are not familiar
with YAML syntax, please take a look at https://en.wikipedia.org/wiki/YAML or
any other description that can be found on the Internet.

Plugins' configurations are stored in the `plugins` associative array, whose
keys are fully qualified plugins' names and the values are plugins' options.
If there are no configurable plugins installed, the `plugins` array should
looks like:

```yaml
plugins: []
```

Let's assume, you are trying to install "**FooCorp:Connector**" plugin that
requires `timeout` and `reconnects` options. In that case the `plugins` array
in `configs/config.yml` file should looks like:

```yaml
plugins:
    "FooCorp:Connector":
        timeout: 200
        reconnects: 3
```

Also there is a special service configuration option `weight` that can be
applied to any plugin and controls the order in which plugins are loaded.
The lower the weight, the earlier a plugin is loaded. This option can be
omitted and equals to `0` by default.


### Install the plugin

After the plugin's files are in place and the plugin is properly configured it
should be installed using the administrative interface of **Mibew Messenger**.
To do so you should navigate to `<mibew base URL>/operator/plugin` page and
click on '_enable_' link in the plugin's row.

If the plugin was installed and enabled successfully the value in '_state_'
column will change to '_working_'. If it did not, one should check the error
log of the web server for details of the problem.
