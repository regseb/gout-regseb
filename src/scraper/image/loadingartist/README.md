# Scraper _image/loadingartist_

> Mots-clés : gout, gout-scraper, gout-scraper-image-loadingartist,
> gout-module-image.

Ce scraper recupère la liste des derniers dessins publiés sur le site
[**Loading Artist**](https://loadingartist.com/).

Il peut être utilisé avec le module
[_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme).

## Configuration

La configuration contient un objet
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
        défaut aucune propriété est ajoutée.
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
        "config": {
            "cron": "@daily",
            "max": 1
        }
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/loadingartist/loadingartist.js"
    }]
}
```
