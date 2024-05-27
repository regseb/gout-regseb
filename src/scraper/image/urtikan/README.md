# Scraper _image/urtikan_

> Mots-clés : gout, gout-scraper, gout-scraper-image-urtikan,
> gout-module-image.

Ce scraper recupère la liste des derniers dessins publiés sur le site
[**Urtikan**](https://www.urtikan.net/).

Il peut être utilisé avec le module
[_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme).

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

Ce widget affiche les trois dernières caricatures.

```html
<script type="application/yaml">
  module: {
    url: "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/image/image.js"
    options:
      cron: "@daily"
      max: 3
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/urtikan/urtikan.js"
</script>
```
