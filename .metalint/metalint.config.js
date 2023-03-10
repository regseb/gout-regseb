/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

export default {
    patterns: [
        "!/CHANGELOG.md",
        "!/.git/",
        "!/jsdocs/",
        "!/node_modules/",
        "!*.swp",
        "**",
    ],
    checkers: [
        {
            patterns: ["*.json", "*.md", "*.svg", "*.yml"],
            linters: "prettier",
        },
        {
            patterns: ["*.js", "*.ts"],
            linters: {
                prettier: ["prettier.config.js", { tabWidth: 4 }],
            },
        },
        {
            patterns: "/src/**/*.js",
            linters: {
                eslint: ["eslint.config.js", "eslint_browser.config.js"],
            },
        },
        {
            patterns: "/.script/**/*.js",
            linters: {
                eslint: ["eslint.config.js", "eslint_node.config.js"],
            },
        },
        {
            patterns: "*.config.js",
            linters: {
                eslint: ["eslint.config.js", "eslint_config.config.js"],
            },
        },
        {
            patterns: ["!/template/dashboard/", "*.html"],
            linters: "htmlhint",
        },
        {
            patterns: "/template/dashboard/**/*.html",
            linters: {
                htmlhint: [
                    "htmlhint.config.js",
                    "htmlhint_dashboard.config.js",
                ],
            },
        },
        {
            patterns: "*.tpl",
            linters: {
                htmlhint: ["htmlhint.config.js", "htmlhint_tpl.config.js"],
            },
        },
        {
            patterns: "*.css",
            linters: "stylelint",
        },
        {
            patterns: "*.md",
            linters: "markdownlint",
        },
        {
            patterns: "*.json",
            linters: { "jsonlint-mod": null },
        },
        {
            patterns: "/package.json",
            linters: "npm-package-json-lint",
        },
        {
            patterns: "*.yml",
            linters: { "yaml-lint": null },
        },
    ],
};
