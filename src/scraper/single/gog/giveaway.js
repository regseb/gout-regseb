/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const GogGiveawayScraper = class {
    // eslint-disable-next-line class-methods-use-this
    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://www.gog.com/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        const giveaway = doc.querySelector("#giveaway");
        if (null === giveaway) {
            return [];
        }

        const link = "https://www.gog.com" + giveaway.getAttribute("ng-href");
        const title = giveaway.querySelector(
            '[ng-if="!giveaway.wasMarketingConsentGiven"]' +
                " .giveaway-banner__title",
        );

        return [
            {
                color: "#a343f4",
                guid: link,
                link,
                icon: import.meta.resolve("./img/gog.svg"),
                title: title.textContent.trim().slice(10),
            },
        ].slice(0, max);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, GogGiveawayScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
