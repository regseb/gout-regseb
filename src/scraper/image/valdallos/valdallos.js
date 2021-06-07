/**
 * @module
 */

const WEBCAMS_ID = {
    village:          "PRESTATAIRE-WEBCAMS-GENERAL",
    "parc-loisirs":   "PRESTATAIRE-WEBCAMS-VILLAGE",
    "seignus-bas":    "PRESTATAIRE-WEBCAMS-SEIGNUS2",
    "seignus-haut":   "PRESTATAIRE-WEBCAMS-SEIGNUS",
    "front-de-neige": "PRESTATAIRE-WEBCAMS-AIGUI2",
    observatoire:     "PRESTATAIRE-WEBCAMS-AIGUILLE",
};

export default class {

    constructor({ webcams, complements }) {
        this._webcams = webcams;
        this._complements = complements;
    }

    async extract(max) {
        const response = await fetch("https://www.valdallos.com/webcams.html");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return this._webcams.map((webcam) => {
            const div = doc.querySelector(`#${WEBCAMS_ID[webcam]}` +
                                          " .cadre_photo_principale");
            if (null === div) {
                return null;
            }

            return {
                guid:  webcam,
                img:   "https://www.valdallos.com" +
                       div.querySelector("img").getAttribute("src"),
                link:  div.querySelector("a").href,
                title: div.querySelector("img").title,
            };
        }).filter((i) => null !== i)
          .slice(0, max)
          .map((i) => ({ ...this._complements, ...i }));
    }
}
