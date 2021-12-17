/* 
Variable var se utiliza anteriormente, son variables globales.
Variable let es una variable de contexto, solo vive en un bloque de 
codigo.
*/
/*Seción del dia 9 de Dicembre de 2021- Carlos Eduardo*/

var numero = 40;
console.log(numero); //40

if(true) {
    var numero = 50;
    console.log(numero); //50
}

console.log(numero); //50

var texto = "Bootcamp Java";
console.log(texto); //Bootcamp Java

if(true) {
    let texto = "Cohorte 8";
    console.log(texto); //Cohorte 8
    let numeroFavorito = 76;
    console.log (numeroFavorito);
}

//console.log (numeroFavorito); // no aparece en la consola ya que este comando se encuentra en "if"
console.log(texto); //Cohorte 8
