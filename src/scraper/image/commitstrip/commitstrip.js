/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

/**
 * Converti un élément HTML `<em>` en SVG. Cette fonction est utilisée quand il
 * n'y a pas de miniature et l'élément `<em>` a seulement une couleur de fond et
 * un texte affiché au centre.
 *
 * @param {HTMLElement} em L'élément HTML `<em>` à convertir.
 * @returns {string} Le code SVG équivalent.
 */
const svgize = (em) => {
    return (
        "data:image/svg+xml," +
        '<svg xmlns="http://www.w3.org/2000/svg" width="940" height="492">' +
        '  <rect x="0" y="0" width="100%" height="100%"' +
        `        fill="${em.style.backgroundColor}" />` +
        '  <text x="50%" y="50%" font-size="73px" font-family="sans-serif"' +
        '        fill="white" dominant-baseline="middle"' +
        `        text-anchor="middle">${em.textContent}</text>` +
        "</svg>"
    );
};

const CommitStripScraper = class {
    // eslint-disable-next-line class-methods-use-this
    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://www.commitstrip.com/fr/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll(".excerpts a"))
            .slice(0, max)
            .map((a) => {
                const link = a.href;
                const parts = link.split("/");
                return {
                    date: new Date(parts[3], parts[4], parts[5]).getTime(),
                    guid: link,
                    img:
                        a.querySelector(":scope > img")?.src ??
                        svgize(a.querySelector(":scope > em")),
                    link,
                    title: a.querySelector("strong").textContent,
                };
            });
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, CommitStripScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
