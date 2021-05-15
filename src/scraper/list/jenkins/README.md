# community/regseb/list/jenkins

Ce scraper récupère les *jobs* et les *modules* **jenkins** en erreur.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"url"`: l'URL du serveur Jenkins ;
- `"jobs"` (optionnel - par défaut tous les *jobs* sont affichés) : les filtres
  des *jobs* à afficher ;
- `"icon"` (optionnel - par défaut aucune icône est affichée) : l'URL d'une
  icône qui préfixera le titre.

## Exemple

Cet exemple affiche les *modules* *Maven Core* et *Maven Artifact* du *job*
*maven-3.x*, ainsi que le *job* *Tomcat-7.x* de la fondation
**[Apache](https://builds.apache.org/)**.

```JSON
{
    "module": "core/list",
    "files": {
        "config.json": {
            "empty": {
                "link": "https://builds.apache.org",
                "title": "(Aucun job en erreur)",
                "desc": "",
                "icon": ""
            },
            "color": "#9e9e9e",
            "cron": "0 */4 * * *"
        }
    },
    "scrapers": [
        {
            "scraper": "community/regseb/list/jenkins",
            "config": {
                "url": "https://builds.apache.org",
                "jobs": {
                    "maven-3.x": ["org.apache.maven:maven-core",
                                  "org.apache.maven:maven-artifact"],
                    "Tomcat-7.x": null
                }
            }
        }
    ]
}
```
