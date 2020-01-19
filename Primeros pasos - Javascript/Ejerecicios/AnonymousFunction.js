function NumbersCal(num1, num2, add, substract, multiply){
    add(num1, num2);
    substract(num1, num2);
    multiply(num1, num2);
}

var n1 = parseFloat(prompt('Ingresa el primer número'));
var n2 = parseFloat(prompt('Ingresa el segundo número'));


NumbersCal(n1, n2, function(element1, element2){

    var add = element1 + element2;
    document.write('<h2> La suma es: </h2>' + add);

},function(element1, element2){

    var substract = element1 - element2;
    document.write('<h2> La resta es: </h2>' + substract);

},function(element1, element2){
    var multiply = element1 * element2;
    document.write('<h2> La multipicación es: </h2>' + multiply);
}
);