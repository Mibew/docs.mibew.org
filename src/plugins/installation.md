---
title: Installation
show_in_menu: contents
nav_sort: 0
---

# Plugin installation

Installation procedure can vary from plugin to plugin but the common steps are
the same and listed below. Also it's recommended to check README file shipped
with a plugin before install it.


## The process

### Get the plugin

First of all you need to download the plugin sources. In the most cases plugin's
author provides prepared `.zip` or `.tar.gz` archive with the plugin sources.

All officially approved plugins are listed at https://mibew.org/plugins page.


### Upload the plugin

When you've got the plugin's archive you should extract files from it and upload
them to the Mibew's server. The files of the plugin should be in
`<mibew base path>/plugins/<Vendor name>/Mibew/Plugin/<Plugin name>/` directory.

For example, the main file of "**FooCorp:Connector**" plugin should have
`<mibew base path>/plugins/FooCorp/Mibew/Plugin/Connector/Plugin.php` path.

**Warning**: Letters case in the path is important!


### Configure the plugin

A plugin may require additional configuration. Check plugin's description or
README file that shipped with plugin's archive to know if the plugin needs to be
configured.

All configuration value are set in `configs/config.yml` file. If you are not
familiar with YAML syntax take a look at https://en.wikipedia.org/wiki/YAML or
any other description that can be find on the Internet.

Plugins configurations are stored in `plugins` associative array, which keys are
fully qualified plugins' names and the values are plugins' options. If there is
no configurable plugins installed the `plugins` array is looks like:

```yaml
plugins: []
```

Lets assume you are trying to install "**FooCorp:Connector**" plugin that requires
`timeout` and `reconnects` options. The `plugins` array from `configs/config.yml`
file becomes:

```yaml
plugins:
    "FooCorp:Connector":
        timeout: 200
        reconnects: 3
```

Also there are special configuration option `weight` that can be applied to
any plugin and controls order in which plugins are loaded. A plugin with lower
weight will be loaded and executed earlier than the one with higher weight. This
option can be omitted and equals to `0` by default.


### Install the plugin

After the plugin's files are in place and the plugin is configured it should be
installed using Mibew web interface.

To do so you should navigate to `<mibew base URL>/operator/plugin` page and
click on "_enable_" link in plugin's row.

![Enable plugin link](../assets/images/enable-plugin.png)

If the plugin was installed and enabled correctly the value in "_state_" column
will be changed to "_working_". If it does not check apache's error log for
details about the problem.
