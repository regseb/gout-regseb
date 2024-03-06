# Widgets du Monde

> Mots-clés : gout, gout-widget, gout-widget-lemonde.

Ce répertoire regroupe des widgets pour les flux RSS du site
[**Le Monde**](https://www.lemonde.fr/). Pour ajouter un widget dans votre
dashboard, insérez le code suivant (en remplaçant `{widget}` par le widget
voulu) :

```HTML
<script type="application/json"
        src="https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/{widget}.json"></script>
```

- À la une :
  [`https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/une.json`](https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/une.json)
- La une International :
  [`https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/international.json`](https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/international.json)

[D'autres flux
RSS](https://www.lemonde.fr/actualite-medias/article/2019/08/12/les-flux-rss-du-monde-fr_5498778_3236.html)
sont disponibles. Ils peuvent être utilisés avec la configuration suivante, en
changeant `{rss}` par l'URL du flux RSS.

```JSON
{
  "$extend": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/lemonde/une.json",
  "$scrapers[0]": {
    "options": {
      "url": "{rss}"
    }
  }
}
```
