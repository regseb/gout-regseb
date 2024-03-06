# Scraper _image/loadingartist_

> Mots-clés : gout, gout-scraper, gout-scraper-image-loadingartist,
> gout-module-image.

Ce scraper recupère la liste des derniers dessins publiés sur le site
[**Loading Artist**](https://loadingartist.com/).

Il peut être utilisé avec le module
[_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme).

## Options

Les options sont dans un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec la
propriété suivante :

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
</table>

## Exemple

Ce widget affiche le dernier dessin.

```JSON
{
  "module": {
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/image/image.js",
    "options": {
      "cron": "@daily",
      "max": 1
    }
  },
  "scrapers": [{
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/loadingartist/loadingartist.js"
  }]
}
```
