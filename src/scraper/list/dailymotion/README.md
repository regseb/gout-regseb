# Scraper _list/dailymotion_

> Mots-clés : gout, gout-scraper, gout-scraper-list-dailymotion,
> gout-module-list.

Ce scraper recupère la liste des dernières vidéos postées sur
[**Dailymotion**](https://www.dailymotion.com/fr) par un utilisateur.

Il peut être utilisé avec le module
[_list_](https://github.com/regseb/gout/tree/HEAD/src/module/list#readme).

## Configuration

La configuration contient un objet
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
        défaut aucune propriété est ajoutée.
      </p>
      <p>
        Exemple : <code>{ "target": "_top" }</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>"user"</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'identifiant du compte.
      </p>
      <p>
        Exemple : <code>"franceinter"</code>.
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les dernières vidéos des [Guignols de
l'Info](https://www.dailymotion.com/lesguignols).

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js",
        "config": {
            "cron": "@daily",
            "max": 5
        }
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/dailymotion/dailymotion.js",
        "config": {
            "user": "lesguignols"
        }
    }]
}
```
