# Scraper _cinema/pathe_

> Mots-clés :
> [_gout_](https://github.com/search?q=_gout_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-scraper_](https://github.com/search?q=_gout-scraper_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-scraper-cinema-pathe_](https://github.com/search?q=_gout-scraper-cinema-pathe_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-module-cinema_](https://github.com/search?q=_gout-module-cinema_+language%3AMarkdown&type=Code&l=Markdown).

Ce scraper retourne les séances du jour d'un cinéma
[**Pathé**](https://www.pathe.fr/).

Il peut être utilisé avec le module [_cinema_](../../../module/cinema#readme).

## Options

Les options sont dans un objet
[YAML](https://yaml.org/ "YAML Ain't Markup Language") avec les propriétés
suivantes :

<!-- markdownlint-disable no-inline-html-->
<table>
  <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>cinema</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le code du cinéma où récupérer les séances. La liste des codes est
        disponible en dessous.
      </p>
      <p>
        Exemple : <code>cinema-pathe-plan-de-campagne</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>tags</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Les filtres sur les étiquettes avec les propriétés <code>includes</code>
        et <code>excludes</code> ayant chacune une liste d'étiquettes :
        <code>3d</code>, <code>4dx</code>, <code>atmos</code>,
        <code>cinekids</code>, <code>duo</code>, <code>imax</code>,
        <code>"pathe+"</code> et <code>pmr</code>. Par défaut, aucun filtre
        n'est appliqué.
      </p>
      <p>
        Exemple :
      </p>
      <pre><code>tags:
  includes: [imax]
  excludes: [3d]</code></pre>
    </td>
  </tr>
  <tr>
    <td><code>versions</code></td>
    <td><code>string[]</code></td>
    <td>
      <p>
        La liste des versions souhaitées (<code>vf</code>, <code>vost</code>,
        <code>vo</code> et <code>vfst</code>). Par défaut toutes les versions
        sont retournées.
      </p>
      <p>
        Exemple : <code>[vf]</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>complements</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Des propriétés qui seront ajoutées dans les éléments retournés. Par
        défaut aucune propriété n'est ajoutée. Pour plus de détails, voir le
        scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/complements#readme"><em>tools/complements</em></a>.
      </p>
      <p>
        Exemple : <code>icon: https://example.com/foo/bar.svg</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>filter</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le filtre qui sera appliqué sur les éléments retournés. Par défaut aucun
        filtre n'est appliqué. Pour plus de détails, voir le scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/filter#readme"><em>tools/filter</em></a>.
      </p>
      <p>
        Exemple : <code>"title != 'foo'"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>transforms</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Les transformations qui seront appliquées sur les éléments retournés.
        Par défaut aucune transformation n'est appliqué. Pour plus de détails,
        voir le scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/transforms#readme"><em>tools/transforms</em></a>.
      </p>
      <p>
        Exemple : <code>title: "title.replace('®', '')"</code>
      </p>
    </td>
  </tr>
</table>

## Liste des cinémas

Voici les codes des cinémas Pathé :

<!--
const response = await fetch("https://www.pathe.fr/api/cinemas?language=fr");
const json = await response.json();
console.log(json.map((c) => `- ${c.name} : \`${c.slug}\``).sort().join("\n"));
-->

- Ciné Cap Vert : `cinema-cine-cap-vert`
- Ciné Capitole : `cinema-cine-capitole`
- Ciné Jaude : `cinema-cine-jaude`
- Gaumont Disney Village : `cinema-gaumont-disney-village`
- La Géode : `cinema-la-geode`
- Le Cézanne : `cinema-le-cezanne`
- Le Mazarin : `cinema-le-mazarin`
- Le Renoir : `cinema-le-renoir`
- Les 3 Palmes : `cinema-les-3-palmes`
- Les 7 Batignolles : `cinema-les-7-batignolles`
- Multiplexe Liberté : `cinema-multiplexe-liberte`
- Pathé Alésia : `cinema-pathe-alesia`
- Pathé Amiens : `cinema-pathe-amiens`
- Pathé Angers : `cinema-pathe-angers`
- Pathé Annecy : `cinema-pathe-annecy`
- Pathé Aquaboulevard : `cinema-pathe-aquaboulevard`
- Pathé Archamps : `cinema-pathe-archamps`
- Pathé Atlantis : `cinema-pathe-atlantis`
- Pathé Aubière : `cinema-pathe-aubiere`
- Pathé Aéroville : `cinema-pathe-aeroville`
- Pathé BNP Paribas : `cinema-pathe-bnp-paribas`
- Pathé Beaugrenelle : `cinema-pathe-beaugrenelle`
- Pathé Belle Épine : `cinema-pathe-belle-epine`
- Pathé Bellecour : `cinema-pathe-bellecour`
- Pathé Boulogne : `cinema-pathe-boulogne`
- Pathé Brumath : `cinema-pathe-brumath`
- Pathé Cap Sud : `cinema-pathe-cap-sud`
- Pathé Capucins : `cinema-pathe-capucins`
- Pathé Carré Sénart : `cinema-pathe-carre-senart`
- Pathé Carré de Soie : `cinema-pathe-carre-de-soie`
- Pathé Chambéry : `cinema-pathe-chambery`
- Pathé Cité Europe : `cinema-pathe-cite-europe`
- Pathé Comédie : `cinema-pathe-comedie`
- Pathé Conflans : `cinema-pathe-conflans`
- Pathé Convention : `cinema-pathe-convention`
- Pathé Dammarie : `cinema-pathe-dammarie`
- Pathé Dijon : `cinema-pathe-dijon`
- Pathé Docks 76 : `cinema-pathe-docks-76`
- Pathé Docks Vauban : `cinema-pathe-docks-vauban`
- Pathé Échirolles : `cinema-pathe-echirolles`
- Pathé Évreux : `cinema-pathe-evreux`
- Pathé Gare du Sud : `cinema-pathe-gare-du-sud`
- Pathé Grand-Quevilly : `cinema-pathe-grand-quevilly`
- Pathé Grenoble : `cinema-pathe-grenoble`
- Pathé La Joliette : `cinema-pathe-la-joliette`
- Pathé La Valette : `cinema-pathe-la-valette`
- Pathé La Villette : `cinema-pathe-la-villette`
- Pathé Labège : `cinema-pathe-labege`
- Pathé Le Mans : `cinema-pathe-le-mans`
- Pathé Les Fauvettes : `cinema-pathe-les-fauvettes`
- Pathé Les Rives de l'Orne : `cinema-pathe-les-rives-de-l-orne`
- Pathé Levallois : `cinema-pathe-levallois`
- Pathé Lingostière : `cinema-pathe-lingostiere`
- Pathé Liévin : `cinema-pathe-lievin`
- Pathé Madeleine : `cinema-pathe-madeleine`
- Pathé Massy : `cinema-pathe-massy`
- Pathé Masséna : `cinema-pathe-massena`
- Pathé Montataire : `cinema-pathe-montataire`
- Pathé Montparnos : `cinema-pathe-montparnos`
- Pathé Mâcon : `cinema-pathe-macon`
- Pathé Nantes : `cinema-pathe-nantes`
- Pathé Odysseum : `cinema-pathe-odysseum`
- Pathé Orléans : `cinema-pathe-orleans`
- Pathé Palace : `cinema-pathe-palace`
- Pathé Parnasse : `cinema-pathe-parnasse`
- Pathé Plan de Campagne : `cinema-pathe-plan-de-campagne`
- Pathé Quai d'Ivry : `cinema-pathe-quai-d-ivry`
- Pathé Rennes : `cinema-pathe-rennes`
- Pathé Saint-Denis : `cinema-pathe-saint-denis`
- Pathé Saran : `cinema-pathe-saran`
- Pathé Thillois : `cinema-pathe-thillois`
- Pathé Toulon : `cinema-pathe-toulon`
- Pathé Tours : `cinema-pathe-tours`
- Pathé Vaise : `cinema-pathe-vaise`
- Pathé Valence : `cinema-pathe-valence`
- Pathé Valenciennes : `cinema-pathe-valenciennes`
- Pathé Wepler : `cinema-pathe-wepler`
- Pathé Wilson : `cinema-pathe-wilson`

## Exemple

Ce widget affiche les séances en français sauf celles en 3D et 4DX dans une
salle avec un accès pour les personnes à mobilité réduite (PMR) dans le cinéma
[Pathé Plan de Campagne](https://www.pathe.fr/cinemas/cinema-pathe-plan-de-campagne).

```html
<script type="application/yaml">
  module:
    url: https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/cinema/cinema.js
    scrapers:
      - url: https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/cinema/pathe/pathe.js
        options:
          cinema: cinema-pathe-plan-de-campagne
          versions: [vf, vfst]
          tags:
            includes: [pmr]
            excludes: [3d, 4dx]
</script>
```
