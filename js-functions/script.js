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