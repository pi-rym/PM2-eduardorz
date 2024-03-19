class CarritoCompra {
    constructor(){
        this.products = []
    }
    agregarProducto(prod){
        this.products.push(prod)
    }
    calcularTotal(){
        let total = 0;

        for(const item of this.products) {
            total += item.price * item.quantity
        }
        return total;
    }
    aplicarDescuento(porcentajeDescuento){
        const subtotal = this.calcularTotal();
        const descuento = this.calcularTotal() * (porcentajeDescuento / 100);
        const total = subtotal - descuento;
        return total;
    }
}

module.exports = CarritoCompra;