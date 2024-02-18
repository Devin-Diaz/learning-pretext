var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Devin's GitHub   copyright  "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Using latex and sageplot ._.",
  "body": " Using latex and sageplot ._.   Negative multiple of a curve   Plot of x^4 - 1 and its negative.      ma circle   (a circle of radius 3 centered at origin)     "
},
{
  "id": "section-1-2",
  "level": "2",
  "url": "section-1.html#section-1-2",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Negative multiple of a curve   Plot of x^4 - 1 and its negative.    "
},
{
  "id": "circle",
  "level": "2",
  "url": "section-1.html#circle",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " ma circle   (a circle of radius 3 centered at origin)    "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Cool maths",
  "body": " Cool maths  Where my hate for math began   Where my sanity dropped   Thank the lord im a cs major and not math    I can't lie this is pretty cool, use show() to display the math format nicely   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
