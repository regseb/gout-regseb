# Scraper _image/tumblr_

> Mots-clés : gout, gout-scraper, gout-scraper-image-tumblr, gout-module-image.

Ce scraper recupère la liste des derniers dessins publiés sur un blog
[**Tumblr**](https://www.tumblr.com/).

Il peut être utilisé avec le module
[_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme).

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
        défaut aucune propriété n'est ajoutée.
      </p>
      <p>
        Exemple : <code>{ "target": "_top" }</code>.
      </p>
    </td>
  <tr>
    <td><code>"user"</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'identifiant du compte.
      </p>
      <p>
        Exemple : <code>"pizzacakecomics"</code>.
      </p>
    </td>
  </tr>
  </tr>
</table>

## Exemple

Ce widget affiche les deux derniers dessins du blog [Pizza Cake
Comics](https://pizzacakecomic.com/).

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/image/image.js",
        "config": {
            "cron": "@daily",
            "max": 2
        }
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/tumblr/tumblr.js",
        "config": {
            "user": "pizzacakecomics"
        }
    }]
}
```
