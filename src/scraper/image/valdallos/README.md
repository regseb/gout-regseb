# Scraper _image/valdallos_

> Mots-clés : gout, gout-scraper, gout-scraper-image-valdallos,
> gout-module-image.

Ce scraper recupère les webcams du [**Val
d'Allos**](https://www.valdallos.com/webcams.html).

Il peut être utilisé avec le module
[_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme).

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
    <td><code>webcams</code></td>
    <td><code>string[]</code></td>
    <td>
      <p>
        La liste des webcams qui seront affichées. Les valeurs possibles sont :
      </p>
      <ul>
        <li>Allos : <code>"village"</code> et <code>"parc-loisirs"</code> ;</li>
        <li>
          Seignus : <code>"seignus-bas"</code> et <code>"seignus-haut"</code> ;
        </li>
        <li>
          Foux d'Allos : <code>"front-de-neige"</code> et
          <code>"observatoire"</code>.
        </li>
      </ul>
      <p>
       Par défaut, toutes les webcams sont retournées.
      </p>
      <p>
        Exemple : <code>["seignus-bas", "front-de-neige"]</code>.
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
        Exemple : <code>target: "_top"</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>filter</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le filtre qui sera appliqué sur les éléments retournées. Par défaut
        aucun filtre n'est appliqué. Pour plus de détails, voir le scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/filter#readme"><em>tools/filter</em></a>.
      </p>
      <p>
        Exemple : <code>"title != 'foo'"</code>.
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les deux webcams du Seignus et celle du village d'Allos, en
les actualisant une fois par jour à midi.

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/image/image.js"
    options:
      cron: "0 12 * * *"
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/valdallos/valdallos.js"
        options:
          webcams: ["seignus-haut", "seignus-bas", "village"]
</script>
```
