# Module _openweathermap_

> Mots-clés : gout, gout-module, gout-module-openweathermap.

Ce module affiche la météo d'une ville. Les prévisions sont récupérées du
service [**OpenWeatherMap**](https://openweathermap.org/).

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
    <td><code>appid</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        La clé de l'API pour le service d'OpenWeatherMap. Pour obtenir une clé,
        il faut vous inscrire sur le
        <a href="https://home.openweathermap.org/users/sign_up">site Internet du
        service</a>.
      </p>
      <p>
        Exemples : <code>"123456789abcdef"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>city</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le nom normalisé de ville pour OpenWeatherMap, suivit éventuellement du
        code du pays (séparé par une virgule).
      </p>
      <p>
        Exemples : <code>"Aix-en-Provence,FR"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>color</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        La
        <a href="https://developer.mozilla.org/CSS/color_value">couleur</a> de
        fond du cadre. Par défaut la couleur bleue (<code>"#03a9f4"</code>) est
        utilisée.
      </p>
      <p>
        Exemples : <code>"#673ab7"</code>, <code>"chocolate"</code>
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
        propriété, les données sont mises à jour toutes les heures.
      </p>
      <p>
        Exemple : <code>"@daily"</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>max</code></td>
    <td><code>number</code></td>
    <td>
      <p>
        Le nombre maximum d'éléments (météo du jour et prévisions) affichés dans
        le module. Par défaut, seule la météo du jour est affichée.
      </p>
      <p>
        Exemple : <code>3</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>title</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le nom de la ville affiché dans le widget. Par défaut, c'est le nom de
        la propriété <code>"city"</code> qui est utilisé.
      </p>
      <p>
        Exemples : <code>"Aix"</code>
      </p>
    </td>
  </tr>
</table>

## Scraper

Ce module n'utilise pas de scraper.

## Exemple

Ce widget affiche la météo d'Aix-en-Provence.

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/module/openweathermap/openweathermap.js"
    options:
      appid: "123456789abcdef... (une clé de ce style)"
      city: "Aix-en-Provence,FR"
      title: "Aix"
</script>
```
