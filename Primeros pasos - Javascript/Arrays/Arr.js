var names = ['Oliver', 'Juan', 'AnA', 'Lupe']
var vegetables = ['Tomates', 'Lechuga', 'Zanahoria']


//console.log('Mostrando arrgelo sin for')
//console.log(names)
//console.log(vegetables)


//console.log('\nDatos cambiados por posiciones')
names[3] = 'Kevin'
vegetables[2] = 'Aguacate'

//console.log(names)
//console.log(vegetables)


//console.log('\nMostrando todo el arrgelo names con for')
for(var i = 0; i <= names.length -1; i++)
{
//    console.log(names[i]);
}

vegetables.forEach(function(element, index){ //Estructura con forEach
  //  console.log(element, index)
})

console.log('Nombres actuales')
names.forEach(function(element){
    console.log(element)
})

console.log('\nAgregando un elemento a la lista en la ultima posicion')
names.push('Pedro') //push  agrega un elemento al final del arreglo
names.forEach(function(element){
    console.log(element)
})

console.log('\nAgregando un elemento a la lista en la primera posicion')
names.unshift('Alejandra') //unshift  agrega un elemento al principo del arreglo
names.forEach(function(element){
    console.log(element)
})

console.log('\nQuitando un elemento de la posicion final de un arrgelo')
names.pop() //Quita el ultimo elemento
names.forEach(function(element){
    console.log(element)
})

console.log('\nQuitando un elemento de la primera posicion de un arrgelo')
names.shift() //Quita el elemento de la primera psicion
names.forEach(function(element){
    console.log(element)
})

console.log('\nPosicion donde esta Oliver en el arrgelo')
var pos = names.indexOf('Oliver') //Devuelve el número de la posicion donde se encuentra un elemento
console.log(pos)

console.log('\nElimiando por posiciones y cantidades')
names.splice(1,2) //Splice elimina la cantidad de elementos que se desde deacuerdo al indice que se coloque names.splice(1,2) = Oliver,Kevin
names.forEach(function(element){
    console.log(element)
})