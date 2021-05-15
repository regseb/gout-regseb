# community/regseb/image/loadingartist

Ce scraper recupère la liste des derniers dessins publiés sur le site
**[Loading Artist](https://loadingartist.com/)**.

## Configuration

Il n'y a pas de configuration.

## Exemple

Cet exemple affiche le dernier dessin publié le jeudi.

```JSON
{
    "module": "core/image",
    "files": {
        "config.json": {
            "max": 1,
            "cron": "0 19 * * thu"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/image/loadingartist" }
    ]
}
```
