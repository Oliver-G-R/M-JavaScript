document.title = 'Prue' //Cambia el titulo de la pestaña de la pagina

var h1 = document.getElementsByTagName('h1') //Selecciona un elemento esepcifico por medio de tu etiqueta (selecciona todos)
h1[0].innerHTML= 'Prueba' //en el indice 0 cambia el nombre del h1
console.log(h1)

var button = document.getElementById('button');
console.log(button)

button.addEventListener('click', message);

function message(){
    alert('Funciona el evento clik')
}