function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){ /*... -> Rest sirve para capturar un número de 
    parametros indefinidos los cuales despues se guardan en un array*/
    console.log('Fruta 1: ' + fruta1);
    console.log('Fruta 2: ' + fruta2);
    console.log(...restoDeFrutas); //'Sandia', 'Pera', 'Melon', 'Coco'
                                
}

var frutas = ['Manzana', 'Naranja'];
listadoFrutas(frutas, 'Sandia', 'Pera', 'Melon', 'Coco'); 
console.log(listadoFrutas(...frutas, 'Sandia', 'Pera', 'Melon', 'Coco')); // Manzana, Naranja, Sandia, Pera, Melon, Coco
