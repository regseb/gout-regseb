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
    culture: /concerts|opéras/iv,
    divers: /journal tv/iv,
    divertissement: /jeux tv|spectacles/iv,
    documentaire: /documentaires/iv,
    film: /films|western/iv,
    jeunesse: /dessins animés|manga/iv,
    magazine: /[eé]missions|magazines|reportages/iv,
    serie: /feuilletons|séries/iv,
    sport: /athlétisme|cyclisme|football|golf|rugby|sports/iv,
    telefilm: /téléfilms/iv,
};

const CHANNELS = {
    canal: "canalplus",
    "canal-sport": "canalplus-sport",
    lcp: "lcp-public-senat",
    omtv: "om-tv",
};

const slugify = (text) => {
    return (
        text
            .toLowerCase()
            // Enlever les diacritiques (accents, trémas, cédilles) et garder
            // seulement les caractères ASCII affichables.
            .normalize("NFKD")
            .replaceAll(/[^\u{20}-\u{7E}]+/gv, "")

            // Remplacer les caractères qui ne sont pas alphanumériques par un
            // tiret.
            .replaceAll(/[^0-9a-z]+/gv, "-")

            // Enlever les tirets consécutifs.
            .replaceAll(/-{2,}/gv, "-")

            // Enlever les tirets en début et fin de chaîne.
            .replaceAll(/^-|-$/gv, "")
    );
};

const Tele7JoursScraper = class {
    #broadcast;

    #channels;

    constructor({ broadcast, channels }) {
        this.#broadcast = broadcast ?? "tnt";
        this.#channels = channels;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url =
            "https://www.programme-television.org/tv/bouquets/" +
            this.#broadcast;
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        return Array.from(doc.querySelectorAll(".tvgrid__item .channel"))
            .filter((item) => {
                if (undefined === this.#channels) {
                    return true;
                }
                const channel = slugify(
                    item.querySelector(".channel__label div:last-child")
                        .textContent,
                );
                return this.#channels.includes(channel);
            })
            .slice(0, max)
            .map((item) => {
                const name = item.querySelector(
                    ".channel__label div:last-child",
                ).textContent;
                const channel = slugify(name);

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
                const link =
                    item
                        .querySelector(".tvgrid-broadcast__wrapper--link")
                        ?.getAttribute("href") ?? url;

                const subdetails = item.querySelector(
                    ".tvgrid-broadcast__subdetails",
                ).textContent;

                const category = subdetails.slice(
                    subdetails.indexOf(" | ") + 2,
                );
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

// eslint-disable-next-line import/no-anonymous-default-export
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
