/**
 * @module
 */

const GAME_URL = "https://isthereanydeal.com/game";

export default class {

    #game;

    #stores;

    #complements;

    constructor({ game, stores, complements }) {
        this.#game = game;
        this.#stores = stores ?? [];
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(`${GAME_URL}/${this.#game}/info/`);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        const title = doc.querySelector("#gameTitle").textContent;
        return Array.from(doc.querySelectorAll(".priceTable__shop"))
                    .map((td) => td.parentNode)
                    .map((tr) => ({
            store: tr.querySelector("a").textContent.trim(),
            link:  tr.querySelector("a").href,
            cut:   tr.querySelector(".priceTable__cut").textContent,
            price: tr.querySelector(".priceTable__new").textContent,
        })).filter((i) => "0%" !== i.cut &&
                          (0 === this.#stores.length ||
                           this.#stores.includes(i.store)))
           .filter((item, _index, items) => {
            const duplicates = items.filter((i) => item.price === i.price)
                                    .map((i) => this.#stores.indexOf(i.store));
            return 1 >= duplicates.length ||
                   Math.min(...duplicates) === this.#stores.indexOf(item.store);
        }).slice(0, max).map((item) => ({
            guid:  item.link,
            link:  item.link,
            title: `${title} : ${item.price} (${item.cut})`,
        })).map((i) => ({ ...this.#complements, ...i }));
    }
}
