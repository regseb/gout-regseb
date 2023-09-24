/**
 * @module
 */

const WEBCAMS_ID = {
    village: "PRESTATAIRE-WEBCAMS-GENERAL",
    "parc-loisirs": "PRESTATAIRE-WEBCAMS-VILLAGE",
    "seignus-bas": "PRESTATAIRE-WEBCAMS-SEIGNUS2",
    "seignus-haut": "PRESTATAIRE-WEBCAMS-SEIGNUS",
    "front-de-neige": "PRESTATAIRE-WEBCAMS-AIGUI2",
    observatoire: "PRESTATAIRE-WEBCAMS-AIGUILLE",
};

export default class ValDAllosScraper {
    #webcams;

    #complements;

    constructor({ webcams, complements }) {
        this.#webcams = webcams ?? Object.keys(WEBCAMS_ID);
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://www.valdallos.com/webcams.html");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return this.#webcams
            .map((webcam) => {
                const div = doc.querySelector(
                    `#${WEBCAMS_ID[webcam]} .cadre_photo_principale`,
                );
                if (null === div) {
                    return undefined;
                }

                return {
                    guid: webcam,
                    img:
                        "https://www.valdallos.com" +
                        div.querySelector("img").getAttribute("src"),
                    link: div.querySelector("a").href,
                    title: div.querySelector("img").title,
                };
            })
            .filter((i) => undefined !== i)
            .slice(0, max)
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
