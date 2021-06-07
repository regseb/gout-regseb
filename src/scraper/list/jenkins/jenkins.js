/**
 * @module
 */

export default class {

    constructor({ url, jobs = {}, complements }) {
        this._host = url;
        this._filters = jobs;
        this._complements = complements;
    }

    async extract(max) {
        const url = this._host +
                    "/api/json?tree=jobs[name,url,displayName," +
                                        "lastBuild[number,result]," +
                                        "modules[name,url,displayName," +
                                                "lastBuild[number," +
                                                          "result]]]";
        const response = await fetch(url);
        const json = await response.json();
        const items = [];
        for (const job of json.jobs) {
            // S'il y a des filtres et que le nom du job ne correspond à aucune
            // filtre : ignorer ce job.
            if (0 !== Object.keys(this._filters).length &&
                    !(job.name in this._filters)) {
                continue;
            }

            if (null === this._filters[job.name]) {
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
                    if (0 !== this._filters[job.name].length &&
                            !this._filters[job.name].includes(module.name)) {
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
        return items.map((i) => ({ ...this._complements, ...i }));
    }
}
