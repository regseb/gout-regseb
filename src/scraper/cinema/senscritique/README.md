# Scraper _cinema/senscritique_

> Mots-clés : gout, gout-scraper, gout-scraper-cinema-senscritique,
> gout-module-cinema.

Ce scraper retourne les séances du jour de cinémas en ajoutant des statuts issus
de [**SensCritique**](https://www.senscritique.com/).

Il peut être utilisé avec le module
[_cinema_](https://github.com/regseb/gout-regseb/tree/HEAD/src/module/cinema#readme).
Et il prend d'autres scrapers, compatibles avec le module _cinema_, en
dépendance.

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
        Le nom d'un utilisateur SensCritique.
      </p>
      <p>
        Exemple : <code>"NoobMaster69"</code>
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

## Scrapers

Ce scraper doit avoir d'autres scrapers en dépendance pour récupérer les
séances. Les sous-scrapers sont des scrapers combatibles avec le module
[_cinema_](https://github.com/regseb/gout-regseb/tree/HEAD/src/module/cinema#readme).

## Exemple

Ce widget affiche les séances en français dans le cinéma
[Pathé Plan de Campagne](https://www.pathe.fr/cinemas/cinema-pathe-plan-de-campagne)
et ajoute les statuts de l'utilisateur _NoobMaster69_ de SensCritique.

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/cinema/cinema.js"
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/cinema/senscritique/senscritique.js"
        options:
          user: "NoobMaster69"
        scrapers:
          - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/cinema/pathe/pathe.js"
            options:
              cinema: "cinema-pathe-plan-de-campagne"
              versions": ["vf", "vfst"]
</script>
```
