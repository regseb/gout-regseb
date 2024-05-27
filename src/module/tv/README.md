# Module _tv_

> Mots-clés : gout, gout-module, gout-module-tv.

Ce module donne le **programme télévisé**.

## Options

Les options sont dans un objet
[YAML](https://yaml.org/ "YAML Ain't Markup Language") avec les propriétés
suivantes :

<table>
  <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>color</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        La
        <a href="https://developer.mozilla.org/CSS/color_value">couleur</a> de
        fond du cadre. Par défaut la couleur grise (<code>"#9e9e9e"</code>) est
        utilisée.
      </p>
      <p>
        Exemples : <code>"#673ab7"</code>, <code>"chocolate"</code>.
      </p>
    </td>
  </tr>
  <tr>
</table>

## Scraper

> [!NOTE]
> Ce chapitre est utile principalement pour le développement de scrapers
> compatibles avec ce module.

TODO.

## Exemple

Ce widget affiche le programme télévisé de toutes les chaines de la TNT sauf
Canal+ et les chaines d'information (BFMTV, CNEWS, LCI et Franceinfo).

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/tv/tv.js"
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/tv/tele2semaines/tele2semaines.js"
        options:
          channels:
            - "tf1"
            - "france-2"
            - "france-3"
            - "france-5"
            - "m6"
            - "arte"
            - "c8"
            - "w9"
            - "tmc"
            - "tfx"
            - "nrj-12"
            - "la-chaine-parlementaire"
            - "france-4"
            - "cstar"
            - "gulli"
            - "tf1-series-films"
            - "lequipe"
            - "6ter"
            - "rmc-story"
            - "rmc-decouverte"
            - "cherie-25"
</script>
```
