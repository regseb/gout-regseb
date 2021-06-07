/**
 * @module
 */

const CHANNELS = {
    lequipe:                   "l-equipe",
    "lci-la-chaine-info":      "lci",
    "la-chaine-parlementaire": "lcp-public-senat",
};

const TYPES = {
    autre:              "divers",
    "magazine-sportif": "sport",
};

export default class {

    constructor({ broadcasts, complements }) {
        this._broadcasts = broadcasts;
        this._complements = complements;
    }

    async extract() {
        const promises = Object.entries(this._broadcasts)
                               .map(async ([broadcast, channels]) => {
            const url = `https://www.programme.tv/${broadcast}/`;
            const response = await fetch(url);
            const text = await response.text();
            const doc = new DOMParser().parseFromString(text, "text/html");

            return channels.map((channel) => {
                const item = doc.querySelector(`.broadcastItem` +
                                                   ` a[href$="-${channel}/"]`);
                const name = item.title;

                const show = item.closest(".broadcastItem");
                const title = show.querySelector(".broadcastItem-link")
                                  .textContent;
                const subtitle = show.querySelector(".broadcastItem-subtitle")
                                     .textContent.trim();
                const link = show.querySelector(".broadcastItem-link").href;
                const desc = show.querySelector(".broadcastItem-text")
                                 .textContent.trim();

                const category = show.querySelector(".categoryTag").textContent;
                const type = show.querySelector(".categoryTag").className
                                                               .slice(12);

                const mark = show.querySelectorAll(".rating .active").length;

                return {
                    channel: CHANNELS[channel] ?? channel,
                    name,
                    title,
                    subtitle,
                    link,
                    desc,
                    category,
                    type:    TYPES[type] ?? type,
                    mark,
                };
            });
        });
        const broadcasts = await Promise.all(promises);
        return broadcasts.reduce((previous, current) => {
            return previous.concat(current);
        });
    }
}
