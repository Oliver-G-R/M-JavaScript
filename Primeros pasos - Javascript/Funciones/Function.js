function Message(){
    console.log('Mensaje desde la funcion');
}

Message();


function MessageR(){
    return 'Mensaje devuelto desde la funcion';
}

var Message2 = function(){
    return 'Mensaje devuelto desde la funcion';
}  // Ora forma de hacer una funcion 

var mns = MessageR();

console.log(mns)
console.log(Message2)


