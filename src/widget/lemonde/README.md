# Widgets du Monde

> Mots-clés : gout, gout-widget.

Ce répertoire regroupe des widgets pour les flux RSS du site
[**Le Monde**](https://www.lemonde.fr/).

- À la une :
  <https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/une.json>
- La une International :
  <https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/international.json>

[D'autres flux
RSS](https://www.lemonde.fr/actualite-medias/article/2019/08/12/les-flux-rss-du-monde-fr_5498778_3236.html)
sont disponibles. Ils peuvent être utilisés avec la configuration suivante, en
changeant `{rss}` par l'URL du flux RSS.

```JSON
{
    "$extend": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/une.json",
    "$scrapers[0]": {
        "config": {
            "url": "{rss}"
        }
    }
}
```
