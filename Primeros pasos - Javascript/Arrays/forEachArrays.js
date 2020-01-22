var programmingLanguages = ['Java', 'JavaScript', 'C#', 'C++', 'PHP', 'Python', 'C'];

document.write('<h1> Lenguajes programación del 2018 </h1>');

document.write('<ul>');
programmingLanguages.forEach(function(elements, index){ //el segunda parametro es la posicion donde se encuentra el contenudo
    document.write('<li>' + index + ' - ' + elements + '</li>');
    document.write('<br>');
});
document.write('</ul>');