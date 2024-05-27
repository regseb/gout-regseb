# Scraper _single/gog_

> Mots-clés : gout, gout-scraper, gout-scraper-single-gog, gout-module-list,
> gout-module-single.

Quand un jeu vidéo est offert sur [GOG.com](https://www.gog.com/), ce scraper
retourne le lien vers le jeu.

Il peut être utilisé avec les modules :

- [_single_](https://github.com/regseb/gout/tree/HEAD/src/module/single#readme)
  ;
- [_list_](https://github.com/regseb/gout/tree/HEAD/src/module/list#readme) pour
  afficher seulement un élément.

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
    <td><code>complements</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Des propriétés qui seront ajoutées dans les éléments retournés. Par
        défaut aucune propriété n'est ajoutée. Pour plus de détails, voir le
        scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/complements#readme"><em>tools/complements</em></a>.
      </p>
      <p>
        Exemple : <code>target: "_top"</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>filter</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le filtre qui sera appliqué sur les éléments retournées. Par défaut
        aucun filtre n'est appliqué. Pour plus de détails, voir le scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/filter#readme"><em>tools/filter</em></a>.
      </p>
      <p>
        Exemple : <code>"title != 'foo'"</code>.
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche éventuellement un lien vers le jeu offert.

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/single/single.js"
    options:
      color: "#a343f4"
      cron: "0 0 * * *"
    scrapers:
      url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/single/gog/giveaway.js"
</script>
```
