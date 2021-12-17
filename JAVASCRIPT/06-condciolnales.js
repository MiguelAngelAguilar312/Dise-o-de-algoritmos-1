/* "Condiconales"
Condiconales se utilizan para tomar decisiones dentro de nuestro
programa
*/
/*Seción del dia 9 de Dicembre de 2021- Carlos Eduardo*/
/*
if(condicion) {
   codigo
   codigo
   codigo
   codigo
}*/

/*let edad = 20;

if (edad >= 18) {
    document.write("Eres mayor de edad, puedes votar.");
}
else{
    document.write("Lo siento, eres menor de edad y no puedes votar.");
}*/

/* Ejercicio para solicitar y verificar si es mayor de edad. */
const edad = parseInt(prompt("Ingresa tu edad: "));
if ( edad >= 18 && edad < 30) {
    document.write("Eres un joven 👩🏻🧑🏻.");
}
else if(edad >= 30 && edad < 60) {
    document.write("Eres un adulto joven 👨🏻👩🏻‍🦱🧑🏻👨🏻‍🦱👩🏻‍🦰🧑🏻👨🏻‍🦰👱🏻‍♀️👱🏻‍♂️.");
}
else if(edad >= 60 && edad < 120) {
    document.write("Eres un adulto mayor 👵🏻🧓🏻👴🏻.");
}
else if(edad >= 120){
    document.write("Error de la edad 🛑🛑🚫🚫🚫🛑🛑.");
}
else{
    document.write("Eres un nene 👶🏻👧🏻🧒🏻👦🏻.");
}

