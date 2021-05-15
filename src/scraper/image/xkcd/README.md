# community/regseb/image/xkcd

Ce scraper recupère la liste des derniers dessins publiés sur le site
**[xkcd](https://xkcd.com/)**.

## Configuration

Il n'y a pas de configuration.

## Exemple

Cet exemple affiche les deux dernières planches.

```JSON
{
    "module": "core/image",
    "files": {
        "config.json": {
            "max": 2,
            "cron": "0 7 * * *"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/image/xkcd" }
    ]
}
```
