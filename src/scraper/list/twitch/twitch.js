/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const TwitchScraper = class {
    #channel;

    constructor({ channel }) {
        this.#channel = channel;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(
            `https://m.twitch.tv/${this.#channel}/videos?filter=all`,
        );
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(
            doc.querySelectorAll('script[type="application/ld+json"]'),
        )
            .flatMap((s) =>
                // prettier-ignore
                JSON.parse(s.text)["@graph"]
                    .filter((p) => "ItemList" === p["@type"])
                    .flatMap((p) =>
                        p.itemListElement
                            .filter((i) =>
                                i.url.startsWith(
                                    "https://www.twitch.tv/videos/",
                                ),
                            )
                            .map((i) => ({
                                date: new Date(i.uploadDate).getTime(),
                                guid: i.url,
                                img: i.thumbnailUrl.at(-1),
                                link: i.url,
                                title: i.name,
                            })),
                    ),
            )
            .slice(0, max);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, TwitchScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
