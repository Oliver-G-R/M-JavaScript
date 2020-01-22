//Transoformando textos 
var numero = 444;
var text1 = 'Curso de JavaScript';
var text2 = 'El curso es muy bueno';

var dato = numero.toString(); /*444' -> Con este método se transforma a
                               tipo text*/
dato = text1.toUpperCase(); // El tesxto se convierte en mayúsculas
                               
dat = text2.toLowerCase(); // El text se convierte en minusculas

//Calular longitud 
var nombre = '';
nombre = 'Oliver';
nombre.length; // 6
console.log(nombre.length); // 0 -> Porque esta variable esta vacia en text

//Concatenar - unir texts
var textTotal = text1 + ' ' + text2; 
console.log(textTotal); //Curso de JavaScript El curso es muy bueno

textTotal = text1.concat('' + text2); //Curso de JavaScript El curso es muy bueno