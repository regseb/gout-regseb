# Scraper _single/articleauhasard_

Ce scraper donne un lien vers un article au hasard de
[**Wikipédia**](https://fr.wikipedia.org/).

## Options

Les options sont dans un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec la
propriété suivante :

- `"lang"` (optionnel - par défaut, c'est la langue française) : le
  [code de la langue](https://meta.wikimedia.org/wiki/List_of_Wikipedias/fr) des
  pages.

## Exemple

Ce widget affiche un lien vers un article en français.

```JSON
{
  "module": {
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/single/single.js",
    "options": {
      "color": "#607d8b",
      "cron": "*/5 * * * *"
    }
  },
  "scrapers": [{
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/single/articleauhasard/articleauhasard.js"
  }]
}
```
