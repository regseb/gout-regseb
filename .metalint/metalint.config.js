/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

/**
 * @import { Config } from "metalint/types"
 */

/**
 * @type {Config}
 */
export default {
    patterns: [
        "**",
        // Ignorer les répertoires générés.
        "!/.git/**",
        "!/jsdocs/**",
        "!/node_modules/**",
        // Ignorer les fichiers de configuration de Visual Studio Code.
        "!/.vscode/**",
        // Ignorer les fichiers de configuration de IntelliJ IDEA.
        "!/.idea/**",
        // Ignorer les fichiers temporaires de Vim.
        "!*.swp",
        // Ignorer les autres lockfiles.
        "!/bun.lockb",
        "!/pnpm-lock.yaml",
        "!/yarn.lock",
    ],
    checkers: [
        {
            patterns: "*.js",
            linters: ["prettier", "prettier_javascript", "eslint"],
            overrides: [
                {
                    patterns: "/src/**",
                    linters: "eslint_browser",
                },
                {
                    patterns: "/.script/**",
                    linters: "eslint_node",
                },
                {
                    patterns: "*.config.js",
                    linters: ["eslint_node", "eslint_config"],
                },
            ],
        },
        {
            patterns: "*.html",
            linters: ["prettier", "htmlhint"],
            overrides: [
                {
                    patterns: "/template/dashboard/**",
                    linters: "htmlhint_dashboard",
                },
            ],
        },
        {
            patterns: "*.tpl",
            linters: ["prettier", "prettier_tpl", "htmlhint", "htmlhint_tpl"],
        },
        {
            patterns: "*.css",
            linters: ["prettier", "prettier_css", "stylelint"],
        },
        {
            patterns: "*.md",
            linters: ["prettier", "markdownlint"],
        },
        {
            patterns: "*.json",
            linters: ["prettier", "prantlf__jsonlint"],
            overrides: {
                patterns: "/package.json",
                linters: "npm-package-json-lint",
            },
        },
        {
            patterns: "*.yml",
            linters: ["prettier", "yaml-lint"],
        },
        {
            patterns: "*.svg",
            linters: "prettier",
        },
    ],
};
