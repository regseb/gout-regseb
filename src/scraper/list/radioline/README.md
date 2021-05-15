# community/regseb/feed/radioline

Ce scraper récupère la liste des derniers épisodes d'un podcast sur
**[Radioline](https://fr-fr.radioline.co/)**.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"podcast"` : l'identifiant du podcast (le chemin dans l'URL) ;
- `"icon"` (optionnel - par défaut aucune icône est affichée) : l'URL d'une
  icône qui préfixera le titre.

## Exemple

Cet exemple affiche les dernières chroniques de l'émission
*[Par Jupiter !](https://fr-fr.radioline.co/podcast-france-inter-par-jupiter)*.

```JSON
{
    "module": "core/podcast",
    "files": {
        "config.json": {
            "color": "#f44336",
            "cron": "@daily",
            "max": 5
        }
    },
    "scrapers": [
        {
            "scraper": "community/regseb/feed/radioline",
            "config": {
                "podcast": "podcast-france-inter-par-jupiter"
            }
        }
    ]
}
```
