# community/regseb/tv

Ce module donne le **programme télévisé** du soir.

## Configuration

Le répertoire du widget doit avoir un fichier ***config.json*** contenant un
objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec la
propriété suivante :

- `"color"` (optionnel - valeur par défaut : `"#e9e9e9"`) : la couleur de fond
  du cadre (au format hexadécimale, régulier RGB ou avec des mots-clefs
  prédéfinis).

## Scraper

TODO.

## Exemple

Cet exemple donne le programme télévisé de toutes les chaines de la TNT sauf
Canal+, BFM TV, CNews et Franceinfo.

```JSON
{
    "module": "community/regseb/tv",
    "files": { "config.json": {} },
    "scrapers": [
        {
            "scraper": "community/regseb/tv/tele2semaines",
            "config": {
                "tnt": [
                    "tf1", "france-2", "france-3", "france-5", "m6", "arte",
                    "c8", "w9", "tmc", "nt1", "nrj-12",
                    "la-chaine-parlementaire-public-senat", "france-4",
                    "cstar", "gulli", "france-o", "hd1", "l-equipe", "6ter",
                    "numero-23", "rmc-decouverte", "cherie-25"
                ]
            }
        }
    ]
}
```
