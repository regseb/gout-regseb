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
        Exemples : <code>"#673ab7"</code>, <code>"chocolate"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>cron</code></td>
    <td><code>string</code><br /><code>string[]</code></td>
    <td>
      <p>
        La ou les
        <a href="https://www.npmjs.com/package/cronnor#expression-cron">expressions
        <em>cron</em></a> indiquant la fréquence de mise à jour. Sans cette
        propriété, les données sont mises à jour une fois par jour.
      </p>
      <p>
        <!-- Ne pas vérifier les espaces dans les éléments d'emphase car cette
             règle s'applique dans les éléments <code> et il y a des
             faux-positifs avec les expressions cron.
             https://github.com/DavidAnson/markdownlint/issues/427 -->
        <!-- markdownlint-disable-next-line no-space-in-emphasis -->
        Exemple : <code>"0 18 * * *"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>empty</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Les données affichées quand les scrapers n'ont retourné aucune donnée.
        Ce doit être un objet avec les mêmes propriétés qu'un élément retourné
        par les scrapers. Si cette propriété n'est pas renseignée, le module
        n'affiche rien.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>icon</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'URL de l'icône qui sera affichée en fond. Il est conseillé que l'image
        soit carrée et que le dessin occupe toute la zone de l'image. Si le
        dessin n'est pas carré, il faut le centrer verticalement et l'aligner à
        droite. Seule la couleur noire doit être utilisée et elle doit avoir une
        opacité de <code>0.2</code>. Par défaut, aucune icône n'est affichée.
      </p>
      <p>
        Exemple : <code>"https://example.com/foo/bar.svg"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>max</code></td>
    <td><code>number</code></td>
    <td>
      <p>
        Le nombre maximum d'éléments affichés dans le module. Sans maximum, tous
        les chaines retournés par les scrapers sont affichés.
      </p>
      <p>
        Exemple : <code>5</code>
      </p>
    </td>
  </tr>
</table>

## Scraper

> [!NOTE]
>
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
