//model DOM, obiekt window

window.alert("Its me"); // = alert(); - metoda window

let age = window.prompt("Podaj swoj wiek");

console.log(`Masz ${age} lat`); 

let accept = window.confirm("Akceptuje");
if (accept) {
    console.log("Umowa zaakceptowana");
}
else {
    console.log("Umowa niezaakceptowana");
}

console.log(window); //- wszystkie atrybuty DOM wypisane w konsoli

window.document.write(`<h2> Aniela </h2>`); //- obiekt window, bezposrednie odwolanie

var number = 108;

console.log(window);

//HTML-collection; podobny do tablic

