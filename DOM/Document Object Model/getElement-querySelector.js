function changeColor(color){
    caja.style.background = color;
}




//var caja = document.getElementById('mi-caja'); //Mediante el id se accede al elemento

var caja = document.querySelector('#mi-caja'); //Otra forma de seleccionar un elemento

caja.innerHTML = 'Texto desde script' // para cambiar el valor de lo que a sido seleccionado

//caja.style.background = 'red'; //Se cambia su estilo
caja.style.padding = '20px';
caja.style.color = 'white';
caja.className = 'Prueba'
//Mostrando lo que hay en esa variable
console.log(caja);