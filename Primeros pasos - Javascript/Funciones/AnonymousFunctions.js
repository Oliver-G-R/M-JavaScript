//Una función anonima es una función que no tiene nombre

//Función anonima
var pelicula = function(nomPeli){
    return 'La película es: ' , nomPeli;
}


function sumame(n1,n2, sumaYMuestra, sumaPorDos){
    var sumar  = n1 + n2 ;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}




sumame(5,7, function(dato){ /*al llamar una funcion anonima detro de la misma funcion 
                              donde se esta llamando se le llama call back*/
    console.log('La suma es: ' + dato);
},
function(dato){
    console.log('La suma por dos es: ' + (dato * 2));
});




//console.log(sumame(4,5));

