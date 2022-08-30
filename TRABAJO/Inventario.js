const Producto = require('./Producto');
const PedidoProveedor = require('./PedidoProveedor');
const ProductoProveedor = require('./ProductoProveedor');

class Inventario {
    constructor(idInventario, productosInventario) {
        this._idInventario = idInventario;
        this._productosInventario = productosInventario;
    }

    get idInventario() {
        return this._idInventario;
    }

    get productosInventario() {
        return this._productosInventario;
    }

    set productosInventario(productosInventario) {
        this._productosInventario = productosInventario;
    }


    ContadorProductosInventario() {
        let contador = 0
        let productosinventarie = this._productosInventario._PedidoProveedor._productoProveedor
        for (let i = 0; i < this._productosInventario.length; i++) {
            for (let i = 0; i < productosinventarie.length; i++) {
                contador = contador + this._productoProveedor[i]._cantidadP;

            }
        }
        console.log(`La cantidad total de productos en el inventario es: ${contador}`);
    }


    añadirAInventarioP(pedido) {
        for (let i = 0; i < pedido._productoProveedor; i++) {
            var productoi = new Producto(pedido._productoProveedor._idProductoP, pedido._productoProveedor._nombrePP, pedido._productoProveedor._precioComprado, pedido._productoProveedor._detalles, pedido._productoProveedor._marca)
            this._productosInventario.push(productoi)
        }

    }

}

var productoP1 = new ProductoProveedor("001", "Pan", 5000, "Rollito", "Bimbo");

var productoP2 = new ProductoProveedor("002", "Galletas", 15000, "Galletas de sal, 12 unidades por paquete", "Saltin");

var productoP3 = new ProductoProveedor("003", "Pan", 5000, "Rollito", "Bimbo");

var productoP4 = new ProductoProveedor("004", "Galletas", 15000, "Galletas de sal, 12 unidades por paquete", "Saltin");

var pedidoP1 = new PedidoProveedor("111", productosP1 = [], "proveedor1");
var pedidoP2 = new PedidoProveedor("112", productosP2 = [productoP3, productoP4], "proveedor2")

var inventario1 = new Inventario("0001", pInventario1 = [])

pedidoP1.añadirAPedidoProveedor(productoP1, 30);
pedidoP1.añadirAPedidoProveedor(productoP2, 40);

let pedido = pedidoP1
console.log(pedidoP1._ProductoProveedor._nombrePP)
    // let productoi = new Producto(pedido._productoProveedor._idProductoP, pedido._productoProveedor._nombrePP, pedido._productoProveedor._precioComprado, pedido._productoProveedor._detalles, pedido._productoProveedor._marca)

// inventario1.añadirAInventarioP(pedidoP1)
// inventario1.añadirAInventarioP(pedidoP2)
// console.log(inventario1._productosInventario)
// inventario1.ContadorProductosInventario()
// console.log(productoi)





module.exports = Inventario;