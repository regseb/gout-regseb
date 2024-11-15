/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import Cron from "https://esm.sh/cronnor@2";

const hashCode = function (item) {
    return Math.abs(
        Array.from(item.guid ?? JSON.stringify(item)).reduce(
            (code, character) => {
                return (code << 5) - code + character.codePointAt(0);
            },
            0,
        ),
    ).toString(36);
};

export default class CinemaModule extends HTMLElement {
    #options;

    #scrapers;

    #cron;

    #max;

    #empty;

    constructor(options, scrapers) {
        super();
        this.#options = options;
        this.#scrapers = scrapers;
    }

    #clean(items) {
        const guids = new Set(items.map(hashCode));
        Array.from(this.shadowRoot.querySelectorAll("li"))
            .filter((l) => !guids.has(l.dataset.guid))
            .forEach((l) => l.remove());
    }

    #display(item, empty = false) {
        const ul = this.shadowRoot.querySelector("ul");
        const guid = hashCode(item);
        const li =
            ul.querySelector(`li[data-guid="${guid}"]`) ??
            this.shadowRoot
                .querySelector("template")
                .content.querySelector("li")
                .cloneNode(true);

        li.dataset.guid = guid;
        li.dataset.date = item.date?.toString() ?? "0";
        if (empty) {
            li.classList.add("empty");
        } else {
            li.classList.remove("empty");
        }

        const img = li.querySelector("img");
        img.src = item.icon ?? "";

        const a = li.querySelector("a");
        a.textContent = item.title ?? "";
        if (undefined === item.link) {
            a.removeAttribute("href");
        } else {
            a.href = item.link;
        }
        a.target = item.target ?? "_blank";
        a.title = item.desc ?? "";

        const span = li.querySelector("span");
        span.replaceChildren();
        for (const showing of item.showings ?? []) {
            const a2 = document.createElement("a");
            a2.textContent = showing.title ?? "";
            if (undefined !== showing.link) {
                a2.href = showing.link;
            }
            a2.target = showing.target ?? "_blank";
            a2.rel = "noopener noreferrer";
            a2.title = showing.desc ?? "";
            span.append(a2);
        }
        if (span.hasChildNodes()) {
            span.prepend(":");
        }

        // Si l'élément n'est pas dans la liste.
        if (!li.isConnected) {
            let pos = 0;
            // Trouver la future position chronologique de l'élément.
            for (const other of ul.children) {
                if (Number(li.dataset.date) <= Number(other.dataset.date)) {
                    ++pos;
                }
            }

            if (0 === pos) {
                ul.prepend(li);
            } else {
                ul.children[pos - 1].after(li);
            }
        }
    }

    async #update(force = false) {
        // Si la page est cachée : ne pas actualiser les données et indiquer
        // qu'il faudra mettre à jour les données quand l'utilisateur reviendra
        // sur la page.
        if (document.hidden && !force) {
            this.#cron.stop();
            return;
        }

        const results = await Promise.all(
            this.#scrapers.map((s) => s.extract(this.#max)),
        );
        const items = results
            .flat()
            .sort((i1, i2) => (i2.date ?? 0) - (i1.date ?? 0))
            .slice(0, this.#max);

        if (0 === items.length) {
            this.#clean([this.#empty]);
            this.#display(this.#empty, true);
        } else {
            this.#clean(items);
            for (const item of items) {
                this.#display(item);
            }
        }
    }

    async #wake() {
        if (!this.#cron.active) {
            this.#cron.start();
            await this.#update();
        }
    }

    async connectedCallback() {
        const response = await fetch(import.meta.resolve("./cinema.tpl"));
        const text = await response.text();
        const template = new DOMParser()
            .parseFromString(text, "text/html")
            .querySelector("template");

        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(template.content.cloneNode(true));

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = import.meta.resolve("./cinema.css");
        this.shadowRoot.append(link);

        this.#max = this.#options.max ?? Number.MAX_SAFE_INTEGER;
        this.#empty = this.#options.empty ?? { title: "(aucune séance)" };

        const ul = this.shadowRoot.querySelector("ul");
        ul.style.backgroundColor = this.#options.color ?? "#9e9e9e";
        if (undefined !== this.#options.icon) {
            ul.style.backgroundImage = `url("${this.#options.icon}")`;
        }

        // Par défaut, mettre à jour les données tous les jours à 1h.
        this.#cron = new Cron(
            this.#options.cron ?? "0 1 * * *",
            this.#update.bind(this),
        );
        document.addEventListener("visibilitychange", this.#wake.bind(this));
        await this.#update(true);
    }
}
