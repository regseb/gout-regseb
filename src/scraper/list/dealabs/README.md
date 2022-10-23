# Scraper _list/dealabs_

> Mots-clés : gout, gout-scraper, gout-scraper-list-dealabs, gout-module-list.

Ce scraper récupère la liste des derniers deals postés sur
[**Dealabs.com**](https://www.dealabs.com/) selon des filtres.

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
    <td><code>"filters"</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Les filtres de la recherche :
      </p>
      <ul>
        <li>
          <code>"q"</code> : la chaine de caractères contenant le terme cherché
          (par défaut aucun filtre sur du texte) ;
        </li>
        <li>
          <code>"search_fields[]"</code> contient la liste des identifiants des
          lieux de la recherche :
          <ul>
            <li><code>1</code> (par défaut) : <em>Titres</em> ;</li>
            <li><code>2</code> (par défaut) : <em>Descriptions</em> ;</li>
            <li><code>3</code> (par défaut) : <em>Codes</em> ;</li>
            <li><code>4</code> : <em>Commentaires</em> ;</li>
          </ul>
        </li>
        <li>
          <code>"hide_expired"</code> : <code>0</code> (par défaut) pour
          remonter les deals expirés ; <code>1</code> pour les masquer ;
        </li>
        <li>
           <code>"hide_local"</code> : <code>0</code> (par défaut) pour afficher
           les deals locaux ; <code>1</code> pour les masquer ;
        </li>
        <li>
          <code>"hot_only"</code> : <code>0</code> (par défaut) pour afficher
          tous les deals ; <code>1</code> pour garder uniquement les deals
          <em>hot</em> ;
        </li>
        <li>
          <code>"temperatureFrom"</code> et <code>"temperatureTo"</code> : la
          température minimum et maximum pour les deals (par défaut aucun filtre
          sur la température) ;
        </li>
        <li>
          <code>"priceFrom"</code> et <code>"priceTo"</code> : le prix minimum
          et maximum pour les deals (par défaut aucun filtre sur le prix).
        </li>
      </ul>
      <p>
        Exemple : <code>{ "q": "Raspberry Pi" }</code>.
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche les derniers deals nationaux non-expirés pour un smartphone
entre 200 et 400 euros.

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js",
        "config": {
            "color": "#00bcd4",
            "cron": "@hourly"
        }
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/dealabs/dealabs.js"
        "config": {
            "filters": {
                "q": "smartphone",
                "hide_expired": 1,
                "hide_local": 1,
                "priceFrom": 200,
                "priceTo": 400
            }
        }
    }]
}
```
