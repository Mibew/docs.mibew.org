var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    assets = require('metalsmith-assets'),
    templates = require('metalsmith-templates'),
    navigation = require('metalsmith-navigation'),
    bower = require('bower');

/**
 * Installs bower dependencies that are needed for docs site.
 *
 * @param {Function} callback A function that will be called when the
 * dependencies are installed.
 */
var installBowerDependencies = function(callback) {
    bower.commands.install([], {}, {})
        .on('error', function(error) {
            throw error;
        })
        .on('end', function() {
            if (typeof callback === 'function') {
                callback();
            }
        });
}

/**
 * Builds static HTML pages of the docs site.
 *
 * @param {Function} callback A function that will be called when the
 * pages are built.
 */
var buildPages = function(callback) {
    (new Metalsmith(__dirname))
        // This data will be available inside the templates
        .metadata({
            baseUrl: '',
            githubUrl: 'https://github.com/Mibew/mibew',
            // It's documented nowhere but these partials will be passed to
            // Handlebars.js template engine.
            partials: {
                // File extension is skipped here because it will be append
                // automatically using one from rendered file.
                menu: 'menu'
            }
        })
        .use(markdown())
        .use(navigation(
            {
                contents: {
                    sortBy: 'nav_sort',
                    filterProperty: 'show_in_menu',
                    includeDirs: true
                }
            },
            navSettings = {
                navListProperty: 'navs'
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
            if (typeof callback === 'function') {
                callback();
            }
        });
}

// Build the site
installBowerDependencies(function() {
    buildPages();
});
