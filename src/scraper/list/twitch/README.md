# Scraper _list/twitch_

> Mots-clés : gout, gout-scraper, gout-scraper-list-twitch, gout-module-list.

Ce scraper recupère la liste des dernières diffusions récentes sur
[**Twitch**](https://www.twitch.tv/) d'une chaine.

Il peut être utilisé avec le module
[_list_](https://github.com/regseb/gout/tree/HEAD/src/module/list#readme).

## Options

Les options sont dans un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

<table>
  <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>"complements"</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Des propriétés qui seront ajoutées dans les éléments retournés. Par
        défaut aucune propriété n'est ajoutée.
      </p>
      <p>
        Exemple : <code>{ "target": "_top" }</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>"channel"</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le nom de la chaine.
      </p>
      <p>
        Exemple : <code>"artefr"</code>.
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les dernières vidéos des [Silence on
joue](https://www.twitch.tv/silenceonjoue).

```JSON
{
  "module": {
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js",
    "options": {
      "cron": "@daily",
      "max": 3
    }
  },
  "scrapers": [{
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/twitch/twitch.js",
    "options": {
      "channel": "silenceonjoue"
    }
  }]
}
```
