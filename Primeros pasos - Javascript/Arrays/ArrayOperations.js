var categori = ['Acción', 'Terror', 'Comedia'];
var movies = ['Rapidos y furiosos', '123 por mi'];
var cine = [categori , movies];


var element;
do{
    element = prompt('Introduce tú película: ');
    movies.push(element); //Forma de mandar mas elementos al array

}while(element != 'ACABAR');

movies.pop(); //Eliminando el último elemento agregado

var index = movies.indexOf('123 por mi');
if(index > -1){
    movies.splice(index,1); /*Primer parametro Deacerdo a un indice seleccionado
                            el segundo parametro la cantidad de elemntos a borrar*/
}
var moviesStr = movies.join(); //Combierte un array a styng
console.log(moviesStr);