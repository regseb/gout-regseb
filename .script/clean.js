/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import fs from "node:fs/promises";

/**
 * La liste des répertoires et des fichiers à supprimer.
 *
 * @type {string[]}
 */
const PATHS = [
    // Supprimer les répertoires générés.
    "jsdocs/",
    "node_modules/",
    // Supprimer les autres lockfiles.
    "pnpm-lock.yaml",
    "yarn.lock",
];

for (const path of PATHS) {
    fs.rm(path, { force: true, recursive: true });
}
