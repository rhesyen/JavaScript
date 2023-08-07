//kiedy będzie klik
function addItem() {
    //HTML Collection (prawie tablica):
    let itemsCollection = document.getElementsByTagName('li');
    //jej length:
    let numberOfItems = itemsCollection.length; // 3
    //nowy element li w dokumencie:
    let newElement = document.createElement('li');
    //nowy węzeł tekst w dokumencie:
    let newText = document.createTextNode(`Item ${numberOfItems+1}`);
    //dodanie dziecka tekst do li:
    newElement.appendChild(newText);
    //musi być 0, w tablicy position jest tylko jeden element, wskazujemy go jako rodzica:
    let position = document.getElementsByTagName('ul')[0];
    //console.log(position);
    position.appendChild(newElement);
}