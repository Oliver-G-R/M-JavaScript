/************ 
 * Operadores Lógicos
 * */
// < > <= >= ==

ageAna = 34;
ageMaria = 28;

var higherAna = ageAna > ageMaria;
console.log(higherAna); //True

higherAna = ageAna < ageMaria;
console.log(higherAna) //False

higherAna = ageAna == ageMaria;
console.log(higherAna); //False

higherAna = !(ageAna == ageMaria); /*al poner el operador !(negacion) aunque                                                el resultado sea
                                    verdadro o falso, el operador lo transformara a lo contrario*/

console.log(higherAna) //True

