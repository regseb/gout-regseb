# Module _tv_

> Mots-clés : gout, gout-module, gout-module-tv.

Ce module donne le **programme télévisé**.

## Options

Les options sont dans un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"color"` (optionnel - valeur par défaut : `"#9e9e9e"`) : la couleur de fond
  du cadre (au format hexadécimale, régulier RGB ou avec des mots-clefs
  prédéfinis).

## Scraper

> [!NOTE]
> Ce chapitre est utile principalement pour le développement de scrapers
> compatibles avec ce module.

TODO.

## Exemple

Ce widget affiche le programme télévisé de toutes les chaines de la TNT sauf
Canal+ et les chaines d'information (BFMTV, CNEWS, LCI et Franceinfo).

```JSON
{
  "module": {
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/tv/tv.js"
  },
  "scrapers": [{
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/tv/tele2semaines/tele2semaines.js",
    "options": {
      "channels": [
        "tf1", "france-2", "france-3", "france-5", "m6", "arte", "c8", "w9",
        "tmc", "tfx", "nrj-12", "la-chaine-parlementaire", "france-4", "cstar",
        "gulli", "tf1-series-films", "lequipe", "6ter", "rmc-story",
        "rmc-decouverte", "cherie-25"
      ]
    }
  }]
}
```
