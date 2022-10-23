# Scraper _list/jenkins_

> Mots-clés : gout, gout-scraper, gout-scraper-list-jenkins, gout-module-list.

Ce scraper récupère les jobs et les modules **Jenkins** en erreur.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"url"`: l'URL du serveur Jenkins ;
- `"jobs"` (optionnel - par défaut tous les jobs sont affichés) : les filtres
  des jobs à afficher ;
- `"icon"` (optionnel - par défaut aucune icône est affichée) : l'URL d'une
  icône qui préfixera le titre.

## Exemple

Ce widget affiche les modules Maven Core et Maven Artifact du job maven-3.x,
ainsi que le job Tomcat-7.x de la fondation
[Apache](https://builds.apache.org/).

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js",
        "config": {
            "color": "#9e9e9e"
            "cron": "0 */4 * * *",
            "empty": {
                "link": "https://builds.apache.org",
                "title": "(Aucun job en erreur)"
            },
        }
    },
    "scrapers": [
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/jenkins/jenkins.js",
        "config": {
            "url": "https://builds.apache.org",
            "jobs": {
                "maven-3.x": ["org.apache.maven:maven-core",
                              "org.apache.maven:maven-artifact"],
                "Tomcat-7.x": null
            }
        }
    ]
}
```
