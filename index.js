var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    assets = require('metalsmith-assets'),
    templates = require('metalsmith-templates'),
    navigation = require('metalsmith-navigation'),
    bower = require('bower');

// Install bower dependencies
bower.commands.install([], {}, {})
    .on('error', function(error) {
        throw error;
    })
    .on('end', function() {
        // Build the site
        (new Metalsmith(__dirname))
            // This data will be available inside the templates
            .metadata({
                baseUrl: '',
                githubUrl: 'https://github.com/mibew/mibew',
                // It's documented nowhere but these partials will be passed to
                // Handlebars.js template engine.
                partials: {
                    // File extension is not skipped here because it will be
                    // append automatically using one from rendered file.
                    menu: 'menu'
                }
            })
            .use(markdown())
            // Permalink pattern is intentionally omitted to convert files like
            // path/to/md/file.md to path/to/md/file/index.html
            .use(permalinks())
            .use(navigation(
                {
                    contents: {
                        sortBy: 'nav_sort',
                        filterProperty: 'show_in_menu',
                        includeDirs: true
                    }
                },
                navSettings = {
                    navListProperty: 'navs',
                    permalinks: true
                }
            ))
            .use(templates({
                engine: 'handlebars',
                // The extension cannot be omitted here because it will be used
                // for all partials later.
                'default': 'default.handlebars'
            }))
            .use(assets({
                source: './assets',
                destination: './assets'
            }))
            .build(function(err) {
                if (err) {
                    throw err;
                }
            });
    });
