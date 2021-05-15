# community/regseb/image/urtikan

Ce scraper recupère la liste des derniers dessins publiés sur le site
**[Urtikan](http://www.urtikan.net/)**.

## Configuration

Il n'y a pas de configuration.

## Exemple

Cet exemple affiche les trois dernières caricatures.

```JSON
{
    "module": "core/image",
    "files": {
        "config.json": {
            "max": 3,
            "cron": "0 */4 * * *"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/image/urtikan" }
    ]
}
}
```
