# Scraper _single/articleauhasard_

Ce scraper donne un lien vers un article au hasard de
[**Wikipédia**](https://fr.wikipedia.org/).

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
    <td><code>lang</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le <a href="https://meta.wikimedia.org/wiki/List_of_Wikipedias/fr">code
        de la langue</a> des pages. Par défaut, le française est utilisé.
      </p>
      <p>
        Exemple : <code>"en"</code>.
      </p>
    </td>
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
        Exemple : <code>icon: "https://example.com/foo/bar.svg"</code>.
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

Ce widget affiche un lien vers un article en français.

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/single/single.js"
    options:
      color: "#607d8b"
      cron: "*/5 * * * *"
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/single/articleauhasard/articleauhasard.js"
</script>
```
