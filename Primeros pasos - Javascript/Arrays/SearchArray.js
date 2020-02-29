var programmingLanguages = ['Java', 'JavaScript', 'C#', 'C++', 'PHP', 'Python', 'C'];

var numbers = [23, 78, 19, 200, 1];

var search = programmingLanguages.find((index) =>{
    return index == 'PH';
}); /*Devuelve la busqueda que se realizo, si entodo caso no 
la encuentra, devuelve undefined*/

search = programmingLanguages.findIndex((index) =>{
    return index == 'PHP'; 
}); //Devuelve la posicion donde se encuentra el elemento

search = numbers.some((index) => {
    return index > 10;
}); //Calcula si hay valores mayores, iguales y menores de un númweo

document.write(search);