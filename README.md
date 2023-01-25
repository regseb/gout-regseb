# Gout-regseb

[![build][img-build]][link-build]
[![coverage][img-coverage]][link-coverage]

> Composants pour Gout de regseb.

## Description

Ce dépôt regroupe des composants (modules, scrapers et widgets) pour
l'agrégateur d'Internet **[Gout](https://github.com/regseb/gout)**.

### Modules

- [_cinema_](src/module/cinema#readme) : Afficher les séances de films dans des
  cinémas.
- [_openweathermap_](src/module/openweathermap#readme) : Afficher la météo d'une
  ville.
- [_tv_](src/module/tv#readme) : Donner le programme télévisé.

### Scrapers

- _cinema_ :
  - [_pathe_](src/scraper/cinema/pathe#readme) : Retourner les séances du jour
    d'un cinéma Pathé.
- _image_ :
  - [_commitstrip_](src/scraper/image/commitstrip#readme) : Récupérer la liste
    des derniers dessins publiés sur le site CommitStrip.
  - [_geekandpoke_](src/scraper/image/geekandpoke#readme) : Récupérer la liste
    des derniers dessins publiés sur le site GeekAndPoke.
  - [_loadingartist_](src/scraper/image/loadingartist#readme) : Récupérer la
    liste des derniers dessins publiés sur le site Loading Artist.
  - [_maliki_](src/scraper/image/maliki#readme) : Récupérer la liste des
    derniers dessins publiés sur le site Maliki.
  - [_peppercarrot_](src/scraper/image/peppercarrot#readme) : Récupérer la liste
    des derniers épisodes publiés sur le site Pepper&Carrot.
  - [_tumblr_](src/scraper/image/tumblr#readme) : Récupérer la liste des
    derniers dessins publiés sur un blog Tumblr.
  - [_urtikan_](src/scraper/image/urtikan#readme) : Récupérer la liste des
    derniers dessins publiés sur le site Urtikan.
  - [_valdallos_](src/scraper/image/valdallos#readme) : Récupérer les webcams du
    Val d'Allos.
  - [_xkcd_](src/scraper/image/xkcd#readme) : Récupérer la liste des derniers
    dessins publiés sur le site xkcd.
- _list_ :
  - [_dailymotion_](src/scraper/list/dailymotion#readme) : Récupérer la liste
    des dernières vidéos postées sur Dailymotion par un utilisateur.
  - [_dealabs_](src/scraper/list/dealabs#readme) : Récupérer la liste des
    derniers deals postés sur Dealabs selon des filtres.
  - [_isthereanydeal_](src/scraper/list/isthereanydeal#readme) : Récupérer les
    offres d'un jeu vidéo listées sur IsThereAnyDeal.
  - [_jenkins_](src/scraper/list/jenkins#readme) : Récupérer les jobs et les
    modules Jenkins en erreur.
  - [_radioline_](src/scraper/list/radioline#readme) : Récupérer la liste des
    derniers épisodes d'un podcast sur Radioline.
- _single_ :
  - [_articleauhasard_](src/scraper/single/articleauhasard#readme) : Donner un
    lien vers un article au hasard de Wikipédia.
- _tv_ :
  - [_tele2semaines_](src/scraper/single/tele2semaines#readme) : Donner le
    programme télévisé du soir par Télé 2 Semaines.
  - [_tele7jours_](src/scraper/single/tele7jours#readme) : Donner le programme
    télévisé du soir par Télé 7 Jours.

### Widgets

- [_lemonde_](src/widget/lemonde#readme) :
- [_linuxfr_](src/widget/linuxfr#readme) :
- [_radiofrance_](src/widget/radiofrance#readme) :

[img-build]:https://img.shields.io/github/actions/workflow/status/regseb/gout-regseb/ci.yml?branch=main&logo=github&logoColor=white
<!-- Attendre que le logo de Stryker soit accepté.
     https://github.com/simple-icons/simple-icons/pull/7388 -->
[img-coverage]:https://img.shields.io/endpoint?label=coverage&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fregseb%2Fgout-regseb%2Fmain

[link-build]:https://github.com/regseb/gout-regseb/actions/workflows/ci.yml?query=branch%3Amain
[link-coverage]:https://dashboard.stryker-mutator.io/reports/github.com/regseb/gout-regseb/main
