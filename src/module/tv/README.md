# Module _tv_

> Mots-clés :
> [_gout_](https://github.com/search?q=_gout_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-module_](https://github.com/search?q=_gout-module_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-module-tv_](https://github.com/search?q=_gout-module-tv_+language%3AMarkdown&type=Code&l=Markdown).

Ce module donne le **programme télévisé** du soir.

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
    <td><code>color</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        La
        <a href="https://developer.mozilla.org/CSS/color_value">couleur</a> de
        fond du cadre. Par défaut la couleur grise (<code>"#9e9e9e"</code>) est
        utilisée.
      </p>
      <p>
        Exemples : <code>"#673ab7"</code>, <code>chocolate</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>cron</code></td>
    <td><code>string</code><br /><code>string[]</code></td>
    <td>
      <p>
        La ou les
        <a href="https://www.npmjs.com/package/cronnor#expression-cron">expressions
        <em>cron</em></a> indiquant la fréquence de mise à jour. Sans cette
        propriété, les données sont mises à jour une fois par jour.
      </p>
      <p>
        <!-- Ne pas vérifier les espaces dans les éléments d'emphase car cette
             règle s'applique dans les éléments <code> et il y a des
             faux-positifs avec les expressions cron.
             https://github.com/DavidAnson/markdownlint/issues/427 -->
        <!-- markdownlint-disable-next-line no-space-in-emphasis -->
        Exemple : <a href="https://crontab.guru/#0_18_*_*_*"><code>"0 18 * * *"</code></a>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>empty</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Les données affichées quand les scrapers n'ont retourné aucune donnée.
        Ce doit être un objet avec les mêmes propriétés qu'un élément retourné
        par les scrapers. Si cette propriété n'est pas renseignée, le module
        n'affiche rien.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>icon</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'URL de l'icône qui sera affichée en fond. Pour avoir une harmonie avec
        les autres widgets, il est conseillé d'utiliser une image carrée avec un
        dessin occupant toute l'image. Si le dessin n'est pas carré, il faut le
        centrer. Seule la couleur noire doit être utilisée et elle doit avoir
        une opacité de <code>0.2</code>. Par défaut, aucune icône n'est
        affichée.
      </p>
      <p>
        Exemple : <code>https://example.com/foo/bar.svg</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>max</code></td>
    <td><code>number</code></td>
    <td>
      <p>
        Le nombre maximum d'éléments affichés dans le module. Sans maximum,
        toutes les chaines retournées par les scrapers sont affichées.
      </p>
      <p>
        Exemple : <code>5</code>
      </p>
    </td>
  </tr>
</table>

## Scraper

> [!NOTE]
>
> Ce chapitre est utile principalement pour le développement de scrapers
> compatibles avec ce module.

Les scrapers associés à ce module doivent définir une méthode `extract()` qui
prend en paramètre un entier indiquant le nombre maximum de chaines à retourner.
La méthode doit retourner une
[promesse](https://developer.mozilla.org/Web/JavaScript/Reference/Global_Objects/Promise)
contenant un tableau dont chaque élément est un objet ayant les propriétés
suivantes :

<!-- markdownlint-disable no-inline-html-->
<table>
  <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>category</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le nom de la catégorie du programme qui sera affiché dans l'infobulle de
        son icône.
      </p>
      <p>
        Exemple : <code>"Films d'animation"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>channel</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le slug de la chaine qui sera utilisé pour afficher son icône.
      </p>
      <p>
        Exemple : <code>"tf1"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>date</code></td>
    <td><code>number</code></td>
    <td>
      <p>
        Le nombre de millisecondes depuis le 1<sup>er</sup> janvier 1970 à
        00:00:00 UTC (cf.
        <a href="https://developer.mozilla.org/JavaScript/Reference/Global_Objects/Date/getTime"><code>Date.prototype.getTime()</code></a>).
        Cette valeur est utilisée pour trier les éléments du plus récent au plus
        ancien. Par défaut, le nombre <code>0</code> est utilisé.
      </p>
      <p>
        Exemple : <code>900277200000</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>desc</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        La description de l'élément qui sera affichée dans l'infobulle. Par
        défaut, aucune infobulle n'est affichée.
      </p>
      <p>
        Exemple : <code>"Thème de l'émission : l'informatique."</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>guid</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Un identifiant de l'élément (<em>globally unique identifier</em>) qui
        sera utilisé pour savoir s'il faut mettre à jour un élément ou en
        insérer un nouveau. Par défaut, il est calculé à partir des autres
        propriétés.
      </p>
      <p>
        Exemple : <code>"example.com:12345"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>link</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le lien vers le film. Par défaut, il n'y a pas de lien (mais le titre du
        film est affiché).
      </p>
      <p>
        Exemple : <code>"https://example.com/foo/bar.html"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>mark</code></td>
    <td><code>number</code></td>
    <td>
      <p>
        Le nombre d'étoiles données au programme.
      </p>
      <p>
        Exemple : <code>2</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>name</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le nom de la chaine qui sera affiché dans l'infobulle de son icône.
      </p>
      <p>
        Exemple : <code>"TF1"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>target</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        L'emplacement où sera ouvert le lien (cf. l'attribut
        <a href="https://developer.mozilla.org/HTML/Element/a#attr-target"><code>target</code></a>
        des liens HTML). Par défaut, les liens s'ouvrent dans un nouvel onglet.
      </p>
      <p>
        Exemple : <code>"_top"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>title</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le titre du programme affiché dans la ligne.
      </p>
      <p>
        Exemple : <code>"Matrix"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le slug du type du programme qui sera utilisé pour afficher son icône.
      </p>
      <p>
        Exemple : <code>"sport"</code>
      </p>
    </td>
  </tr>
</table>

## Exemple

Ce widget affiche le programme télévisé de toutes les chaines de la TNT sauf les
chaines d'information (BFM TV, CNews, LCI et Franceinfo).

```html
<script type="application/yaml">
  module:
    url: https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/tv/tv.js
    scrapers:
      - url: https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/tv/tele7jours/tele7jours.js
        options:
          channels:
            - tf1
            - france-2
            - france-3
            - france-4
            - france-5
            - m6
            - arte
            - lcp
            - w9
            - tmc
            - tfx
            - gulli
            - lcp
            - bfm-tv
            - cnews
            - lci
            - franceinfo
            - cstar
            - t18
            - tf1-series-films
            - l-equipe
            - 6ter
            - rmc-story
            - rmc-decouverte
            - cherie-25
</script>
```
