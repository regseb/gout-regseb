/**
 * @module
 */

const CHANNELS = {
    canal:         "canalplus",
    "canal-sport": "canalplus-sport",
    nrj12:         "nrj-12",
    omtv:          "om-tv",
};

export default class {

    constructor({ broadcast, channels }) {
        this._broadcast = broadcast ?? "tnt";
        this._channels  = channels;
    }

    async extract() {
        const url = "http://www.programme-television.org/?bouquet=" +
                    this._broadcast;
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        return this._channels.map((channel) => {
            const div = doc.querySelector("#prime-broadcasts" +
                                          ` a[href="/chaines-tv/${channel}"]`)
                           .closest("div.bloc_cnt");
            return {
                channel,
                chaine:      div.querySelector(".logo a"),
                note:        div.querySelector(".note2"),
                titre:       div.querySelector(".texte_titre a"),
                description: div.querySelector(".texte_description"),
                categorie:   div.querySelector(".texte_cat a"),
            };
        }).map((data) => {
            const name = data.chaine.textContent.replace("Programme ", "");

            const title = data.titre.textContent;
            const subtitle = data.description?.textContent;
            const link = "http://www.programme-television.org" +
                         data.titre.getAttribute("href");

            const category = data.categorie.textContent;
            let type = (/[^/]+/u).exec(data.categorie.getAttribute("href"))[0];
            switch (type) {
                case "films-telefilms":
                    type = category.includes("Téléfilm") ? "telefilm"
                                                         : "film";
                    break;
                case "series-tv":     type = "serie";        break;
                case "documentaires": type = "documentaire"; break;
                case "musique":       type = "culture";      break;
                default:
                    // Garder le type de Télé 7 Jours.
            }

            const mark = data.note?.textContent?.length ?? 0;

            return {
                channel: CHANNELS[data.channel] ?? data.channel,
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
}
