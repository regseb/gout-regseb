# Scraper _list/jenkins_

> Mots-clés :
> [_gout_](https://github.com/search?q=_gout_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-scraper_](https://github.com/search?q=_gout-scraper_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-scraper-list-jenkins_](https://github.com/search?q=_gout-scraper-list-jenkins_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-module-list_](https://github.com/search?q=_gout-module-list_+language%3AMarkdown&type=Code&l=Markdown).

Ce scraper récupère les jobs et les modules **Jenkins** en erreur.

Il peut être utilisé avec le module
[_list_](https://github.com/regseb/gout/tree/HEAD/src/module/list#readme).

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
    <td><code>"jobs"</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Les filtres des jobs à afficher. Par défaut tous les jobs sont affichés.
      </p>
      <p>Exemple : <code>{ "AsterixDB": null }</code></p>
    </td>
  </tr>
  <tr>
    <td><code>"url"</code></td>
    <td><code>string</code></td>
    <td>
      <p>L'URL du serveur Jenkins.</p>
      <p>Exemple : <code>"https://builds.apache.org/"</code></p>
    </td>
  </tr>
  <tr>
    <td><code>"complements"</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Des propriétés qui seront ajoutées dans les éléments retournés. Par
        défaut aucune propriété n'est ajoutée. Pour plus de détails, voir le
        scraper
        <a href="https://github.com/regseb/gout/tree/HEAD/src/scraper/tools/complements#readme"><em>tools/complements</em></a>.
      </p>
      <p>
        Exemple : <code>"target": "_top"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>"filter"</code></td>
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

## Exemple

Ce widget affiche les modules Maven Core et Maven Artifact du job maven-3.x,
ainsi que le job Tomcat-7.x de la fondation
[Apache](https://builds.apache.org/).

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/list/list.js"
    options:
      cron: "0 */4 * * *"
      color: "#9e9e9e"
      empty:
        link: "https://builds.apache.org"
        title: "(Aucun job en erreur)"
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/list/jenkins/jenkins.js"
        options:
          url: "https://builds.apache.org"
          jobs:
            "maven-3.x":
              - "org.apache.maven:maven-core"
              - "org.apache.maven:maven-artifact"
            "Tomcat-7.x": null
</script>
```
