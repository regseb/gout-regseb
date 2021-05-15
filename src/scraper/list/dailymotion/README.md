# community/regseb/feed/dailymotion

Ce scraper recupère la liste des dernières vidéos postées sur
**[Dailymotion](https://www.dailymotion.com/fr)** par un utilisateur.

Il peut être utilisé avec le module `core/feed`.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"user"` : un identifiant de compte ;
- `"icon"` (optionnel - par défaut aucune icône est affichée) : l'URL d'une
  icône qui préfixera le titre.

## Exemple

Cet exemple affiche les dernières vidéos des
**[Guignols de l'Info](https://www.dailymotion.com/lesguignols)**.

```JSON
{
    "module": "core/feed",
    "files": {
        "config.json": {
            "color": "#9e9e9e",
            "cron": "0 21 * * *",
            "max": 5
        }
    },
    "scrapers": [
        {
            "scraper": "community/regseb/feed/dailymotion",
            "config": {
                "user": "lesguignols"
            }
        }
    ]
}
```
