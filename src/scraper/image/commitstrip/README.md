# community/regseb/image/commitstrip

Ce scraper recupère la liste des derniers dessins publiés sur le site
**[CommitStrip](https://www.commitstrip.com/fr/)**.

## Configuration

Il n'y a pas de configuration.

## Exemple

Cet exemple affiche les deux derniers dessins, en les actualisant à 20h00.

```JSON
{
    "module": "core/image",
    "files": {
        "config.json": {
            "max": 2,
            "cron": "0 20 * * *"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/image/commitstrip" }
    ]
}
```
