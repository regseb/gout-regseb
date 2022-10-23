# Scraper _tv/tele7jours_

> Mots-clés : gout, gout-scraper, gout-regseb-scraper-tv-tele7jours,
> gout-regseb-module-tv

Ce scraper donne le programme télévisé du soir par [**Télé 7
Jours**](https://www.programme-television.org/).

Il peut être utilisé avec le module :
[_tv_](https://github.com/regseb/gout-regseb/tree/HEAD/src/module/tv#readme).

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

- `"broadcast"` (optionnel - valeur par défaut : `"tnt"`) : la source de
  diffusion ([`"tnt"`](https://www.programme-television.org/?bouquet=tnt),
  [`"tnt-canal"`](https://www.programme-television.org/?bouquet=tnt-canal),
  [`"orange"`](https://www.programme-television.org/?bouquet=orange),
  [`"free"`](https://www.programme-television.org/?bouquet=free),
  [`"numericable"`](https://www.programme-television.org/?bouquet=numericable),
  [`"sfr"`](https://www.programme-television.org/?bouquet=sfr),
  [`"bouygues"`](https://www.programme-television.org/?bouquet=bouygues),
  [`"alice"`](https://www.programme-television.org/?bouquet=alice),
  [`"darty"`](https://www.programme-television.org/?bouquet=darty),
  [`"bis-televisions"`](
                  https://www.programme-television.org/?bouquet=bis-televisions)
  ou [`"mycanal"`](https://www.programme-television.org/?bouquet=mycanal)) ;
- `"channels"` : la liste des chaines affichées (voir en-dessous pour connaitre
  les codes) ;
- `"color"` (optionnel - valeur par défaut : `"#9e9e9e"`) : la couleur de fond
  du cadre (au format hexadécimale, régulier RGB ou avec des mots-clefs
  prédéfinis).

Voici le tableau des codes des chaines de la TNT :

```JSON
["tf1", "france-2", "france-3", "canal", "france-5", "m6", "arte", "c8", "w9",
 "tmc", "nt1", "nrj12", "lcp-public-senat", "france-4", "bfm-tv", "cnews",
 "cstar", "gulli", "france-o", "hd1", "l-equipe", "6ter", "numero-23",
 "rmc-decouverte", "cherie-25", "lci", "franceinfo"]
```

<!--
console.log(Array.from(document.querySelectorAll("#prime-broadcasts .logo a"))
                    .map((a) => {
    return `- _${a.querySelector("em").textContent.slice(10)}_ : ` +
           `\`"${a.getAttribute("href").slice(12)}"\` ;`;
}).join("\n"));
-->

Et la liste ci-dessous donne les codes pour toutes les chaines :

- _13eme RUE_ : `"13e-rue"` ;
- _6ter_ : `"6ter"` ;
- _AB 1_ : `"ab-1"` ;
- _Action_ : `"action"` ;
- _Altice Studio_ : `"altice-studio"` ;
- _Animaux_ : `"animaux"` ;
- _Arte_ : `"arte"` ;
- _Automoto_ : `"ab-moteurs"` ;
- _beIN SPORTS 1_ : `"bein-sports-1"` ;
- _beIN SPORTS 2_ : `"bein-sports-2"` ;
- _beIN SPORTS 3_ : `"bein-sports-3"` ;
- _BET_ : `"bet"` ;
- _BFM Business_ : `"bfm-business"` ;
- _BFMTV_ : `"bfm-tv"` ;
- _C8_ : `"c8"` ;
- _Canal+_ : `"canal"` ;
- _Canal+ Cinéma_ : `"canal-cinema"` ;
- _Canal+ Décalé_ : `"canal-decale"` ;
- _Canal J_ : `"canal-j"` ;
- _Canal+ KIDS_ : `"canal-family"` ;
- _Canal+ Séries_ : `"canal-series"` ;
- _Canal+ Sport_ : `"canal-sport"` ;
- _Cartoon Network_ : `"cartoon-network"` ;
- _Chasse et pêche_ : `"chasse-et-peche"` ;
- _Chérie 25_ : `"cherie-25"` ;
- _Ciné+ Classic_ : `"cine-classic"` ;
- _Ciné+ Club_ : `"cine-club"` ;
- _Ciné+ Emotion_ : `"cine-emotion"` ;
- _Ciné+ Famiz_ : `"cine-famiz"` ;
- _Ciné+ Frisson_ : `"cine-frisson"` ;
- _Ciné+ Premier_ : `"cine-premier"` ;
- _CNEWS_ : `"cnews"` ;
- _Comédie+_ : `"comedie"` ;
- _Crime District_ : `"crime-district"` ;
- _CSTAR_ : `"cstar"` ;
- _Demain TV_ : `"demain-tv"` ;
- _Discovery Channel_ : `"discovery-channel"` ;
- _Discovery Investigation_ : `"discovery-investigation"` ;
- _Discovery Science_ : `"discovery-science"` ;
- _Disney Channel_ : `"disney-channel"` ;
- _Disney Junior_ : `"disney-junior"` ;
- _E !_ : `"e-entertainment"` ;
- _Equidia_ : `"equidia-live"` ;
- _Eurosport 1_ : `"eurosport"` ;
- _Eurosport 2_ : `"eurosport-2"` ;
- _France 24_ : `"france-24"` ;
- _France 2_ : `"france-2"` ;
- _France 3_ : `"france-3"` ;
- _France 4_ : `"france-4"` ;
- _France 5_ : `"france-5"` ;
- _Franceinfo_ : `"franceinfo"` ;
- _Game One_ : `"game-one"` ;
- _Golf Channel_ : `"golf-channel"` ;
- _Gulli_ : `"gulli"` ;
- _Histoire TV_ : `"histoire"` ;
- _IDF1_ : `"idf1"` ;
- _J-One_ : `"j-one"` ;
- _KTO_ : `"kto"` ;
- _La Chaîne parlementaire_ : `"lcp-public-senat"` ;
- _LCI - La Chaîne Info_ : `"lci"` ;
- _L'Equipe_ : `"lequipe"` ;
- _M6_ : `"m6"` ;
- _Nickelodéon_ : `"nickelodeon"` ;
- _Non Stop People HD_ : `"non-stop-people"` ;
- _Novelas TV_ : `"novelas-tv"` ;
- _NRJ 12_ : `"nrj12"` ;
- _OCS Choc_ : `"ocs-choc"` ;
- _OCS City_ : `"ocs-city"` ;
- _OCS Géants_ : `"ocs-geants"` ;
- _OCS Max_ : `"ocs-max"` ;
- _RMC Découverte_ : `"rmc-decouverte"` ;
- _RMC Sport 1 UHD_ : `"rmc-sport-1-uhd"` ;
- _RMC Story_ : `"rmc-story"` ;
- _Science & Vie TV_ : `"sciences-vie-tv"` ;
- _Seasons_ : `"seasons"` ;
- _serieclub_ : `"serieclub"` ;
- _Syfy_ : `"sy-fy"` ;
- _TCM Cinéma_ : `"tcm-cinema"` ;
- _TéléToon+_ : `"teletoon"` ;
- _Téva_ : `"teva"` ;
- _TF1 Séries Films_ : `"tf1-serie-films"` ;
- _TF1_ : `"tf1"` ;
- _TFX_ : `"tfx"` ;
- _TIJI_ : `"tiji"` ;
- _TMC_ : `"tmc"` ;
- _Toonami_ : `"toonami"` ;
- _Toute l'histoire_ : `"toute-lhistoire"` ;
- _TV5MONDE_ : `"tv5-monde"` ;
- _Ushuaïa TV_ : `"ushuaia-tv"` ;
- _Vice TV_ : `"vice-tv"` ;
- _W9_ : `"w9"` ;
- _Warner TV_ : `"warner-tv"`.

## Exemple

Ce widget affiche le programme télévisé de toutes les chaines de la TNT sauf
Canal+ et les chaines d'information (BFMTV, CNEWS, LCI - La Chaîne Info et
Franceinfo).

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/tv/tv.js"
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/tv/tele7jours/tele7jours.js",
        "config": {
            "channels": [
                "tf1", "france-2", "france-3", "france-5", "m6", "arte", "c8",
                "w9", "tmc", "nt1", "nrj12", "lcp-public-senat", "france-4",
                "cstar", "gulli", "france-o", "hd1", "l-equipe", "6ter",
                "numero-23", "rmc-decouverte", "cherie-25"
            ]
        }
    }]
}
```
