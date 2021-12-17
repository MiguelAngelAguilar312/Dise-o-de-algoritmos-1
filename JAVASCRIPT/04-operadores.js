/* "Operadores Aritmeticos"
Operadores aritméticos: 

+ Sirve para sumar o concatenar
- sirve para restar 
* sirve para multiplicar
% sirve para obtener el residuo de una divición 
/ divición

*/
/*Seción del dia 9 de Dicembre de 2021- Carlos Eduardo*/
/* let numero1 = 34;
let numero2 = 5;
console.log(numero1 + numero2) */

/*  Formato de string
const numero1 = prompt ("Ingresa el numero 1");
const numero2 = prompt ("Ingresa el numero 2"); 
*/

//Formato de numero

var nombre = "Miguel Angel Aguilar Escutia"
const numero1 = parseInt(prompt("Ingresa el numero 1"));
const numero2 = parseInt(prompt("Ingresa el numero 2"));

console.log("Nombre: " + nombre)
console.log("Numero 1: " + numero1);
console.log("Numero 2: " + numero2);

/* Suma */
const suma = numero1 + numero2;
console.log("Suma: " + suma); 

/* Resta */
const resta = numero1 - numero2;
console.log("Resta: " + resta); 

/* Multiplicación */
const multiplicacion = numero1 * numero2;
console.log("Multiplicacion: " + multiplicacion); 

/* División */
const division = numero1 / numero2;
console.log("Division: " + division); 

console.log(2 % 3);

/* "Operadores Logicos"
 
 Operadores Logicos 
 && AND y
 ||  OR o
 !  NOT
 */

 const operador1 = true&&true
 console.log("1 (Verdadero " + "&&" + " Verdadero)=" + operador1)
 
 const operador2 = true&&false
 console.log("2 (Verdadero " + "&&" + " Falso)=" + operador2)
 
 const operador3 = false&&true
 console.log("3 (Falso " + "&&" + " Verdadero)=" + operador3)
 
 const operador4 = false&&false
 console.log("4 (Falso " + "&&" + " Falso)=" + operador4)
 
 const operador5 = true||true
 console.log("5 (Verdadero " + "||" + " Verdadero)=" + operador5)
 
 const operador6 = true||false
 console.log("6 (Verdadero " + "||" + " Falso)=" + operador6)
 
 const operador7 = false||true
 console.log("7 (Falso " + "||" + " Verdadero)=" + operador7)
 
 const operador8 = false||false
 console.log("8 (Falso " + "||" + " Falso)=" + operador8)
 
 
 const operador9 = !(false||true)
 console.log("9 !(Falso " + "||" + " Verdadero)=" + operador9)
 
 const operador10 = !(false&&true)
 console.log("10 (Falso " + "&&" + " Verdadero)=" + operador10)
 
 const operador11 = (!false&&true)
 console.log("11 (!Falso " + "&&" + " Verdadero)=" + operador11)
 
 const operador12 = !true&&true
 console.log("12 (!Verdadero " + "&&" + " Verdadero)=" + operador12)
 
 const operador13 = !false||false
 console.log("13 (!Falso " + "||" + " Falso)=" + operador13)