/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const CHANNELS = {
    lequipe: "l-equipe",
    "lci-la-chaine-info": "lci",
    "la-chaine-parlementaire": "lcp-public-senat",
};

const TYPES = {
    Autre: "divers",
    Concert: "culture",
    "Dessin Animé": "jeunesse",
    Documentaire: "documentaire",
    "Emission Sportive": "sport",
    Film: "film",
    Magazine: "magazine",
    "Magazine Sportif": "magazine",
    Opéra: "culture",
    Série: "serie",
    Spectacle: "culture",
    Théâtre: "culture",
    Téléfilm: "telefilm",
};

const Tele2SemainesScraper = class {
    #broadcast;

    #channels;

    constructor({ broadcast, channels }) {
        this.#broadcast = broadcast ?? "programme-tnt";
        this.#channels = channels;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url = `https://www.programme.tv/${this.#broadcast}/`;
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        return Array.from(doc.querySelectorAll(".bouquet-gridItem"))
            .filter((item) => {
                if (undefined === this.#channels) {
                    return true;
                }
                const a = item.querySelector(".channelHeading-logo");
                const href = a.getAttribute("href");
                const channel = href.slice(8, href.lastIndexOf("-"));
                return this.#channels.includes(channel);
            })
            .slice(0, max)
            .map((item) => {
                const a = item.querySelector(".channelHeading-logo");
                const href = a.getAttribute("href");
                const channel = href.slice(8, href.lastIndexOf("-"));
                const category = item.querySelector(
                    ".broadcastCard-format",
                ).textContent;

                return {
                    channel: CHANNELS[channel] ?? channel,
                    name: a.title,
                    title: item.querySelector(".broadcastCard-link")
                        .textContent,
                    subtitle: item
                        .querySelector(".broadcastCard-subtitle")
                        ?.textContent?.trim(),
                    link: item.querySelector(".broadcastCard-link").href,
                    desc: item
                        .querySelector(".broadcastCard-synopsis")
                        .textContent.trim(),
                    category,
                    type: TYPES[category] ?? category,
                    mark: item.querySelectorAll(".rating .active").length,
                };
            });
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, Tele2SemainesScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
