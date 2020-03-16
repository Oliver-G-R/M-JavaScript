//interface (una forma de definirr los atributos y métodos que va tener nuestra clase de forma estricta)
interface baseCamisa{
    setGetColor(color);
}
class Camisas implements baseCamisa{ //clase(molde)
    //Atributos 
    private color: string;
    private marca: string;
    public modelo: string;
    public talla: string;
    public precio: number;

    constructor(color, marca, modelo, talla, precio){ //Constructor (primer método que se ejecuta siempre)
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio; 
    }
    //Métodos
    public setGetColor(color){
        return this.color = color;
    }

}

