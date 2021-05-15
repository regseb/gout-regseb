# community/regseb/image/peppercarrot

Ce scraper recupère la liste des derniers épisodes publiés sur le site
**[Pepper&Carrot](https://www.peppercarrot.com/)**.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec la
propriété suivante :

- `"lang"` (optionnel - valeur par défaut : `"fr"`) : le code d'une langue.

Les codes disponible sont :

- `"id"` : *Bahasa Indonesia* ;
- `"br"` : *Brezhoneg* ;
- `"ca"` : *Català* ;
- `"cs"` : *Čeština* ;
- `"de"` : *Deutsch* ;
- `"en"` : *English* ;
- `"es"` : *Español* ;
- `"eo"` : *Esperanto* ;
- `"fr"` : *Français* ;
- `"it"` : *Italiano* ;
- `"hu"` : *Magyar* ;
- `"no"` : *Norsk* ;
- `"nl"` : *Nederlands* ;
- `"oc"` : *Occitan* ;
- `"pl"` : *Polski* ;
- `"pt"` : *Português* ;
- `"ru"` : *Pусский* ;
- `"sz"` : *Ślōnskŏ gŏdka* ;
- `"vi"` : *Tiếng Việt* ;
- `"uk"` : *українська* ;
- `"ja"` : *日本語* ;
- `"cn"` : *简化字* ;
- `"kr"` : *한국어*.

## Exemple

Cet exemple affiche le dernier dessin.

```JSON
{
    "module": "core/image",
    "files": {
        "config.json": {
            "max": 1,
            "cron": "@daily"
        }
    },
    "scrapers": [
        { "scraper": "community/regseb/image/peppercarrot" }
    ]
}
```
