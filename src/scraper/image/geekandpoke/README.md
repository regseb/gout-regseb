# community/regseb/image/geekandpoke

Ce scraper recupère la liste des derniers dessins publiés sur le site
**[GeekAndPoke](http://geek-and-poke.com/)**.

## Configuration

Il n'y a pas de configuration.

## Exemple

Cet exemple affiche les deux derniers dessins, en les actualisant une fois par
jour.

```JSON
{
    "module": "core/image",
    "files": {
        "config.json": {
            "max": 2,
            "cron": "@daily"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/image/geekandpoke" }
    ]
}
```
