# community/regseb/image/maliki

Ce scraper recupère la liste des derniers dessins publiés sur le site
**[Maliki](https://maliki.com/strips/)**.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec la
propriété suivante :

- `"icon"` (optionnel - par défaut aucune icône est affichée) : l'URL d'une
  icône qui préfixera le titre.

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
        { "scraper": "community/regseb/image/maliki" }
    ]
}
```
