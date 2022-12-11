# Scraper _image/peppercarrot_

> Mots-clés : gout, gout-scraper, gout-scraper-image-peppercarrot,
> gout-module-image.

Ce scraper recupère la liste des derniers épisodes publiés sur le site
[**Pepper&Carrot**](https://www.peppercarrot.com/).

Il peut être utilisé avec le module
[_image_](https://github.com/regseb/gout/tree/HEAD/src/module/image#readme).

## Configuration

La configuration contient un objet
[JSON](https://www.json.org/json-fr.html "JavaScript Object Notation") avec les
propriétés suivantes :

<table>
  <tr>
    <th>Nom</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>"complements"</code></td>
    <td><code>object</code></td>
    <td>
      <p>
        Des propriétés qui seront ajoutées dans les éléments retournés. Par
        défaut aucune propriété n'est ajoutée.
      </p>
      <p>
        Exemple : <code>{ "target": "_top" }</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>"lang"</code></td>
    <td><code>string</code></td>
    <td>
      <p>
        Le code de la langue. La liste est disponible ci-dessous. Par défaut le
        français est utilisé.
      </p>
      <p>
        Exemple : <code>"en"</code>.
      </p>
    </td>
  </tr>
</table>

Les codes des languages disponibles sont :

<!--
console.log(Array.from(document.querySelectorAll(".langmenu a"))
                 .map((a) => {
    return `- ${a.title.slice(0, a.title.indexOf(" ("))} : ` +
           `\`"${a.href.slice(29, -1)}"\` ;`;
}).join("\n"));
-->

- العربية : `"ar"` ;
- বাংলা : `"bn"` ;
- Brezhoneg : `"br"` ;
- Català : `"ca"` ;
- 中文 : `"cn"` ;
- Čeština : `"cs"` ;
- Dansk : `"da"` ;
- Deutsch : `"de"` ;
- Ελληνικά : `"el"` ;
- English : `"en"` ;
- Esperanto : `"eo"` ;
- Español : `"es"` ;
- فارسی : `"fa"` ;
- Suomi : `"fi"` ;
- Français : `"fr"` ;
- Globasa : `"gb"` ;
- Gàidhlig : `"gd"` ;
- Galo : `"go"` ;
- עברית : `"he"` ;
- हिन्दी : `"hi"` ;
- Magyar : `"hu"` ;
- Bahasa Indonesia : `"id"` ;
- Interlingue : `"ie"` ;
- Ido : `"io"` ;
- Italiano : `"it"` ;
- 日本語 : `"ja"` ;
- la .lojban. : `"jb"` ;
- Lojban : `"jz"` ;
- 한국어 : `"kr"` ;
- Kotava : `"kt"` ;
- Kernewek : `"kw"` ;
- Latina : `"la"` ;
- മലയാളം : `"ml"` ;
- Bahasa Melayu : `"ms"` ;
- Español mexicano : `"mx"` ;
- Nederlands : `"nl"` ;
- Normaund : `"nm"` ;
- Norsk : `"nn"` ;
- Norsk : `"no"` ;
- Plattdüütsch : `"ns"` ;
- Filipino : `"ph"` ;
- Polski : `"pl"` ;
- Português : `"pt"` ;
- Română : `"ro"` ;
- Русский : `"ru"` ;
- Sambahsa : `"sb"` ;
- සිංහල : `"si"` ;
- Slovenčina : `"sk"` ;
- Slovenščina : `"sl"` ;
- sitelen-pona : `"sp"` ;
- Српски : `"sr"` ;
- Svenska : `"sv"` ;
- Ślůnski : `"sz"` ;
- toki pona : `"tp"` ;
- Türkçe : `"tr"` ;
- Українська : `"uk"` ;
- Tiếng Việt : `"vi"`.

## Exemple

Ce widget affiche le dernier dessin.

```JSON
{
    "module": {
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/module/image/image.js",
        "config": {
            "cron": "@daily",
            "max": 1
        }
    },
    "scrapers": [{
        "url": "https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/scraper/image/peppercarrot/peppercarrot.js"
    }]
}
```
