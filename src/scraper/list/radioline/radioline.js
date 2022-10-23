/**
 * @module
 */

const DATE_REGEXP = new RegExp(
    "(?<year>\\d{4})(?<month>\\d{2})(?<day>\\d{2})" +
    "(?<hours>\\d{2})(?<minutes>\\d{2})(?<seconds>\\d{2})-[^-]+$",
    "u",
);

export default class {

    #podcast;

    #complements;

    constructor({ podcast, complements }) {
        this.#podcast = podcast;
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url = `https://fr-fr.radioline.co/${this.#podcast}`;
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Promise.all(Array.from(doc.querySelectorAll("#chapters li"))
                                .slice(0, max)
                                .map(async (li) => {
            const link = li.querySelector("h2 a").getAttribute("href");
            const img = li.querySelector("img").src;
            const title = li.querySelector("h2 a").textContent;

            const result = DATE_REGEXP.exec(link);
            const date = new Date(
                Number.parseInt(result.groups.year, 10),
                Number.parseInt(result.groups.month, 10) - 1,
                Number.parseInt(result.groups.day, 10),
                Number.parseInt(result.groups.hours, 10),
                Number.parseInt(result.groups.minutes, 10),
                Number.parseInt(result.groups.seconds, 10),
            ).getTime();

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
        }).map(async (i) => ({ ...this.#complements, ...await i })));
    }
}
