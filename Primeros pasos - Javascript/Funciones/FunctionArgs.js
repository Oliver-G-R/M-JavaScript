function Sum(a, b, c = 3){ /*El parametro opcional se va usar siempre 
                            y cuando no se haya pasado ningun dato por el usuario*/
    return a + b + c;
}

var resultado = Sum(2 , 4 , 5);
var resultado2 = Sum(3 , 7);

console.log(resultado);
console.log(resultado2);