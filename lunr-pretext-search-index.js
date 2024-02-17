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
  "title": "Background",
  "body": " Background  Devin Diaz is a Hispanic first-generation second-year student at Framingham State University majoring in Computer Science. His traits are ambitious, determined, and resilient along with his strengths including, adaptability, communication bilingual, and critical thinking. Around campus, Devin is a part of Framingham State's competitive programming team and math club, He is a Computer Science tutor for java programming and supplemental instructor for discrete mathematics. Devin is looking for an internship in the software engineering industry, open to all opportunities to expand his knowledge and continue to develop his skillset.   1% chance, 99% faith   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Journey in CSCI 130 - Java 1",
  "body": " Journey in CSCI 130 - Java 1  Nerves. The best way I could describe how I felt on the first day of my first ever computer science course.  "
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
