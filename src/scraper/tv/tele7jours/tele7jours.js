/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import TransformsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/transforms/transforms.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const TYPES = {
    culture: /concert|one man show|opéra/iv,
    divers: /débat|journal tv|interview/iv,
    divertissement: /divertissement|jeu|spectacle|téléréalité/iv,
    documentaire: /documentaire|nature/iv,
    film: /comédie|drame|film|western/iv,
    jeunesse: /dessin animé|manga/iv,
    magazine:
        /[eé]missions|histoire|magazine|politique|reportages|sciences et technique|société/iv,
    serie: /feuilleton|série/iv,
    sport: /athlétisme|cyclisme|football|golf|rugby|sport/iv,
    telefilm: /téléfilm/iv,
};

const CHANNELS = {
    canal: "canalplus",
    "canal-sport": "canalplus-sport",
    lcp: "lcp-public-senat",
    omtv: "om-tv",
};

const Tele7JoursScraper = class {
    #broadcast;

    #channels;

    constructor({ broadcast = "tnt", channels }) {
        this.#broadcast = broadcast;
        this.#channels = channels;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url =
            "https://www.programme-television.org/tv/bouquets/" +
            this.#broadcast;
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        return Array.from(
            doc.querySelectorAll(".tvpanel_1 .tvgrid-broadcast__wrapper"),
        )
            .filter((item) => {
                if (undefined === this.#channels) {
                    return true;
                }
                const channel = item
                    .querySelector(".tvgrid-channel__link")
                    .dataset.href.slice(12);
                return this.#channels.includes(channel);
            })
            .slice(0, max)
            .map((item) => {
                const name = item.querySelector(".channel_name").textContent;
                const channel = item
                    .querySelector(".tvgrid-channel__link")
                    .dataset.href.slice(12);

                const title = item.querySelector(
                    ".tvgrid-broadcast__details-title span",
                )?.textContent;

                if (undefined === title) {
                    return {
                        channel: CHANNELS[channel] ?? channel,
                        name,
                        title: "Aucun programme disponible sur cette chaîne.",
                    };
                }

                const desc = item.querySelector(
                    ".tvgrid-broadcast__details-season",
                )?.textContent;
                const link = new URL(
                    item
                        .querySelector(".tvgrid-broadcast__wrapper--link")
                        ?.getAttribute("href") ?? url,
                    "https://www.programme-television.org/",
                ).href;

                const subdetails = item
                    .querySelector(".tvgrid-broadcast__subdetails")
                    .textContent.trim();

                const category = subdetails.match(
                    / mins \| (?<category>[^\|]+)(?: \||$)/v,
                ).groups.category;
                const type =
                    Object.entries(TYPES).find(([_, r]) =>
                        r.test(category),
                    )?.[0] ?? "divers";

                const mark =
                    item.querySelectorAll(
                        ".tvgrid-broadcast__details-icons > svg",
                    )?.length ?? 0;

                return {
                    channel: CHANNELS[channel] ?? channel,
                    name,
                    title,
                    desc,
                    link,
                    category,
                    type,
                    mark,
                };
            });
    }
};

export default chain(
    TransformsScraper,
    FilterScraper,
    ComplementsScraper,
    Tele7JoursScraper,
    {
        dispatch: ({ transforms, filter, complements, ...others }) => [
            { transforms },
            { filter },
            { complements },
            others,
        ],
    },
);
