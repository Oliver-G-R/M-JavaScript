// Let y var

let hola = 'Hola Mundo'; /*let permite definier variables limitando su alcance al 
                          bloque declaración o expresión donde se está usado 
                          */

var name = 'Oliver'; /**var define una variable global o local en una funcion sin 
                        importar el ámbito del bloque */

//Prueba con let y var

//Prueba con var
var numero = 40; 
console.log(numero); //40
if(true){
    numero = 50;
    console.log(numero); //50
} 
console.log(numero); //50

//Prueba con let
let texto = 'Curso js';
console.log(texto); // Curso js

if(true){
    let texto = 'Probando let';
    console.log(texto); // Probando let
}

console.log(texto); //Curso js
