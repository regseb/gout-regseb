# Scraper _list/radioline_

Ce scraper récupère la liste des derniers épisodes d'un podcast sur
[**Radioline**](https://fr-fr.radioline.co/).

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"podcast"` : l'identifiant du podcast (le chemin dans l'URL) ;
- `"icon"` (optionnel - par défaut aucune icône est affichée) : l'URL d'une
  icône qui préfixera le titre.

## Exemple

Ce widget affiche les dernières chroniques de l'émission [Par
Jupiter !](https://fr-fr.radioline.co/podcast-france-inter-par-jupiter).

```JSON
{
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/podcast/podcast.js",
        "config": {
            "color": "#f44336",
            "cron": "@daily",
            "max": 5
        }
    },
    "scrapers": [
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/radioline/radioline.js",
        "config": {
            "podcast": "podcast-france-inter-par-jupiter"
        }
    ]
}
```
