/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const CHANNELS = {
    canal: "canalplus",
    "canal-sport": "canalplus-sport",
    nrj12: "nrj-12",
    omtv: "om-tv",
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
            "https://www.programme-television.org/?bouquet=" + this.#broadcast;
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        return Array.from(doc.querySelectorAll("#prime-broadcasts .bloc_cnt"))
            .filter((item) => {
                if (undefined === this.#channels) {
                    return true;
                }
                const a = item.querySelector(".logo a");
                const channel = a.getAttribute("href").slice(12);
                return this.#channels.includes(channel);
            })
            .slice(0, max)
            .map((item) => ({
                chaine: item.querySelector(".logo a"),
                note: item.querySelector(".note2"),
                titre: item.querySelector(".texte_titre a"),
                description: item.querySelector(".texte_description"),
                categorie: item.querySelector(".texte_cat a"),
            }))
            .map((item) => {
                const channel = item.chaine.getAttribute("href").slice(12);
                const name = item.chaine.textContent.replace("Programme ", "");

                const title = item.titre.textContent;
                const subtitle = item.description?.textContent;
                const link =
                    "https://www.programme-television.org" +
                    item.titre.getAttribute("href");

                const category = item.categorie.textContent;
                let type = /[^\/]+/v.exec(
                    item.categorie.getAttribute("href"),
                )[0];
                switch (type) {
                    case "films-telefilms":
                        type = category.includes("Téléfilm")
                            ? "telefilm"
                            : "film";
                        break;
                    case "series-tv":
                        type = "serie";
                        break;
                    case "documentaires":
                        type = "documentaire";
                        break;
                    case "musique":
                        type = "culture";
                        break;
                    default:
                    // Garder le type de Télé 7 Jours.
                }

                const mark = item.note?.textContent?.length ?? 0;

                return {
                    channel: CHANNELS[channel] ?? channel,
                    name,
                    title,
                    subtitle,
                    link,
                    category,
                    type,
                    mark,
                };
            });
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, Tele7JoursScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
