/**
 * @module
 */

const DATE_REGEXP = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})-[^-]+$/u;

export default class {

    constructor({ podcast, complements }) {
        this._podcast = podcast;
        this._complements = complements;
    }

    async extract(max) {
        const url = `https://fr-fr.radioline.co/${this._podcast}`;
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Promise.all(Array.from(doc.querySelectorAll("#chapters li"))
                                .slice(0, max)
                                .map(async (li) => {
            const link = li.querySelector("h2 a").getAttribute("href");
            const img = li.querySelector("img").src;
            const title = li.querySelector("h2 a").textContent;

            const matches = DATE_REGEXP.exec(link);
            const date = new Date(Number.parseInt(matches[1], 10),
                                  Number.parseInt(matches[2], 10) - 1,
                                  Number.parseInt(matches[3], 10),
                                  Number.parseInt(matches[4], 10),
                                  Number.parseInt(matches[5], 10),
                                  Number.parseInt(matches[5], 10)).getTime();

            const suburl = "https://fr-fr.radioline.co/Pillow/" +
                           link.slice(1).replaceAll("-", "_") + "/play";
            const subresponse = await fetch(suburl);
            const subjson = await subresponse.json();
            return {
                audio: subjson.body.content.streams[0].url,
                date,
                guid:  link,
                img,
                link:  url + link,
                title,
            };
        }).map(async (i) => ({ ...this._complements, ...await i })));
    }
}
