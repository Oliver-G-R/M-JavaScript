var text1 = 'Curso de de JavaScript';
var text2 = 'El curso es muy es bueno';
var serach = text1.indexOf('pt'); /*Encuentra la palabra que pasemos como parametro() 
                                     y nos da como resultado la posición en la que esta*/
serach = text1.lastIndexOf('de');
//console.log(serach); //La ultima aparición de esa palabra 

serach = text2.match('es'); //Devuelve en un array y el indice donde esta la busqueda que se a hecho
//console.log(serach);

serach = text2.match('/es/g'); //Encuentra todas las coincidencias 

serach = text2.substr(14, 5); /*El primer parametro indica desde donde 
                                empezara a recoger caracteres y el seguno dice 
                                la cantidad que va recoger*/

serach = text2.charAt(4); //Saca un solo caracter en el indice que se le indique

serach = text1.startsWith('Crso '); /*Busca al inico del string si 
                                    esta el parametro que le pasamos
                                    e indica true si esta o false si no 
                                    esta*/

serach = text2.endsWith('bueno'); /*hace lo mismo que el anterior pero 
                                  empieza a buscar desde el ultimo del string*/

serach = text2.includes('bueno'); //Busca una palabra en cualquier lugar de string y da true o false

console.log(serach);