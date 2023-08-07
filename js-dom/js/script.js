//concept of nodes

let node = document;

// Node.nodeType == ELEMENT_NODE
node = document.documentElement;
node = document.head;
node = document.body;

// Node.nodeType == ATTRIBUTE_NODE
console.log(document.getElementById('articles').childNodes);
node = document.getElementById('articles').childNodes[3].attributes[0];
console.log(node); //wyswietla id
node = document.getElementById('articles').childNodes[3].attributes[1];
console.log(node); //wyswietla klasę

// Node.nodeType == TEXT_NODE
console.log(document.getElementsByClassName('content'));
console.log(document.getElementsByClassName('content')[0].childNodes);
console.log(document.getElementsByClassName('content')[0].childNodes[0]);

// Node.nodeType == COMMENT_NODE
console.log(document.getElementById('articles').childNodes);
console.log(document.getElementById('articles').childNodes[1]);

// Node.nodeType == DOCUMENT_NODE
node = document;

// Node.nodeType == DOCUMENT_TYPE_NODE
console.log(document.doctype);

// Node.nodeType == DOCUMENT_FRAGMENT_NODE
let documentFragment = new DocumentFragment();
node = documentFragment;
let articles = document.getElementById('articles');
let article2 = document.createElement('article');
article2.innerText = 'Lorem ipsum tralalala';
//appendChild
documentFragment.appendChild(article2);
articles.appendChild(documentFragment);