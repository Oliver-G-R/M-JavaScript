

var caja = document.querySelector('#mi-caja')

//Conseguir elemntos por etiquetas
var allDivs = document.getElementsByTagName('div');

/*var contentText = allDivs[2]; //Accediendo al contenido del elemento 3

contentText.innerHTML = 'Prueba' //Cambiando el valor de esa posición

*/

console.log(allDivs)

var seccion = document.querySelector('#section');
var hr = document.createElement('hr');
var value;

seccion.append(hr);

for (value in allDivs) {
    if (typeof(allDivs[value].textContent)  == 'string') {
        var paragraph = document.createElement('p');
        var text = document.createTextNode(allDivs[value].textContent);
        paragraph.append(text);
        document.querySelector('#section').prepend(paragraph);
        seccion.append(paragraph);
    }
}

seccion.append(hr);

//Conseguir elemntos por class
var divsRed = document.getElementsByClassName('red');
var divsYellow = document.getElementsByClassName('yellow');
divsYellow[0].style.background = 'yellow';
for (var divs in divsRed) {
    if(divsRed[divs].className == 'red'){
        divsRed[divs].style.background = 'red';
    }
}
