# Scraper _list/radioline_

> Mots-clés : gout, gout-scraper, gout-scraper-list-radioline, gout-module-list.

Ce scraper récupère la liste des derniers épisodes d'un podcast sur
[**Radioline**](https://fr-fr.radioline.co/).

## Options

Les options sont dans un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"podcast"` : l'identifiant du podcast (le chemin dans l'URL) ;
- `"icon"` (optionnel - par défaut aucune icône n'est affichée) : l'URL d'une
  icône qui préfixera le titre.

## Exemple

Ce widget affiche les deux dernières émissions du [Meilleur des
mondes](https://www.radioline.co/fr/podcasts/le_meilleur_des_mondes).

```JSON
{
  "module": {
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/podcast/podcast.js",
    "options": {
      "color": "#a256b1",
      "cron": "@daily",
      "max": 2
    }
  },
  "scrapers": [{
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/radioline/radioline.js",
    "options": {
      "podcast": "le_meilleur_des_mondes"
    }
  }]
}
```
