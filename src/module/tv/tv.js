/**
 * @module
 */

import { Cron } from "https://cdn.jsdelivr.net/npm/cronnor@1";

const BASE_URL = import.meta.url.slice(0, import.meta.url.lastIndexOf("/") + 1);

export const Module = class extends HTMLElement {

    constructor(config, scrapers) {
        super();
        this._config   = config;
        this._scrapers = scrapers;
    }

    display(item) {
        const ul = this.shadowRoot.querySelector("ul");
        const li = this.shadowRoot.querySelector("template")
                                  .content.querySelector("li")
                                  .cloneNode(true);

        const imgChannel = li.querySelector(":scope > img.channel");
        imgChannel.src = BASE_URL + "img/" + item.channel + ".svg";
        imgChannel.alt = item.channel;
        imgChannel.title = item.name;

        const imgType = li.querySelector(":scope > img.type");
        imgType.src = BASE_URL + "img/" + item.type + ".svg";
        imgType.alt = item.type;
        imgType.title = item.category;
        imgType.classList.add(item.type);

        const span = li.querySelector(":scope > span");
        for (let i = 0; i < item.mark; ++i) {
            const img = document.createElement("img");
            img.src = BASE_URL + "img/star.svg";
            img.alt = "*";
            span.append(img);
        }

        const a = li.querySelector(":scope > a");
        a.textContent = item.title +
                        ("" === item.subtitle ? ""
                                              : " - " + item.subtitle);
        a.href = item.link;
        a.title = item.desc;
        a.target = item.target ?? "_blank";

        ul.append(li);
    }

    async update() {
        // Si la page est cachée : ne pas actualiser les données et indiquer
        // qu'il faudra mettre à jour les données quand l'utilisateur reviendra
        // sur la page.
        if (document.hidden) {
            this._cron.stop();
            return;
        }

        const ul = this.shadowRoot.querySelector("ul");
        while (null !== ul.firstChild) {
            ul.firstChild.remove();
        }

        const results = this._scrapers.map((s) => s.extract(this._max));
        for await (const items of results) {
            items.forEach(this.display.bind(this));
        }
    }

    wake() {
        if (!this._cron.active) {
            this._cron.start();
            this.update();
        }
    }

    async connectedCallback() {
        this.attachShadow({ mode: "open" });

        const response = await fetch(BASE_URL + "tv.tpl");
        const text = await response.text();
        const template = new DOMParser().parseFromString(text, "text/html")
                                        .querySelector("template");
        this.shadowRoot.append(template.content.cloneNode(true));

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = BASE_URL + "tv.css";
        this.shadowRoot.append(link);

        this._cron = new Cron(this._config.cron ?? "0 1 * * *",
                              this.update.bind(this));

        this.style.backgroundColor = this._config.color || "#9e9e9e";

        document.addEventListener("visibilitychange", this.wake.bind(this));
        this.update();
    }
};
