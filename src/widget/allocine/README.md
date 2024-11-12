# Widgets de AlloCiné

> Mots-clés :
> [_gout_](https://github.com/search?q=_gout_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-widget_](https://github.com/search?q=_gout-widget_+language%3AMarkdown&type=Code&l=Markdown),
> [_gout-widget-allocine_](https://github.com/search?q=_gout-widget-allocine_+language%3AMarkdown&type=Code&l=Markdown).

Ce répertoire regroupe des widgets pour les flux RSS du site
[**AlloCiné**](https://www.allocine.fr/). Pour ajouter un widget dans votre
dashboard, insérez le code suivant (en remplaçant `{widget}` par le widget
voulu) :

```html
<script
  type="application/yaml"
  src="https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/allocine/{widget}.yaml"
></script>
```

- Les actualités cinéma et séries :
  [`https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/allocine/news.yaml`](https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/allocine/news.yaml)
- Les actualités cinéma :
  [`https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/allocine/news-cine.yaml`](https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/allocine/news-cine.yaml)
- Les actualités séries :
  [`https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/allocine/news-series.yaml`](https://cdn.jsdelivr.net/gh/regseb/gout-regseb@0/src/widget/allocine/news-series.yaml)
