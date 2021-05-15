# community/regseb/image/valdallos

Ce scraper recupère les webcams du
**[Val d'Allos](https://www.valdallos.com/webcams.html)**.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"webcams"` : un tableau listant les webcams qui seront affichées.
- `"icon"` (optionnel - par défaut aucune icône est affichée) : l'URL d'une
  icône qui préfixera le titre (dans le cas d'utilisation du scraper dans un
  module `feed`).

Les valeurs possibles pour les webcams sont :

- Allos : `"village"` et `"parc-loisirs"` ;
- Seignus : `"seignus-bas"` et `"seignus-haut"` ;
- Foux d'Allos : `"front-de-neige"` et `"observatoire"`.

## Exemple

Cet exemple affiche les deux webcams du Seignus et celle du village d'Allos, en
les actualisant une fois par jour à midi.

```JSON
{
    "module": "core/image",
    "files": {
        "config.json": {
            "cron": "0 12 * * *"
        }
    },
    "scrapers": [
        {
            "scraper": "community/regseb/image/valdallos",
            "config": {
                "webcams": ["seignus-haut", "seignus-bas", "village"]
            }
        }
    ]
}
```
