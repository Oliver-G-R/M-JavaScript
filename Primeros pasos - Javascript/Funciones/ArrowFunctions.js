function sumame(n1,n2, sumaYMuestra, sumaPorDos){
    var sumar  = n1 + n2 ;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7, (dato) => {  /*Una forma de abrebiar funciones de call back,
                           denominadas funciones flecha*/
    
    console.log('La suma es: ' + dato);

},function(dato){

    console.log('La suma por dos es: ' + (dato * 2));

});
