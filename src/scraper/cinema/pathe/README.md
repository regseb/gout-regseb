# Scraper _cinema/pathe_

> Mots-clés : gout, gout-scraper, gout-scraper-cinema-pathe, gout-module-cinema.

Ce scraper retourne les séances du jour d'un cinéma
[**Pathé**](https://www.pathe.fr/).

Il peut être utilisé avec le module [_cinema_](../../../module/cinema#readme).

## Options

Les options sont dans un objet
[YAML](https://yaml.org/ "YAML Ain't Markup Language") avec les propriétés
suivantes :

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
        Exemple : <code>"cinema-pathe-plan-de-campagne"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>tags</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Les filtres sur les étiquettes avec les propriétés
        <code>"includes"</code> et <code>"excludes"</code> ayant chacune une
        liste d'étiquettes : <code>"3d"</code>, <code>"4dx"</code>,
        <code>"atmos"</code>, <code>"cinekids"</code>, <code>"duo"</code>,
        <code>"imax"</code>, <code>"pathe+"</code> et <code>"pmr"</code>. Par
        défaut, aucun filtre n'est appliqué.
      </p>
      <p>
        Exemple : <pre><code>
tags:
  includes: ["imax"]
  excludes": ["3d"]
        </code></pre>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>versions</code></td>
    <td><code>string[]</code></td>
    <td>
      <p>
        La liste des versions souhaitées (<code>"vf"</code>,
        <code>"vost"</code>, <code>"vo"</code> et <code>"vfst"</code>).
        Par défaut toutes les versions sont retournées.
      </p>
      <p>
        Exemple : <code>["vf"]</code>
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
        Exemple : <code>icon: "https://example.com/foo/bar.svg"</code>
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
</table>

## Liste des cinémas

Voici les codes des cinémas Pathé :

<!--
const response = await fetch("https://www.pathe.fr/api/cinemas?language=fr");
const json = await response.json();
console.log(json.map((c) => `- ${c.name} : \`"${c.slug}"\``).join("\n"));
-->

- Pathé Angers : `"cinema-pathe-angers"`
- Pathé Grenoble : `"cinema-pathe-grenoble"`
- Pathé Vaise : `"cinema-pathe-vaise"`
- Pathé Rennes : `"cinema-pathe-rennes"`
- Pathé Carré de Soie : `"cinema-pathe-carre-de-soie"`
- Pathé Docks 76 : `"cinema-pathe-docks-76"`
- Pathé Docks Vauban : `"cinema-pathe-docks-vauban"`
- Pathé Évreux : `"cinema-pathe-evreux"`
- Pathé Dammarie : `"cinema-pathe-dammarie"`
- Pathé Saran : `"cinema-pathe-saran"`
- Pathé Chambéry : `"cinema-pathe-chambery"`
- Pathé Archamps : `"cinema-pathe-archamps"`
- Pathé Cap Sud : `"cinema-pathe-cap-sud"`
- Pathé Cité Europe : `"cinema-pathe-cite-europe"`
- Pathé Conflans : `"cinema-pathe-conflans"`
- Pathé Échirolles : `"cinema-pathe-echirolles"`
- Pathé Liévin : `"cinema-pathe-lievin"`
- Pathé Bellecour : `"cinema-pathe-bellecour"`
- Pathé Madeleine : `"cinema-pathe-madeleine"`
- Pathé Plan de Campagne : `"cinema-pathe-plan-de-campagne"`
- Pathé Montataire : `"cinema-pathe-montataire"`
- Pathé Odysseum : `"cinema-pathe-odysseum"`
- Pathé Comédie : `"cinema-pathe-comedie"`
- Pathé Nantes : `"cinema-pathe-nantes"`
- Pathé Atlantis : `"cinema-pathe-atlantis"`
- Pathé Lingostière : `"cinema-pathe-lingostiere"`
- Pathé Masséna : `"cinema-pathe-massena"`
- Pathé Alésia : `"cinema-pathe-alesia"`
- Pathé Aquaboulevard : `"cinema-pathe-aquaboulevard"`
- Pathé Convention : `"cinema-pathe-convention"`
- Pathé Les Fauvettes : `"cinema-pathe-les-fauvettes"`
- Gaumont Disney Village : `"cinema-gaumont-disney-village"`
- Pathé Saint-Denis : `"cinema-pathe-saint-denis"`
- Pathé Belle Épine : `"cinema-pathe-belle-epine"`
- Pathé Boulogne : `"cinema-pathe-boulogne"`
- Pathé Quai d'Ivry : `"cinema-pathe-quai-d-ivry"`
- Pathé Thillois : `"cinema-pathe-thillois"`
- Pathé Grand-Quevilly : `"cinema-pathe-grand-quevilly"`
- Pathé Brumath : `"cinema-pathe-brumath"`
- Pathé Labège : `"cinema-pathe-labege"`
- Pathé Valence : `"cinema-pathe-valence"`
- Pathé Valenciennes : `"cinema-pathe-valenciennes"`
- Pathé Carré Sénart : `"cinema-pathe-carre-senart"`
- Pathé Orléans : `"cinema-pathe-orleans"`
- Pathé Wilson : `"cinema-pathe-wilson"`
- Pathé Toulon : `"cinema-pathe-toulon"`
- Pathé Amiens : `"cinema-pathe-amiens"`
- Pathé Les Rives de l'Orne : `"cinema-pathe-les-rives-de-l-orne"`
- Pathé Annecy : `"cinema-pathe-annecy"`
- Pathé Beaugrenelle : `"cinema-pathe-beaugrenelle"`
- Pathé Parnasse : `"cinema-pathe-parnasse"`
- Pathé Levallois : `"cinema-pathe-levallois"`
- Pathé Le Mans : `"cinema-pathe-le-mans"`
- Pathé Wepler : `"cinema-pathe-wepler"`
- Pathé La Villette : `"cinema-pathe-la-villette"`
- Pathé La Valette : `"cinema-pathe-la-valette"`
- Pathé Aéroville : `"cinema-pathe-aeroville"`
- Pathé Massy : `"cinema-pathe-massy"`
- Pathé Gare du Sud : `"cinema-pathe-gare-du-sud"`
- Les 3 Palmes : `"cinema-les-3-palmes"`
- Pathé La Joliette : `"cinema-pathe-la-joliette"`
- Ciné Cap Vert : `"cinema-cine-cap-vert"`
- Pathé Aubière : `"cinema-pathe-aubiere"`
- Pathé Mâcon : `"cinema-pathe-macon"`
- Multiplexe Liberté : `"cinema-multiplexe-liberte"`
- Pathé Tours : `"cinema-pathe-tours"`
- Pathé Montparnos : `"cinema-pathe-montparnos"`
- Pathé Dijon : `"cinema-pathe-dijon"`
- Les 7 Batignolles : `"cinema-les-7-batignolles"`
- Pathé Capucins : `"cinema-pathe-capucins"`
- Ciné Jaude : `"cinema-cine-jaude"`
- Ciné Capitole : `"cinema-cine-capitole"`
- Le Miramar : `"cinema-le-miramar"`
- Pathé Palace : `"cinema-pathe-palace"`

## Exemple

Ce widget affiche les séances en français sauf celles en 3D et 4DX dans une
salle avec un accès pour les personnes à mobilité réduite (PMR) dans le cinéma
[Pathé Plan de Campagne](https://www.pathe.fr/cinemas/cinema-pathe-plan-de-campagne).

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/cinema/cinema.js"
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/cinema/pathe/pathe.js"
        options:
          cinema: "cinema-pathe-plan-de-campagne"
          versions: ["vf", "vfst"]
          tags:
            includes": ["pmr"]
            excludes": ["3d", "4dx"]
</script>
```
