export default {
    patterns: [
        "!/.git/",
        "!/jsdocs/",
        "!/node_modules/",
        "**",
    ],
    checkers: [
        {
            patterns: "/src/**/*.js",
            linters: {
                eslint: ["eslint.config.js", "eslint_browser.config.js"],
            },
        }, {
            patterns: "/.script/**/*.js",
            linters: {
                eslint: ["eslint.config.js", "eslint_node.config.js"],
            },
        }, {
            patterns: "/.metalint/**/*.js",
            linters: {
                eslint: ["eslint.config.js", "eslint_config.config.js"],
            },
        }, {
            patterns: "/src/dashboard/**/*.html",
            linters: {
                htmlhint: [
                    "htmlhint.config.js",
                    "htmlhint_dashboard.config.js",
                ],
            },
        }, {
            patterns: "*.tpl",
            linters: {
                htmlhint: [
                    "htmlhint.config.js",
                    "htmlhint_tpl.config.js",
                ],
            },
        }, {
            patterns: "*.css",
            linters: "stylelint",
        }, {
            patterns: ["!/CHANGELOG.md", "*.md"],
            linters: "markdownlint",
        }, {
            patterns: "*.json",
            linters: { "jsonlint-mod": null },
        }, {
            patterns: "*.yml",
            linters: { "yaml-lint": null },
        }, {
            patterns: "/package.json",
            linters: "david",
        },
    ],
};
