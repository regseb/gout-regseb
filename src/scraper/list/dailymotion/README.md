# Scraper _list/dailymotion_

> Mots-clés :
> [_gout_](https://github.com/search?q=_gout_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-scraper_](https://github.com/search?q=_gout-scraper_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-scraper-list-dailymotion_](https://github.com/search?q=_gout-scraper-list-dailymotion_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-module-list_](https://github.com/search?q=_gout-module-list_+language%3AMarkdown&type=Code&l=Markdown).

Ce scraper récupère la liste des dernières vidéos postées sur
[**Dailymotion**](https://www.dailymotion.com/fr) par un utilisateur.

Il peut être utilisé avec le module
[_list_](https://github.com/regseb/gout/tree/HEAD/src/module/list#readme).

## Options

Les options sont dans un objet
[YAML](https://yaml.org/ "YAML Ain't Markup Language") avec les propriétés
suivantes :

<!-- markdownlint-disable no-inline-html-->
<table>
  <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>user</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'identifiant du compte.
      </p>
      <p>
        Exemple : <code>franceinter</code>
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
        Exemple : <code>target: _top</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>filter</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le filtre qui sera appliqué sur les éléments retournés. Par défaut aucun
        filtre n'est appliqué. Pour plus de détails, voir le scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/filter#readme"><em>tools/filter</em></a>.
      </p>
      <p>
        Exemple : <code>"title != 'foo'"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>transforms</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Les transformations qui seront appliquées sur les éléments retournés.
        Par défaut aucune transformation n'est appliqué. Pour plus de détails,
        voir le scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/transforms#readme"><em>tools/transforms</em></a>.
      </p>
      <p>
        Exemple : <code>title: "title[0].toUpperCase() + title.slice(1)"</code>
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les dernières vidéos des
[Guignols de l'Info](https://www.dailymotion.com/lesguignols).

```html
<script type="application/yaml">
  module:
    url: https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js
    options:
      cron: "@daily"
      max: 5
    scrapers:
      - url: https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/dailymotion/dailymotion.js
        options:
          user: lesguignols
</script>
```
