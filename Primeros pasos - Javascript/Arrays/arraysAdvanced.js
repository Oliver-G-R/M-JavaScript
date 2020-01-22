var programmingLanguages = ['Java', 'JavaScript', 'C#', 'C++', 'PHP', 'Python', 'C'];
/*var element;
do{
    element = parseInt(prompt('¿Qué elemento del array quieres?'));
    if(element >= programmingLanguages.length){
        alert(`Introduce el número correcto menor que ${programmingLanguages.length}`);
    }else{
        alert(`El lenguaje seleccionado es: ${programmingLanguages[element]}`);
        break;
    }
}while(true);
*/

document.write('<h1> Lenguajes programación del 2018 </h1>');

document.write('<ul>');
for (let index = 0; index < programmingLanguages.length; index++) {
    document.write('<li>' +programmingLanguages[index] + '</li>')
    document.write('<br>');
}
document.write('</ul>');