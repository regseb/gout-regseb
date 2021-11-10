# Scraper _image/valdallos_

> Mots-clés : gout, gout-scraper, gout-scraper-image-valdallos,
> gout-module-image.

Ce scraper recupère les webcams du
[**Val d'Allos**](https://www.valdallos.com/webcams.html).

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
        défaut aucune propriété est ajoutée.
      </p>
      <p>
        Exemple : <code>{ "target": "_top" }</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>"webcams"</code></td>
    <td><code>string[]</code></td>
    <td>
      <p>
        La liste des webcams qui seront affichées. Les valeurs possibles sont :
      </p>
      <ul>
        <li>Allos : `"village"` et `"parc-loisirs"` ;</li>
        <li>Seignus : `"seignus-bas"` et `"seignus-haut"` ;</li>
        <li>Foux d'Allos : `"front-de-neige"` et `"observatoire"`.</li>
      </ul>
      <p>
       Par défaut, toutes les webcams sont retournées.
      </p>
      <p>
        Exemple : <code>["seignus-bas", "front-de-neige"]</code>.
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les deux webcams du Seignus et celle du village d'Allos, en
les actualisant une fois par jour à midi.

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/image/image.js",
        "config": {
            "cron": "0 12 * * *"
        }
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/valdallos/valdallos.js",
        "config": {
            "webcams": ["seignus-haut", "seignus-bas", "village"]
        }
    }]
}
```
