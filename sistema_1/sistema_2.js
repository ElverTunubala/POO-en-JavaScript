//Servicio de Entrega de Comida

class Cliente {
    constructor(nombre, email, clave, dirección, teléfono) {
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.dirección = dirección;
        this.teléfono = teléfono;
    }

    realizarPedido(restaurante, detallesPedido) {
        // Lógica para realizar un pedido
    }

    verHistorialPedidos() {
        // historial de pedidos del cliente
    }

    autenticacion() {
        // autenticar al cliente
    }
}

class Restaurante {
    constructor(nombre) {
        this.nombre = nombre;
        this.menu = [];
    }

    agregarPlato(plato) {
        this.menu.push(plato);
    }

    actualizarPlato(nombrePlato, nuevoPlato) {
        const index = this.menu.findIndex(plato => plato.nombre === nombrePlato);
        if (index !== -1) {
            this.menu[index] = nuevoPlato;
        }
    }

    // Otros métodos
}
class RestauranteDigital  {
    constructor(nombre,menuQR) {
        this.nombre = nombre;
        this.menuQR = menuQR;
    }
    agregarPlato(){}
    actualizarPlato(){}
}

class Plato {
    constructor(nombre, precio, ingredientes) {
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }

    obtenerInfo() {
        return `Nombre: ${this.nombre}, Precio: ${this.precio}`;
    }
}

class Pedido {
    constructor(cliente, restaurante, detallesPedido) {
        this.cliente = cliente;
        this.restaurante = restaurante;
        this.detallesPedido = detallesPedido;
        this.estadoPedido = "En proceso";
    }

    actualizarEstado(estado) {
        this.estadoPedido = estado;
    }

    calcularTotal() {
        // Lógica para calcular el total del pedido
    }
}
