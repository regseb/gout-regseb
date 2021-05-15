# community/regseb/single/articleauhasard

Ce scraper donne un lien vers un article au hasard de
**[Wikipédia](https://fr.wikipedia.org/)**.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec la
propriété suivante :

- `"lang"` (optionnel - par défaut, c'est la langue française) : le
  [code de la langue](https://meta.wikimedia.org/wiki/List_of_Wikipedias/fr) des
  pages.

## Exemple

Cet exemple affiche un lien vers un article en français.

```JSON
{
    "module": "core/single",
    "files": {
        "config.json": {
            "color": "#607d8b",
            "cron": "*/5 * * * *"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/single/articleauhasard" }
    ]
}
```
