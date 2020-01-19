function HolaMundo(texto){
    var texto_function = 'Soy una variable con limite de ámbito';
    console.log(texto_function);
    return texto;
}


var texto = 'Soy una variable global';
console.log(HolaMundo(texto)); 
console.log(texto_function); /*Esto imprimira un error, el cual
                             no dejara ejecutar el programam debido 
                            a que se quiere imprimir una variable 
                            no definida de forma global, esto quiere decir
                            que aunque la varible si este definida en la función
                            no se podra acceder a ella, ya que limita su acceso  */