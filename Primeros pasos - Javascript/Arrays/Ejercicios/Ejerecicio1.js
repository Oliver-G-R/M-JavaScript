/*
  1.Pedir 6 números pon pantalla y los meta en un array
  2.Mostrar el array entero en el cuerpo de la pagina y en la 
  consola
  3.- Mostrar el array ordenado y mostrarlo
  4.- Invertir su orden y mostrarlo
  5.- Mostrar cuantos elementos tiene el array
  6.. Hcaer busqueda dw un valor introducido por el usuario
  y que diga si esta en el array y su indice

*/


var numbers = [];

function ShowArray(elements, textC = "") {
    document.write(`<h1>El contenido del array ${textC}</h1>`);
    document.write('<ul>');
    elements.forEach((elements) => {
        document.write('<li>' + elements + '</li>');
    });
    document.write('</ul>');
}

//Pedir 6 números
for (let i = 0; i <= 5; i++) {
    numbers[i] = parseInt(prompt('Introduce lo números'));
}


//Mostrando array por consola
console.log(numbers);

//Mostrando en el cuerpo de la pagina
ShowArray(numbers)

//Ordenar y mostrar
numbers.sort(function(a,b){return a - b}); //Para odenar de manera númerica de menor a mallor
ShowArray(numbers, 'Ordenados');

//Invertir números
numbers.reverse();
ShowArray(numbers, 'revertido');

//Elemntos que tiene el array
document.write(`<h1>El array tiene ${numbers.length} elementos</h1>`);

var search = parseInt(prompt('Busca un número'));

var position =  numbers.findIndex((numbers) => {return numbers == search});

if(position && position != -1 ){
    document.write('<h1>¡ENCONTRADO!</h1>');
    document.write(`<h2>Posicion de la busqueda ${position}</h2> `);
}else{
    document.write('<h1>No se encontro el número</h1>');
}

