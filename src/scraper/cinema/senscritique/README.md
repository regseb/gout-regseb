# Scraper _cinema/senscritique_

> Mots-clés : gout, gout-scraper, gout-scraper-cinema-senscritique,
> gout-module-cinema.

Ce scraper retourne les séances du jour de cinémas en ajoutant des status issues
de [**SensCritique**](https://www.senscritique.com/).

Il peut être utilisé avec le module
[_cinema_](https://github.com/regseb/gout-regseb/tree/HEAD/src/module/cinema#readme).

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
    <td><code>"user"</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le nom d'un utilisateur SensCritique.
      </p>
      <p>
        Exemple : <code>"NoobMaster69"</code>.
      </p>
    </td>
  </tr>
</table>

## Scrapers

Ce scraper doit avoir d'autres scrapers en dépendance pour récupérer les
séances. Les sous-scrapers sont des scrapers combatibles avec le module
[_cinema_](https://github.com/regseb/gout-regseb/tree/HEAD/src/module/cinema#readme).

## Exemple

Ce widget affiche les séances en français sauf celles en 3D et 4DX dans une
salle avec un accès pour les personnes à mobilité réduite (PMR) dans le cinéma
[Pathé Plan de
Campagne](https://www.pathe.fr/cinemas/cinema-pathe-plan-de-campagne) et ajoute
les status de l'utilisateur NoobMaster69 de SensCritique.

```JSON
{
  "module": {
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/cinema/cinema.js"
  },
  "scrapers": [{
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/cinema/senscritique/senscritique.js",
    "options": {
      "user": "NoobMaster69",
    },
    "scrapers": [{
      "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/cinema/pathe/pathe.js",
      "options": {
        "cinema": "cinema-pathe-plan-de-campagne",
        "versions": ["vf", "vfst"],
        "tags": {
          "includes": ["pmr"],
          "excludes": ["3d", "4dx"]
        }
      }
    }]
  }]
}
```
