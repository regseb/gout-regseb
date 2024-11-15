# Scraper _image/peppercarrot_

> Mots-clés : gout, gout-scraper, gout-scraper-image-peppercarrot,
> gout-module-image.

Ce scraper récupère la liste des derniers épisodes publiés sur le site
[**Pepper&Carrot**](https://www.peppercarrot.com/).

Il peut être utilisé avec le module
[_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme).

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
    <td><code>lang</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le code de la langue. La liste est disponible ci-dessous. Par défaut le
        français est utilisé.
      </p>
      <p>
        Exemple : <code>"en"</code>
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
        Exemple : <code>target: "_top"</code>
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

Les codes des languages disponibles sont :

<!--
// https://www.peppercarrot.com/
console.log(Array.from(document.querySelectorAll(".langmenu a"))
                 .map((a) => {
    return `- ${a.title.slice(0, a.title.indexOf(" ("))} : ` +
           `\`"${a.href.slice(29, -1)}"\``;
}).join("\n"));
-->

- <span dir="rtl">العربية</span> : `"ar"` ;
- Asturianu : `"at"`
- বাংলা : `"bn"`
- Brezhoneg : `"br"`
- Català : `"ca"`
- 中文 : `"cn"`
- Čeština : `"cs"`
- Dansk : `"da"`
- Deutsch : `"de"`
- Ελληνικά : `"el"`
- English : `"en"`
- Esperanto : `"eo"`
- Español : `"es"`
- <span dir="rtl">فارسی</span> : `"fa"` ;
- Suomi : `"fi"`
- Français : `"fr"`
- Occitan gascon : `"ga"`
- Globasa : `"gb"`
- Gàidhlig : `"gd"`
- Galego : `"gl"`
- Galo : `"go"`
- <span dir="rtl">עברית</span> : `"he"` ;
- हिन्दी : `"hi"`
- Magyar : `"hu"`
- Bahasa Indonesia : `"id"`
- Interlingue : `"ie"`
- Ido : `"io"`
- Italiano : `"it"`
- 日本語 : `"ja"`
- la .lojban. : `"jb"`
- Lojban : `"jz"`
- 韓國語 : `"kh"`
- 한국어 : `"kr"`
- Kotava : `"kt"`
- Kernewek : `"kw"`
- Latina : `"la"`
- Láadan : `"ld"`
- Lingua Franca Nova : `"lf"`
- Español Latino : `"ls"`
- Lietuvių : `"lt"`
- മലയാളം : `"ml"`
- Bahasa Melayu : `"ms"`
- Español mexicano : `"mx"`
- Nederlands : `"nl"`
- Normaund : `"nm"`
- Norsk : `"nn"`
- Norsk : `"no"`
- Plattdüütsch : `"ns"`
- Occitan lengadocian : `"oc"`
- Filipino : `"ph"`
- Polski : `"pl"`
- Português : `"pt"`
- Kréol Rényoné : `"rc"`
- Română : `"ro"`
- Русский : `"ru"`
- Sambahsa : `"sb"`
- සිංහල : `"si"`
- Slovenčina : `"sk"`
- Slovenščina : `"sl"`
- sitelen-pona : `"sp"`
- Српски : `"sr"`
- basa Sunda : `"su"`
- Svenska : `"sv"`
- Ślůnski : `"sz"`
- தமிழ் : `"ta"`
- toki pona : `"tp"`
- Türkçe : `"tr"`
- Українська : `"uk"`
- Tiếng Việt : `"vi"`

## Exemple

Ce widget affiche le dernier dessin.

```html
<script type="application/yaml">
  module:
    url: "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/image/image.js"
    options:
      cron: "@daily"
      max: 1
    scrapers:
      - url: "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/peppercarrot/peppercarrot.js"
</script>
```
