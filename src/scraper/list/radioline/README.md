# Scraper _list/radioline_

> Mots-clés : gout, gout-scraper, gout-scraper-list-radioline, gout-module-list.

Ce scraper récupère la liste des derniers épisodes d'un podcast sur
[**Radioline**](https://www.radioline.co/).

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
    <td><code>podcast</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'identifiant du podcast (= le chemin dans l'URL).
      </p>
      <p>
        Exemple : <code>"blockbusters"</code> (pour le podcast
        <a href="https://www.radioline.co/fr/podcasts/blockbusters">https://www.radioline.co/fr/podcasts/blockbusters</a>).
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

Ce widget affiche les deux dernières émissions du [Meilleur des
mondes](https://www.radioline.co/fr/podcasts/le_meilleur_des_mondes).

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/podcast/podcast.js"
    options:
      color: "#a256b1"
      cron: "@daily"
      max: 2
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/radioline/radioline.js"
        options:
          podcast: "le_meilleur_des_mondes"
</script>
```
