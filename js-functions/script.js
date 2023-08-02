var imie = 'Nela';

function wyswietlImie(){
    var nazwisko = 'Kowalski';
    console.log(imie);
}
//wyswietlImie();
//************************************** */

function stringReversed(txt) {
    var txt2 = txt.split('').reverse().join('');
    return txt2;
}

//console.log(stringReversed("Akademia108"));
//************************************** */

function stringSorted (txt) {
    var txt2 = txt.split('').sort().join('');
    return txt2;
}

//console.log(stringSorted("Akademia108"));
//************************************** */

function count(temp){
    var sum = 0;
    for (var i = 0; i < temp.length; i++) {
        sum += temp[i];
      }
    console.log(sum);
    
    var mult = 1;
    for (var j = 0; j < temp.length; j++) {
        mult *= temp[j];
      }
    console.log(mult);
  }
  
  //let array = [1, 2, 3, 4, 5, 6];
  //count(array);
  //************************************** */

  function powSum(temp){
    var sum = 0;
    for (var i = 0; i < temp.length; i++) {
        sum += Math.pow(temp[i], 2);
      }
    console.log(sum);
}

//let array2 = [0, 1, 2, 3, 4, 5];
//powSum(array2);
//************************************** */

function fib(n) {
    let [a, b] = [0, 1];
    while (n-- > 1) {
      [a, b] = [b, a + b];
    }
    console.log(b);
}
//fib(10);
//************************************** */

class Ksiazka {
    constructor(tytul, autor, przeczytana) {
      this.tytul = tytul;
      this.autor = autor;
      this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        console.log( `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została ${this.przeczytana} przeczytana.` );
    }
}
  
let WiedzminOstatnieZyczenie = new Ksiazka ('Wiedzmin Ostatnie Zyczenie', 'Andrzej Sapkowski', true);
  
let WiedzminMieczPrzeznaczenia = new Ksiazka ('Wiedzmin Miecz Przeznaczenia', 'Andrzej Sapkowski', false);
  
let WiedzminKrewElfow = new Ksiazka ('Wiedzmin Krew Elfow', 'Andrzej Sapkowski', false);
  
let listOfBooks = [WiedzminOstatnieZyczenie, WiedzminMieczPrzeznaczenia, WiedzminKrewElfow];
  
function iloscPrzeczytanych(array) {
    var count = 0;
    for ( var i = 0; i < array.length; i++ ) {
      if (array[i].przeczytana) {
        count++;
      }
      array[i].opiszKsiazke();
    }
    console.log(count);
}

//iloscPrzeczytanych(listOfBooks);
//************************************** */

function bubbleSort(arr) {
    let swap;
    do {
        swap = false;
        for ( let i = 0; i < arr.length; i++ ) {
            if ( arr[i] > arr[i + 1] ) {
                [myArray[i], myArray[i + 1]] = [myArray[i + 1], myArray[i]];
                swap = true;
            }
        }
    } while(swap);
    return arr;
}

//let myArray =  [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
//console.log(bubbleSort(myArray));
//************************************** */
