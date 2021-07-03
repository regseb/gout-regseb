# Scraper *list/isthereanydeal*

Ce scraper récupère les offres d'un jeu vidéo listées sur
**[IsThereAnyDeal](https://isthereanydeal.com/)**.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés :

- `"game`" : le nom du jeu ;
- `"stores`" : les plateformes retournées.

## Exemple

Cet exemple affiche les offres du jeu
[*Doom*](https://isthereanydeal.com/game/doom/info/) sur les plateformes *Steam*
et *Humble Store*.

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js",
        "config": {
            "color": "#9e9e9e",
            "cron": "@hourly"
        }
    },
    "scrapers": [
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/isthereanydeal/isthereanydeal.js",
        "config": {
            "game": "doom"
            "stores": ["Steam", "Humble Store"]
        }
    ]
}
```
