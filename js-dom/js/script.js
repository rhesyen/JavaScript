//model DOM, obiekt window

//getElementById - 1 element:
let articles = document.getElementById('articles');
console.log(articles);

//querySelector - 1 element; pierwszy z wszystkich pasujących elementów:
let paragraph = document.querySelector('.content');
console.log(paragraph);

//HTML-collection; podobny do tablic:

//getElementsByClassName:
let paragraphs = document.getElementsByClassName('content');
console.log(paragraphs);
console.log(paragraphs[1]);

//getElementsByTagName:
let allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

//querySelectorAll - format elementu NODELIST
let parContent = document.querySelectorAll('p.content');
console.log(parContent);
