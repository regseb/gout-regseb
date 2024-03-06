# Scraper _tv/tele2semaines_

> Mots-clés : gout, gout-scraper, gout-regseb-scraper-tv-tele2semaines,
> gout-regseb-module-tv

Ce scraper donne le programme télévisé du soir par [**Télé 2
Semaines**](https://www.programme.tv/).

Il peut être utilisé avec le module :
[_tv_](https://github.com/regseb/gout-regseb/tree/HEAD/src/module/tv#readme).

## Options

Les options sont dans un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

<table>
  <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>"broadcast"</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le bouquet utilisé : <code>"programme-tnt"</code> (par défaut),
        <code>"free"</code>, <code>"sfr"</code>, <code>"canal"</code>,
        <code>"canal-plus"</code>, <code>"orange"</code> ou
        <code>"bouygues"</code>.
      </p>
      <p>
        Exemple : <code>"orange"</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>"channels"</code></td>
    <td><code>string[]</code></td>
    <td>
      <p>
        La liste des chaines remontées (par défaut toutes les chaines du bouquet
        sont affichées). Les codes de chaque chaine sont disponibles en dessous.
      </p>
      <p>
        Exemple : <code>["tf1", "france-2", "france-3"]</code>.
      </p>
    </td>
  </tr>
</table>

Les listes des chaines avec leur code :

<!--
console.log(Array.from(document.querySelectorAll(".channelHeading-logo"))
                 .map((a) => {
    return `- _${a.title}_ : ` +
           `\`"${a.href.slice(32, a.href.lastIndexOf("-"))}"\` ;`;
}).join("\n"));
-->

- _01TV_ : `"01tv"` ;
- _13eme RUE_ : `"13eme-rue"` ;
- _3Sat_ : `"3sat"` ;
- _6ter_ : `"6ter"` ;
- _AB 1_ : `"ab-1"` ;
- _Action_ : `"action"` ;
- _Africa 24_ : `"africa-24"` ;
- _A+ International France_ : `"aplus-international-france"` ;
- _Al Jazeera English_ : `"al-jazeera-english"` ;
- _Altice Studio_ : `"altice-studio"` ;
- _Animaux_ : `"animaux"` ;
- _Arte_ : `"arte"` ;
- _Automoto_ : `"automoto"` ;
- _BBC Entertainment_ : `"bbc-entertainment"` ;
- _BBC World News_ : `"bbc-world-news"` ;
- _BBlack_ : `"bblack"` ;
- _beIN SPORTS 1_ : `"bein-sports-1"` ;
- _beIN SPORTS 2_ : `"bein-sports-2"` ;
- _beIN SPORTS 3_ : `"bein-sports-3"` ;
- _beIN SPORTS MAX 10_ : `"bein-sports-max-10"` ;
- _beIN SPORTS MAX 4_ : `"bein-sports-max-4"` ;
- _beIN SPORTS MAX 5_ : `"bein-sports-max-5"` ;
- _beIN SPORTS MAX 6_ : `"bein-sports-max-6"` ;
- _beIN SPORTS MAX 7_ : `"bein-sports-max-7"` ;
- _beIN SPORTS MAX 8_ : `"bein-sports-max-8"` ;
- _beIN SPORTS MAX 9_ : `"bein-sports-max-9"` ;
- _BET_ : `"bet"` ;
- _BFM Business_ : `"bfm-business"` ;
- _BFM DICI Haute-Provence_ : `"bfm-dici-haute-provence"` ;
- _BFM Grand Littoral_ : `"bfm-grand-littoral"` ;
- _BFM Paris_ : `"bfm-paris"` ;
- _BFMTV_ : `"bfmtv"` ;
- _Bloomberg_ : `"bloomberg"` ;
- _Boing_ : `"boing"` ;
- _B.One_ : `"b-one"` ;
- _Boomerang_ : `"boomerang"` ;
- _C8_ : `"c8"` ;
- _Canal+_ : `"canalplus"` ;
- _Canal+ Cinéma_ : `"canalplus-cinema"` ;
- _Canal+ Décalé_ : `"canalplus-decale"` ;
- _Canal+ Docs_ : `"canalplus-docs"` ;
- _Canal+ Formula 1_ : `"canalplus-formula-1"` ;
- _Canal J_ : `"canal-j"` ;
- _Canal+ KIDS_ : `"canalplus-kids"` ;
- _Canal+ Moto GP_ : `"canalplus-moto-gp"` ;
- _Canal+ Premier League_ : `"canalplus-premier-league"` ;
- _Canal+ Séries_ : `"canalplus-series"` ;
- _Canal+ Sport_ : `"canalplus-sport"` ;
- _Canal+ Top 14_ : `"canalplus-top-14"` ;
- _Cartoon Network_ : `"cartoon-network"` ;
- _Chasse et pêche_ : `"chasse-et-peche"` ;
- _Chérie 25_ : `"cherie-25"` ;
- _Ciné+ Classic_ : `"cineplus-classic"` ;
- _Ciné+ Club_ : `"cineplus-club"` ;
- _Ciné+ Emotion_ : `"cineplus-emotion"` ;
- _Ciné+ Famiz_ : `"cineplus-famiz"` ;
- _Ciné+ Frisson_ : `"cineplus-frisson"` ;
- _Ciné+ Premier_ : `"cineplus-premier"` ;
- _Clique TV_ : `"clique-tv"` ;
- _CNEWS_ : `"cnews"` ;
- _CNN_ : `"cnn"` ;
- _Comédie+_ : `"comedieplus"` ;
- _Comedy Central_ : `"comedy-central"` ;
- _Crime District_ : `"crime-district"` ;
- _CSTAR_ : `"cstar"` ;
- _CSTAR Hits France_ : `"cstar-hits-france"` ;
- _Das Erste_ : `"das-erste"` ;
- _Demain TV_ : `"demain-tv"` ;
- _Discovery Channel_ : `"discovery-channel"` ;
- _Discovery Family_ : `"discovery-family"` ;
- _Discovery Investigation_ : `"discovery-investigation"` ;
- _Discovery Science_ : `"discovery-science"` ;
- _Disney Channel +1_ : `"disney-channel-plus1"` ;
- _Disney Channel_ : `"disney-channel"` ;
- _Disney+_ : `"disneyplus"` ;
- _Disney Junior_ : `"disney-junior"` ;
- _E !_ : `"e"` ;
- _Equidia_ : `"equidia"` ;
- _ES1_ : `"es1"` ;
- _Eurochannel_ : `"eurochannel"` ;
- _Eurosport 1_ : `"eurosport-1"` ;
- _Eurosport 2_ : `"eurosport-2"` ;
- _Fashion TV_ : `"fashion-tv"` ;
- _Foot+ 24/24_ : `"footplus-24-24"` ;
- _France 24_ : `"france-24"` ;
- _France 2_ : `"france-2"` ;
- _France 3 Alpes_ : `"france-3-alpes"` ;
- _France 3 Alsace_ : `"france-3-alsace"` ;
- _France 3 Aquitaine_ : `"france-3-aquitaine"` ;
- _France 3 Auvergne_ : `"france-3-auvergne"` ;
- _France 3 Basse-Normandie_ : `"france-3-basse-normandie"` ;
- _France 3 Bourgogne_ : `"france-3-bourgogne"` ;
- _France 3 Bretagne_ : `"france-3-bretagne"` ;
- _France 3 Centre-Val de Loire_ : `"france-3-centre-val-de-loire"` ;
- _France 3 Champagne-Ardennes_ : `"france-3-champagne-ardennes"` ;
- _France 3 Corse Via Stella_ : `"france-3-corse-via-stella"` ;
- _France 3 Côte d'Azur_ : `"france-3-cote-dazur"` ;
- _France 3_ : `"france-3"` ;
- _France 3 Franche-Comté_ : `"france-3-franche-comte"` ;
- _France 3 Haute-Normandie_ : `"france-3-haute-normandie"` ;
- _France 3 Languedoc-Roussillon_ : `"france-3-languedoc-roussillon"` ;
- _France 3 Limousin_ : `"france-3-limousin"` ;
- _France 3 Lorraine_ : `"france-3-lorraine"` ;
- _France 3 Midi-Pyrénées_ : `"france-3-midi-pyrenees"` ;
- _France 3 Nord Pas-de-Calais_ : `"france-3-nord-pas-de-calais"` ;
- _France 3 Paris Ile-de-France_ : `"france-3-paris-ile-de-france"` ;
- _France 3 Pays de la Loire_ : `"france-3-pays-de-la-loire"` ;
- _France 3 Picardie_ : `"france-3-picardie"` ;
- _France 3 Poitou-Charentes_ : `"france-3-poitou-charentes"` ;
- _France 3 Provence-Alpes_ : `"france-3-provence-alpes"` ;
- _France 3 Rhône-Alpes_ : `"france-3-rhone-alpes"` ;
- _France 4_ : `"france-4"` ;
- _France 5_ : `"france-5"` ;
- _Franceinfo_ : `"franceinfo"` ;
- _Game One +1_ : `"game-one-plus1"` ;
- _Game One_ : `"game-one"` ;
- _Ginx_ : `"ginx"` ;
- _Golf Channel_ : `"golf-channel"` ;
- _Golf+_ : `"golfplus"` ;
- _Gong_ : `"gong"` ;
- _Gong Max_ : `"gong-max"` ;
- _Gulli_ : `"gulli"` ;
- _Histoire TV_ : `"histoire-tv"` ;
- _I24news_ : `"i24news"` ;
- _Infosport+_ : `"infosportplus"` ;
- _J-One_ : `"j-one"` ;
- _KIKA_ : `"kika"` ;
- _KTO_ : `"kto"` ;
- _La Chaîne normande_ : `"la-chaine-normande"` ;
- _La Chaîne parlementaire_ : `"la-chaine-parlementaire"` ;
- _LCI - La Chaîne Info_ : `"lci-la-chaine-info"` ;
- _LCP 100%_ : `"lcp-100"` ;
- _L'Equipe_ : `"lequipe"` ;
- _Lucky Jack_ : `"lucky-jack"` ;
- _Luxe TV_ : `"luxe-tv"` ;
- _M6 Boutique_ : `"m6-boutique"` ;
- _M6_ : `"m6"` ;
- _M6 Music_ : `"m6-music"` ;
- _Mangas_ : `"mangas"` ;
- _Maritima TV_ : `"maritima-tv"` ;
- _MCM_ : `"mcm"` ;
- _MCM Top_ : `"mcm-top"` ;
- _MDR Fernsehen_ : `"mdr-fernsehen"` ;
- _Melody_ : `"melody"` ;
- _Men's UP_ : `"mens-up"` ;
- _Mezzo Live HD_ : `"mezzo-live-hd"` ;
- _Mezzo_ : `"mezzo"` ;
- _Mosaïk Cristal_ : `"mosaik-cristal"` ;
- _MTV Hits (France)_ : `"mtv-hits-france"` ;
- _MTV Hits_ : `"mtv-hits"` ;
- _MTV_ : `"mtv"` ;
- _Multisports 1_ : `"multisports-1"` ;
- _Multisports 2_ : `"multisports-2"` ;
- _Multisports 3_ : `"multisports-3"` ;
- _Multisports 4_ : `"multisports-4"` ;
- _Multisports 5_ : `"multisports-5"` ;
- _Multisports6_ : `"multisports6"` ;
- _Museum TV_ : `"museum-tv"` ;
- _MyZen.tv_ : `"myzen-tv"` ;
- _Nat Geo Wild_ : `"nat-geo-wild"` ;
- _National Geographic_ : `"national-geographic"` ;
- _Nautical Channel_ : `"nautical-channel"` ;
- _NDR FERNSEHEN_ : `"ndr-fernsehen"` ;
- _Nickelodéon +1_ : `"nickelodeon-plus1"` ;
- _Nickelodeon Junior_ : `"nickelodeon-junior"` ;
- _Nickelodéon_ : `"nickelodeon"` ;
- _Nickelodéon Teen_ : `"nickelodeon-teen"` ;
- _Non Stop People HD_ : `"non-stop-people-hd"` ;
- _Novelas TV_ : `"novelas-tv"` ;
- _NRJ 12_ : `"nrj-12"` ;
- _NRJ Hits_ : `"nrj-hits"` ;
- _OCS Choc_ : `"ocs-choc"` ;
- _OCS City_ : `"ocs-city"` ;
- _OCS Géants_ : `"ocs-geants"` ;
- _OCS Max_ : `"ocs-max"` ;
- _OLTV_ : `"oltv"` ;
- _Olympia TV_ : `"olympia-tv"` ;
- _One_ : `"one"` ;
- _Paramount Channel_ : `"paramount-channel"` ;
- _paramountfr1_ : `"paramountfr1"` ;
- _Paris Première_ : `"paris-premiere"` ;
- _PHOENIX_ : `"phoenix"` ;
- _Pink TV_ : `"pink-tv"` ;
- _Piwi+_ : `"piwiplus"` ;
- _Planète+ Aventure Expérience_ : `"planeteplus-aventure-experience"` ;
- _Planète+ Crime Investigation_ : `"planeteplus-crime-investigation"` ;
- _Planète+_ : `"planeteplus"` ;
- _Polar+_ : `"polarplus"` ;
- _Pro7_ : `"pro7"` ;
- _Public Sénat 2424_ : `"public-senat-2424"` ;
- _Rai Uno_ : `"rai-uno"` ;
- _RFM TV_ : `"rfm-tv"` ;
- _RMC Découverte_ : `"rmc-decouverte"` ;
- _RMC Sport 1_ : `"rmc-sport-1"` ;
- _RMC Sport 1 UHD_ : `"rmc-sport-1-uhd"` ;
- _RMC Sport 2_ : `"rmc-sport-2"` ;
- _RMC Sport Access 1_ : `"rmc-sport-access-1"` ;
- _RMC Sport Access 2_ : `"rmc-sport-access-2"` ;
- _RMC Sport Live 10_ : `"rmc-sport-live-10"` ;
- _RMC Sport Live 11_ : `"rmc-sport-live-11"` ;
- _RMC Sport Live 12_ : `"rmc-sport-live-12"` ;
- _RMC Sport Live 13_ : `"rmc-sport-live-13"` ;
- _RMC Sport Live 14_ : `"rmc-sport-live-14"` ;
- _RMC Sport Live 3_ : `"rmc-sport-live-3"` ;
- _RMC Sport Live 4_ : `"rmc-sport-live-4"` ;
- _RMC Sport Live 5_ : `"rmc-sport-live-5"` ;
- _RMC Sport Live 6_ : `"rmc-sport-live-6"` ;
- _RMC Sport Live 7_ : `"rmc-sport-live-7"` ;
- _RMC Sport Live 8_ : `"rmc-sport-live-8"` ;
- _RMC Sport Live 9_ : `"rmc-sport-live-9"` ;
- _RMC Story_ : `"rmc-story"` ;
- _RT France_ : `"rt-france"` ;
- _RTL 9_ : `"rtl-9"` ;
- _RTL Télévision_ : `"rtl-television"` ;
- _RTL ZWEI_ : `"rtl-zwei"` ;
- _RTPI_ : `"rtpi"` ;
- _SAT.1_ : `"sat-1"` ;
- _Science & Vie TV_ : `"science-vie-tv"` ;
- _Seasons_ : `"seasons"` ;
- _serieclub_ : `"serieclub"` ;
- _Sport en France_ : `"sport-en-france"` ;
- _Stingray Classica_ : `"stingray-classica"` ;
- _Stingray Djazz_ : `"stingray-djazz"` ;
- _Stingray Festival 4K_ : `"stingray-festival-4k"` ;
- _Stingray i-Concerts_ : `"stingray-i-concerts"` ;
- _Super RTL_ : `"super-rtl"` ;
- _SWR_ : `"swr"` ;
- _Syfy_ : `"syfy"` ;
- _Tagesschau24_ : `"tagesschau24"` ;
- _TCM Cinéma_ : `"tcm-cinema"` ;
- _TébéSud_ : `"tebesud"` ;
- _TéléToon+1_ : `"teletoonplus1"` ;
- _TéléToon+_ : `"teletoonplus"` ;
- _Téva_ : `"teva"` ;
- _TF1+1_ : `"tf1plus1"` ;
- _TF1 Séries Films_ : `"tf1-series-films"` ;
- _TF1_ : `"tf1"` ;
- _TFX_ : `"tfx"` ;
- _TIJI_ : `"tiji"` ;
- _TMC+1_ : `"tmcplus1"` ;
- _TMC_ : `"tmc"` ;
- _Toonami_ : `"toonami"` ;
- _Toute l'histoire_ : `"toute-lhistoire"` ;
- _Trace Africa_ : `"trace-africa"` ;
- _Trace Latina_ : `"trace-latina"` ;
- _TRACE Sport Stars_ : `"trace-sport-stars"` ;
- _Trace Tropical_ : `"trace-tropical"` ;
- _Trace Urban_ : `"trace-urban"` ;
- _Trek_ : `"trek"` ;
- _TV5MONDE_ : `"tv5monde"` ;
- _TvBreizh_ : `"tvbreizh"` ;
- _TVE_ : `"tve"` ;
- _TVPI_ : `"tvpi"` ;
- _Ultra Nature_ : `"ultra-nature"` ;
- _Ushuaïa TV_ : `"ushuaia-tv"` ;
- _VH1_ : `"vh1"` ;
- _Vice TV_ : `"vice-tv"` ;
- _VOX_ : `"vox"` ;
- _W9_ : `"w9"` ;
- _Warner TV_ : `"warner-tv"` ;
- _WDR_ : `"wdr"` ;
- _XXL_ : `"xxl"` ;
- _ZDF INFO_ : `"zdf-info"` ;
- _ZDF NEO_ : `"zdf-neo"` ;
- _ZDF_ : `"zdf"`.

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
    "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/tv/tele2semaines/tele2semaines.js",
    "options": {
      "channels": [
        "tf1", "france-2", "france-3", "france-5", "m6", "arte", "c8", "w9",
        "tmc", "tfx", "nrj-12", "la-chaine-parlementaire", "france-4", "cstar",
        "gulli", "tf1-series-films", "lequipe", "6ter", "rmc-story",
        "rmc-decouverte", "cherie-25"
      ]
    }
  }]
}
```
