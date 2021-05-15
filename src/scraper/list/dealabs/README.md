# community/regseb/feed/dealabs

Ce scraper récupère la liste des derniers *deals* postés sur
**[Dealabs.com](https://www.dealabs.com/)** selon des filtres.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec la
propriété `"filters`" contenant les filtres de la recherche :

- `"q"` : la chaine de caractères contenant le terme cherché (par défaut aucun
  filtre sur du texte) ;
- `"search_fields[]"` contient la liste des identifiants des lieux de la
  recherche :
  - `1` (par défaut) : *Titres* ;
  - `2` (par défaut) : *Descriptions* ;
  - `3` (par défaut) : *Codes* ;
  - `4` : *Commentaires* ;
- `"hide_expired"` : `0` (par défaut) pour remonter les *deals* expirés ; `1`
  pour les masquer ;
- `"hide_local"` : `0` (par défaut) pour afficher les *deals* locaux ; `1` pour
  les masquer ;
- `"hot_only"` : `0` (par défaut) pour afficher tous les *deals* ; `1` pour
  garder les *deals* *hot* uniquement ;
- `"temperatureFrom"` et `"temperatureTo"` : la température minimum et maximum
  pour les *deals* (par défaut aucun filtre sur la température) ;
- `"priceFrom"` et `"priceTo"` : le prix minimum et maximum pour les *deals*
  (par défaut aucun filtre sur le prix).

## Exemple

Cet exemple affiche les derniers *deals* nationaux non-expirés pour un
*smartphone* entre *200* et *400* euros.

```JSON
{
    "module": "core/feed",
    "files": {
        "config.json": {
            "color": "#00bcd4",
            "cron": "@hourly"
        }
    },
    "scrapers": [
        {
            "scraper": "community/regseb/feed/dealabs",
            "config": {
                "filters": {
                    "q": "smartphone",
                    "hide_expired": 1,
                    "hide_local": 1,
                    "priceFrom": 200,
                    "priceTo": 400
                }
            }
        }
    ]
}
```
