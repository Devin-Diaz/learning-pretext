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
  "id": "ch-1-section-1",
  "level": "1",
  "url": "ch-1-section-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Using latex and sageplot ._.",
  "body": " Using latex and sageplot ._.   Negative multiple of a curve   Plot of x^4 - 1 and its negative.      ma circle   (a circle of radius 3 centered at origin)     "
},
{
  "id": "ch-1-section-1-2",
  "level": "2",
  "url": "ch-1-section-1.html#ch-1-section-1-2",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Negative multiple of a curve   Plot of x^4 - 1 and its negative.    "
},
{
  "id": "circle",
  "level": "2",
  "url": "ch-1-section-1.html#circle",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " ma circle   (a circle of radius 3 centered at origin)    "
},
{
  "id": "ch-1-section-2",
  "level": "1",
  "url": "ch-1-section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Cool maths",
  "body": " Cool maths  Where my hate for math began   Where my sanity dropped   Thank the lord im a cs major and not math    I can't lie this is pretty cool, use show() to display the math format nicely   "
},
{
  "id": "ch-1-section-3",
  "level": "1",
  "url": "ch-1-section-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "more latex stuff",
  "body": " more latex stuff  \\documentclass{article} \\usepackage{tikz} \\begin{document} % User input for slope and y-intercept \\newcommand{\\slope}{2} \\newcommand{\\yintercept}{1} \\begin{center} \\begin{tikzpicture}[scale=0.8] % Define axis \\draw[->] (-5,0) -- (5,0) node[right] {$x$}; \\draw[->] (0,-2) -- (0,5) node[above] {$y$}; % Plot the line \\draw[domain=-4:4,smooth,variable=\\x,blue] plot ({\\x},{\\slope*\\x + \\yintercept}); % Label the line \\node[blue, above right] at (3,6) {$y = \\slope x + \\yintercept$}; \\end{tikzpicture} \\end{center} \\end{document}  "
},
{
  "id": "ch-2-section-1",
  "level": "1",
  "url": "ch-2-section-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Python script attempt",
  "body": " Python script attempt   This problem requires the user to write a Python program to calculate the product of two numbers.  Instructions:   Prompt the user to enter two numbers.  Calculate the product of the two numbers.  Display the product to the user.   Here is a code snippet as a reference:   Write a Python program to calculate the product of two numbers.  # Python program to calculate the product of two numbers # Input the first number num1 = float(input(\"Enter the first number: \")) # Input the second number num2 = float(input(\"Enter the second number: \")) # Calculate the product product = num1 * num2 # Display the product print(\"The product of\", num1, \"and\", num2, \"is\", product)   "
},
{
  "id": "ch-2-section-1-2",
  "level": "2",
  "url": "ch-2-section-1.html#ch-2-section-1-2",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "",
  "body": " This problem requires the user to write a Python program to calculate the product of two numbers.  Instructions:   Prompt the user to enter two numbers.  Calculate the product of the two numbers.  Display the product to the user.   Here is a code snippet as a reference:   Write a Python program to calculate the product of two numbers.  # Python program to calculate the product of two numbers # Input the first number num1 = float(input(\"Enter the first number: \")) # Input the second number num2 = float(input(\"Enter the second number: \")) # Calculate the product product = num1 * num2 # Display the product print(\"The product of\", num1, \"and\", num2, \"is\", product)  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt and by the prodigy Devin Diaz.  "
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
