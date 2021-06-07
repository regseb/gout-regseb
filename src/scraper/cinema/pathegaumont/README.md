# Scraper *cinema/pathegaumont*

Ce scraper retourne les scéances du jour d'un cinéma
[Pathé Gaumont](https://www.cinemaspathegaumont.com/).

Il peut être utilisé avec le module
[*cinema*](https://github.com/regseb/gout-regseb/tree/master/src/module/cinema#readme).

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"cinema"` : le code du cinéma où récupérer les séances ;
- `"versions"` (optionnel - par défaut toutes les version) : la liste des
  versions souhaitées (`"vf"`, `"vost"`, `"vo"` et `"vfst"`) ;
- `"tags"` (optionnel - par défaut aucun filtre) : le filtre sur les étiquettes
  avec les propriétés `"includes"` et `"excludes"` (`"3d"`, `"4dx"`, `"atmos"`,
  `"cinekids"`, `"duo"`, `"imax"`, `"pathe+"` et `"pmr"`).

## Liste des cinémas

Voici les codes des cinémas Pathé Gaumont :

- Gaumont Amiens : `"cinema-gaumont-amiens"` ;
- Gaumont Amnéville : `"cinema-gaumont-amneville"` ;
- Gaumont Angers Multiplexe : `"cinema-gaumont-angers-multiplexe"` ;
- Pathé Annecy : `"cinema-decavision-annecy"` ;
- Gaumont Archamps : `"cinema-gaumont-archamps"` ;
- Pathé Avignon Cap Sud : `"cinema-pathe-avignon-cap-sud"` ;
- Pathé Belfort : `"cinema-pathe-belfort"` ;
- Pathé Les Rives de l'Orne : `"cinema-pathe-les-rives-de-l-orne"` ;
- Gaumont Coquelles : `"cinema-gaumont-coquelles"` ;
- Pathé Chambéry Les Halles : `"cinema-pathe-les-halles"` ;
- Pathé Evreux : `"cinema-pathe-evreux-ex-cine-zenith"` ;
- Pathé Chavant : `"cinema-pathe-chavant"` ;
- Pathé Echirolles : `"cinema-pathe-echirolles"` ;
- Gaumont Docks Vauban - Le Havre : `"cinema-gaumont-docks-vauban-le-havre"` ;
- Pathé Le Mans Quinconces : `"cinema-pathe-le-mans-quinconces"` ;
- Pathé Liévin : `"cinema-pathe-lievin"` ;
- Pathé Carré de Soie : `"cinema-pathe-carre-de-soie"` ;
- Pathé Bellecour : `"cinema-lyon-pathe-bellecour"` ;
- Pathé Vaise : `"cinema-pathe-vaise"` ;
- Pathé Madeleine : `"cinema-pathe-madeleine"` ;
- Pathé Plan de Campagne : `"cinema-pathe-plan-de-campagne"` ;
- Pathé Montataire : `"cinema-pathe-montataire"` ;
- Gaumont Comédie : `"cinema-gaumont-comedie"` ;
- Gaumont Montpellier Multiplexe : `"cinema-gaumont-montpellier-multiplexe"` ;
- Gaumont Nantes : `"cinema-gaumont-nantes"` ;
- Pathé Atlantis : `"cinema-pathe-atlantis"` ;
- Pathé Gare du Sud : `"pathe-gare-du-sud"` ;
- Pathé Lingostière : `"cinema-pathe-lingostiere"` ;
- Pathé Nice : `"cinema-pathe-nice"` ;
- Pathé Orléans Place de Loire : `"cinema-pathe-orleans"` ;
- Gaumont Opéra : `"cinema-gaumont-opera"` ;
- Gaumont Champs Elysées : `"cinema-gaumont-champs-elysees"` ;
- Gaumont Les Fauvettes : `"cinema-gaumont-les-fauvettes"` ;
- Gaumont Alésia : `"cinema-gaumont-alesia"` ;
- Gaumont Parnasse : `"cinema-gaumont-parnasse"` ;
- Gaumont Aquaboulevard : `"cinema-gaumont-aquaboulevard"` ;
- Gaumont Convention : `"cinema-gaumont-convention"` ;
- Pathé Beaugrenelle : `"cinema-pathe-beaugrenelle"` ;
- Pathé Wepler : `"cinema-pathe-wepler"` ;
- Pathé La Villette : `"cinema-pathe-la-villette"` ;
- Gaumont Carré Sénart : `"cinema-gaumont-carre-senart"` ;
- Gaumont Disney Village : `"cinema-gaumont-disney-village"` ;
- Gaumont Saint-Denis : `"cinema-gaumont-saint-denis"` ;
- Pathé Belle Epine : `"cinema-pathe-belle-epine"` ;
- Pathé Boulogne : `"cinema-pathe-boulogne"` ;
- Pathé Conflans : `"cinema-pathe-conflans"` ;
- Pathé Dammarie : `"cinema-pathe-dammarie"` ;
- Pathé Levallois : `"cinema-pathe-levallois"` ;
- Pathé Massy : `"cinema-pathe-massy"` ;
- Pathé Quai d'Ivry : `"cinema-pathe-quai-d-ivry"` ;
- Pathé Saran : `"cinema-pathe-saran"` ;
- Gaumont Parc Millésime : `"cinema-gaumont-parc-millesime"` ;
- Gaumont Rennes : `"cinema-gaumont-rennes"` ;
- Europacorp Aéroville : `"cinema-europacorp-aeroville"` ;
- Gaumont Grand Quevilly : `"cinema-gaumont-grand-quevilly"` ;
- Pathé Docks 76 : `"cinema-pathe-docks-76"` ;
- Pathé Brumath : `"cinema-pathe-brumath"` ;
- Pathé La Valette : `"cinema-pathe-la-valette"` ;
- Pathé Liberté : `"cinema-pathe-liberte"` ;
- Gaumont Labège : `"cinema-gaumont-labege"` ;
- Gaumont Wilson : `"cinema-gaumont-wilson"` ;
- Pathé Valence : `"cinema-pathe-valence"` ;
- Gaumont Valenciennes : `"cinema-gaumont-valenciennes"`.

## Exemple

Cet configuration affiche les séances en français sauf celles en 3D et Pathé+
dans une salle avec un accès pour les personnes à mobilité réduite dans le
cinéma [Pathé Plan de
Campagne](https://www.cinemaspathegaumont.com/cinemas/cinema-pathe-plan-de-campagne).

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/cinema/cinema.js",
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/cinema/pathegaumont/pathegaumont.js",
        "config": {
            "cinema": "cinema-pathe-plan-de-campagne",
            "versions": ["vf", "vfst"],
            "tags": {
                "includes": ["pmr"],
                "excludes": ["3d", "pathe+"]
            }
        }
    }]
}
```
