# Scraper _list/isthereanydeal_

> Mots-clés : gout, gout-scraper, gout-scraper-list-isthereanydeal,
> gout-module-list.

Ce scraper récupère les offres d'un jeu vidéo listées sur
[**IsThereAnyDeal**](https://isthereanydeal.com/).

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
    <td><code>"game"</code></td>
    <td><code>string</code></td>
    <td>
      <p>Le nom du jeu.</p>
      <p>Exemple : <code>"portalii"</code></p>
    </td>
  </tr>
  <tr>
    <td><code>"stores"</code></td>
    <td><code>string[]</code></td>
    <td>
      <p>Les plateformes retournées.</p>
      <p>Exemple : <code>["Steam"]</code></p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les offres du jeu
[Doom](https://isthereanydeal.com/game/doom/info/) sur les plateformes Steam et
Humble Store.

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js",
        "options": {
            "color": "#9e9e9e",
            "cron": "@daily"
        }
    },
    "scrapers": [
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/isthereanydeal/isthereanydeal.js",
        "options": {
            "game": "doom"
            "stores": ["Steam", "Humble Store"]
        }
    ]
}
```
