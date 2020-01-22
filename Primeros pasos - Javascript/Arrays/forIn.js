var programmingLanguages = ['Java', 'JavaScript', 'C#', 'C++', 'PHP', 'Python', 'C'];

document.write('<h1> Lenguajes programación del 2018 </h1>');


document.write('<h2> forIn </h2>');
for(let index in programmingLanguages){
    document.write(programmingLanguages[index]);
}

document.write('<h2> for </h2>');
for (let index = 0; index < programmingLanguages.length; index++) {
    document.write(programmingLanguages[index]);
    
}

document.write('<h2> forEach </h2>');
programmingLanguages.forEach(function(elements){
    
    document.write(elements);

});

