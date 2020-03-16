var Camisas = /** @class */ (function () {
    function Camisas(color, marca, modelo, talla, precio) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }
    //Métodos
    Camisas.prototype.setGetColor = function (color) {
        return this.color = color;
    };
    return Camisas;
}());
