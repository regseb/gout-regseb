/**
 * @module
 */

export default class {

    #host;

    #filters;

    #complements;

    constructor({ url, jobs = {}, complements }) {
        this.#host = url;
        this.#filters = jobs;
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url = this.#host +
                    "/api/json?tree=jobs[name,url,displayName," +
                                        "lastBuild[number,result]," +
                                        "modules[name,url,displayName," +
                                                "lastBuild[number," +
                                                          "result]]]";
        const response = await fetch(url);
        const json = await response.json();
        const items = [];
        for (const job of json.jobs) {
            // S'il y a des filtres et que le nom du job ne correspond à aucun
            // filtre : ignorer ce job.
            if (0 !== Object.keys(this.#filters).length &&
                    !(job.name in this.#filters)) {
                continue;
            }

            if (null === this.#filters[job.name]) {
                if (null === job.lastBuild ||
                        "FAILURE" !== job.lastBuild.result &&
                        "ABORTED" !== job.lastBuild.result) {
                    continue;
                }
                items.push({
                    desc:  job.lastBuild.result,
                    guid:  job.lastBuild.number,
                    link:  job.url,
                    title: job.displayName,
                });
                if (max === items.length) {
                    break;
                }
            } else {
                for (const module of job.modules) {
                    if (0 !== this.#filters[job.name].length &&
                            !this.#filters[job.name].includes(module.name)) {
                        continue;
                    }
                    if (null === module.lastBuild ||
                            "FAILURE" !== module.lastBuild.result &&
                            "ABORTED" !== module.lastBuild.result) {
                        continue;
                    }
                    items.push({
                        desc:  module.lastBuild.result,
                        guid:  module.lastBuild.number,
                        link:  module.url,
                        title: `${module.displayName} (${job.displayName})`,
                    });
                    if (max === items.length) {
                        break;
                    }
                }
            }
        }
        return items.map((i) => ({ ...this.#complements, ...i }));
    }
}
