# community/regseb/tv/tele2semaines

Ce scraper donne le **[programme télévisé](http://www.programme.tv/)** du
soir.

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec la
propriété suivante :

- `"broadcasts"` : un objet JSON dont les noms des propriétés sont les
  bouquets : `"tnt"`, `"tnt-local"`, `"generaliste"`, `"canal-tps"`, `"cinema"`,
  `"sport"`, `"information"`, `"belgique-suisse"`, `"jeunesse"`, `"musique"`,
  `"documentaire"` et `"serie"`.

Les valeurs contiennent la liste des chaines :

- **`"tnt"` :**
  - *TF1* : `"tf1"` ;
  - *France 2* : `"france-2"` ;
  - *France 3* : `"france-3"` ;
  - *Canal+* : `"canalplus"` ;
  - *France 5* : `"france-5"` ;
  - *M6* : `"m6"` ;
  - *Arte* : `"arte"` ;
  - *C8* : `"c8"` ;
  - *W9* : `"w9"` ;
  - *TMC* : `"tmc"` ;
  - *TFX* : `"tfx"` ;
  - *NRJ 12* : `"nrj-12"` ;
  - *LCP - Public Senat* : `"la-chaine-parlementaire"` ;
  - *France 4* : `"france-4"` ;
  - *BFM TV* : `"bfm-tv"` ;
  - *CNews* : `"cnews"` ;
  - *CStar* : `"cstar"` ;
  - *Gulli* : `"gulli"` ;
  - *TF1 Séries Films* : `"tf1-series-films"` ;
  - *L'Équipe* : `"lequipe"` ;
  - *6ter* : `"6ter"` ;
  - *Numéro 23* : `"numero-23"` ;
  - *RMC Découverte* : `"rmc-decouverte"` ;
  - *Chérie 25* : `"cherie-25"` ;
- **`"tnt-local"` :**
  - *Canal partagé TNT Ile-de-France* : `"canal-partage-tnt-ile-de-france"` ;
  - *IDF1* : `"idf1"` ;
- **`"generaliste"` :**
  - *AB1* : `"ab-1"` ;
  - *AB3* : `"ab-3"` ;
  - *ABXplore* : `"abxplore"` ;
  - *Comédie+* : `"comedieplus"` ;
  - *Elle Girl* : `"ellegirl"` ;
  - *Game One* : `"game-one"` ;
  - *KTO* : `"kto"` ;
  - *Paris Première* : `"paris-premiere"` ;
  - *Pink TV* : `"pink-tv"` ;
  - *RTL9* : `"rtl-9"` ;
  - *TV5 Monde* : `"tv5monde"` ;
  - *TV Breizh* : `"tvbreizh"` ;
  - *Téva* : `"teva"` ;
  - *Vivolta* : `"vivolta"` ;
- **`"canal-tps"` :**
  - *Canal+* : `"canalplus"` ;
  - *Canal+ Cinéma* : `"canalplus-cinema"` ;
  - *Canal+ Décalé* : `"canalplus-decale"` ;
  - *Canal+ Family* : `"canalplus-family"` ;
  - *Canal+ Sport* : `"canalplus-sport"` ;
- **`"cinema"` :**
  - *Action* : `"action"` ;
  - *Ciné FX* : `"cine-fx"` ;
  - *Ciné+ Classic* : `"cineplus-classic"` ;
  - *Ciné+ Club* : `"cineplus-club"` ;
  - *Ciné+ Emotion* : `"cineplus-emotion"` ;
  - *Ciné+ Famiz* : `"cineplus-famiz"` ;
  - *Ciné+ Frisson* : `"cineplus-frisson"` ;
  - *Ciné+ Premier* : `"cineplus-premier"` ;
  - *Disney Cinemagic +1* : `"disney-cinemagic-plus1"` ;
  - *OCS Choc* : `"ocs-choc"` ;
  - *OCS Géants* : `"ocs-geants"` ;
  - *OCS Max* : `"ocs-max"` ;
  - *Paramount Channel* : `"paramount-channel"` ;
  - *Polar* : `"polar"` ;
  - *TCM Cinéma* : `"tcm-cinema"` ;
  - *XXL* : `"xxl"` ;
- **`"sport"` :**
  - *AB Moteurs* : `"ab-moteurs"` ;
  - *beIN Sports 1* : `"bein-sports-1"` ;
  - *beIN Sports 2* : `"bein-sports-2"` ;
  - *beIN Sports 3* : `"bein-sports-3"` ;
  - *Canal+ Sport* : `"canalplus-sport"` ;
  - *Equidia* : `"equidia-live"` ;
  - *Eurosport 1* : `"eurosport-1"` ;
  - *Girondins TV* : `"girondins-tv"` ;
  - *Infosport+* : `"infosportplus"` ;
  - *L'Équipe* : `"l-equipe"` ;
  - *Motorsport TV* : `"motorsport-tv"` ;
  - *OLTV* : `"oltv"` ;
  - *OMtv* : `"omtv"` ;
  - *SFR Sport 2* : `"sfr-sport-2"` ;
  - *Science et Vie TV* : `"science-vie-tv"` ;
- **`"information"` :**
  - *BFM TV* : `"bfm-tv"` ;
  - *CNews* : `"cnews"` ;
  - *France 24* : `"france-24"` ;
  - *LCI* : `"lci-la-chaine-info"` ;
- **`"belgique-suisse"` :**
  - *Club RTL* : `"club-rtl"` ;
  - *La Deux* : `"la-deux"` ;
  - *La Trois* : `"la-trois"` ;
  - *La Une* : `"la-une"` ;
  - *Plug RTL* : `"plug-rtl"` ;
  - *RTL TVI* : `"rtl-tvi"` ;
  - *RTS Deux* : `"rts-deux"` ;
  - *RTS Un* : `"rts-un"` ;
- **`"jeunesse"` :**
  - *Boomerang* : `"boomerang"` ;
  - *Canal J* : `"canal-j"` ;
  - *Cartoon Network* : `"cartoon-network"` ;
  - *Disney Channel* : `"disney-channel"` ;
  - *Disney Cinemagic +1* : `"disney-cinemagic-plus1"` ;
  - *Disney Junior* : `"disney-junior"` ;
  - *Mangas* : `"mangas"` ;
  - *Nickelodéon* : `"nickelodeon"` ;
  - *Piwi+* : `"piwiplus"` ;
  - *TéléToon+* : `"teletoonplus"` ;
  - *TIJI* : `"tiji"` ;
- **`"musique"` :**
  - *M6 Music* : `"m6-music"` ;
  - *MCM* : `"mcm"` ;
  - *MCM Top* : `"mcm-top"` ;
  - *Melody* : `"melody"` ;
  - *Mezzo* : `"mezzo"` ;
  - *MTV* : `"mtv"` ;
  - *NRJ Hits* : `"nrj-hits"` ;
  - *RFM TV* : `"rmf-tv"` ;
- **`"documentaire"` :**
  - *Animaux* : `"animaux"` ;
  - *Chasse et Pêche* : `"chasse-et-peche"` ;
  - *Discovery Channel* : `"discovery-channel"` ;
  - *Discovery Science* : `"discovery-science"` ;
  - *E!* : `"e"` ;
  - *Histoire* : `"histoire"` ;
  - *National Geographic* : `"national-geographic"` ;
  - *Planète+* : `"planeteplus"` ;
  - *Planète+ Action & Expérience* : `"planeteplus-aventure-experience"` ;
  - *Planète+ Crime+Investigation* : `"planeteplus-crime-investigation"` ;
  - *RMC Découverte* : `"rmc-decouverte"` ;
  - *Science et Vie TV* : `"science-vie-tv"` ;
  - *Seasons* : `"seasons"` ;
  - *Toute l'Histoire* : `"toute-l-histoire"` ;
  - *Ushuaïa TV* : `"ushuaia-tv"` ;
  - *Voyage* : `"voyage"` ;
- **`"serie"` :**
  - *13eme RUE* : `"13eme-rue"` ;
  - *Canal+ Séries* : `"canalplus-series"` ;
  - *OCS Choc* : `"ocs-choc"` ;
  - *OCS Géants* : `"ocs-geants"` ;
  - *OCS Max* : `"ocs-max"` ;
  - *Syfy* : `"syfy"` ;
  - *serieclub* : `"serie-club"`.

## Exemple

Cet exemple donne le programme télévisé de toutes les chaines de la TNT sauf
Canal+, BFM TV, CNews, LCI et Franceinfo.

```JSON
{
    "module": "community/regseb/tv",
    "files": { "config.json": {} },
    "scrapers": [
        {
            "scraper": "community/regseb/tv/tele2semaines",
            "config": {
                "broadcasts": {
                    "tnt": [
                        "tf1", "france-2", "france-3", "france-5", "m6",
                        "arte", "c8", "w9", "tmc", "tfx", "nrj-12",
                        "la-chaine-parlementaire", "france-4", "cstar",
                        "gulli", "france-o", "tfx-series-films", "l-equipe",
                        "6ter", "numero-23", "rmc-decouverte", "cherie-25"
                 ]
             }
         }
    ]
}
```
