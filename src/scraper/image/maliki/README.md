# Scraper _image/maliki_

> Mots-clés : gout, gout-scraper, gout-scraper-image-maliki, gout-module-image.

Ce scraper recupère la liste des derniers dessins publiés sur le site
[**Maliki**](https://maliki.com/strips/).

Il peut être utilisé avec le module
[_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme).

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
    <td><code>"password"</code></td>
    <td><code>boolean</code></td>
    <td>
      <p>
        La marque indiquant s'il faut remonter les dessins protégés par un mot
        de passe. Par défaut ils sont remontés.
      </p>
      <p>
        Exemple : <code>{ "password": false }</code>.
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les deux derniers dessins.

```JSON
{
  "module": {
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/image/image.js",
    "options": {
      "cron": "@daily",
      "max": 2
    }
  },
  "scrapers": [{
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/maliki/maliki.js"
  }]
}
```
