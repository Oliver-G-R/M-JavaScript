/*Programa que pida dos números y que nos diga cual es el mayor
 el menor, y si no son igulaes*/
/*Plus si los números no son correctos que los vuelva a pedir
  y de igual manera si son menores o iguales a 0*/

//Parseint -> Convierte el dato introducido en un tipo entero
//ParseFloat -> Convierte el dato introducido en un decimal 


console.log(n1, n2);

while(n1 <= 0 || n2 <=0 || isNaN(n1) || isNaN(n2)){
    var n1 = parseInt(prompt('Introduce el primer número'));
    var n2 = parseInt(prompt('Introduce el segundo número'));
    console.log(n1);
}

if(n1 == n2){
    alert('Ambos números son iguales');
}else if(n1 > n2){
    alert('El número mayor es el ' + n1);
    alert('El número menor es el ' + n2);
}else if(n2 > n1){
    alert('El número mayor es el ' + n2);
    alert('El número menor es el ' + n1);
}else{
    alert('Introduce número correctos');
}
