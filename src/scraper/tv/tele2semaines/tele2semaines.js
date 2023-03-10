/**
 * @module
 */

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

export default class Tele2Semaines {
    #broadcast;

    #channels;

    #complements;

    constructor({ broadcast, channels, complements }) {
        this.#broadcast = broadcast ?? "programme-tnt";
        this.#channels = channels;
        this.#complements = complements;
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
                    ...this.#complements,
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
}
