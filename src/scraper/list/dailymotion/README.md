# Scraper _list/dailymotion_

> Mots-clés : gout, gout-scraper, gout-scraper-list-dailymotion,
> gout-module-list.

Ce scraper récupère la liste des dernières vidéos postées sur
[**Dailymotion**](https://www.dailymotion.com/fr) par un utilisateur.

Il peut être utilisé avec le module
[_list_](https://github.com/regseb/gout/tree/HEAD/src/module/list#readme).

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
    <td><code>user</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'identifiant du compte.
      </p>
      <p>
        Exemple : <code>"franceinter"</code>
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
        Exemple : <code>target: "_top"</code>
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
</table>

## Exemple

Ce widget affiche les dernières vidéos des
[Guignols de l'Info](https://www.dailymotion.com/lesguignols).

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js"
    options:
      cron: "@daily"
      max: 5
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/dailymotion/dailymotion.js"
        options:
          user: "lesguignols"
</script>
```
