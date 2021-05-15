# Scraper *feed/youtube*

Ce scraper récupère la liste des dernières vidéos postées sur
**[Youtube](https://www.youtube.com)** par un utilisateur.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"user"` : un identifiant de compte ;
- `"playlist"` (optionnel - par défaut toutes les vidéos) : le nom d'une
  playlist de l'utilisateur ;
- `"key"` : une clé pour les API Google ;
- `"icon"` (optionnel - par défaut aucune icône est affichée) : l'URL d'une
  icône qui préfixera le titre.

### `"key"`

Pour obtenir une clé, allez dans la
***[Console des API Google](https://console.developers.google.com/)***. Créez un
projet, puis *Créez des identifiants* pour obtenir une *Clé API*. Ensuite,
activez la *YouTube Data API v3*.

## Exemple

Cet exemple affiche les dernières vidéos de
*[Data Gueule](https://www.youtube.com/user/datagueule)*.

```JSON
{
    "module": "core/feed",
    "files": {
        "config.json": {
            "color": "#3f51b5",
            "cron": "@daily",
            "max": 2
        }
    },
    "scrapers": [
        {
            "scraper": "community/regseb/feed/youtube",
            "config": {
                "user": "datagueule",
                "key": "AIzaSyBdVl-cTICSwY... (une clé de ce style)"
            }
        }
    ]
}
```
