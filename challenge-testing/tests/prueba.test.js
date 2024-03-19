const CarritoCompra = require('../index');

describe('Clase Carrito Compra', () => {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra();
    });

    describe('Sobre el constructor de la clase Carrito Compra ', () => {
        it('CarritoCompra debería ser una clase', () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function');
        });

        it('carritoCompra debería ser una instancia de la clase CarritoCompra',() => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        });

        it('Debería guardar productos en una lista',() => {
            expect(carritoCompra.products).toEqual([]);
        });
    });

    describe('Métodos de la clase CarritoCompra',() => {
        const prod1 = {
            id:1,
            name: 'Bastones de Pan',
            price: 500,
            quantity: 4
        }
        const prod2 = {
            id:2,
            name: 'Manteca',
            price: 1200,
            quantity: 2
        }

        it('Debería tener un método llamado agregarProducto', () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function');
        });

        it('Debería tener un método llamado calcularTotal', () => {
            expect(typeof carritoCompra.calcularTotal).toBe('function');
        });

        it('Debería tener un método llamado aplicarDescuento', () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function');
        });

        it('El método agregarProducto debería poder agregar un producto a la lista', () => {
            carritoCompra.agregarProducto(prod1);
            expect(carritoCompra.products).toContain(prod1)
        });

        it('El método calcularTotal debería poder calcular el total de la compra sumando los precios de todos los productos en el carrito.', () => {
            carritoCompra.agregarProducto(prod1);
            carritoCompra.agregarProducto(prod2);

            const totalEsperado = prod1.price * prod1.quantity + prod2.price * prod2.quantity

            const total = carritoCompra.calcularTotal();
            expect(total).toBe(totalEsperado);
        })

        it('El método aplicarDescuento debería poder aplicar un descuento al total de la compra', () => {
            carritoCompra.agregarProducto(prod1);
            carritoCompra.agregarProducto(prod2);

            const subtotal = prod1.price * prod1.quantity + prod2.price * prod2.quantity;
            const porcentajeDescuento = 30;
            const totalEsperado = subtotal - (subtotal * (porcentajeDescuento/100));

            const total = carritoCompra.aplicarDescuento(porcentajeDescuento);

            expect(totalEsperado).toBe(total);


        })
    });

});