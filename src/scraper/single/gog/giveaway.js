/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import TransformsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/transforms/transforms.js";
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

        const link = giveaway.querySelector(
            'a[selenium-id="giveawayOverlayLink"]',
        ).href;

        return [
            {
                color: "#a343f4",
                guid: link,
                link,
                icon: "https://cdn.simpleicons.org/gog.com/fff",
                img: giveaway.querySelector(
                    '*[selenium-id="giveawayImage"] source',
                ).srcset,
                title: giveaway
                    .querySelector('*[selenium-id="giveawayImage"] img')
                    // Enlever le suffixe " giveaway".
                    .alt.slice(0, -9),
            },
        ].slice(0, max);
    }
};

export default chain(
    TransformsScraper,
    FilterScraper,
    ComplementsScraper,
    GogGiveawayScraper,
    {
        dispatch: ({ transforms, filter, complements, ...others }) => [
            { transforms },
            { filter },
            { complements },
            others,
        ],
    },
);
