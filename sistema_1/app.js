
class Usuario {
    constructor(nombre, email, clave) {
      this.nombre = nombre;
      this.email = email;
      this.clave = clave;
      this.puntosAcumulados = 0;
    }
  
    acumularPuntos(actividad) {
      this.puntosAcumulados += actividad.puntosOtorgados;
    }
  
    canjearPuntos(producto) {
      if (this.puntosAcumulados >= producto.puntosNecesarios) {
        // Lógica para canjear puntos por producto
        return true;
      } else {
        return false;
      }
    }
  }
  
  class Producto {
    constructor(nombre, puntosNecesarios, cantidadDisponible, stock) {
      this.nombre = nombre;
      this.puntosNecesarios = puntosNecesarios;
      this.cantidadDisponible = cantidadDisponible;
      this.stock = stock;
    }
  
    actualizarStock(cantidad) {
      this.cantidadDisponible -= cantidad;
    }
  
    obtenerInfo() {
      return Nombre `${this.nombre}, Puntos necesarios: ${this.puntosNecesarios}`;
    }
  }
  
  class ProductoFisico extends Producto {
    constructor(nombre, puntosNecesarios, cantidadDisponible, stock, precio) {
      super(nombre, puntosNecesarios, cantidadDisponible, stock);
      this.precio = precio;
    }
  
    enviarProducto(usuario) {
      
    }
  }
  
  class ProductoDigital extends Producto {
    constructor(nombre, puntosNecesarios, cantidadDisponible, stock, URL) {
      super(nombre, puntosNecesarios, cantidadDisponible, stock);
      this.URL = URL;
    }
  
    descargar() {
      
    }
  
    obtenerProductoEmail(usuario) {
      
    }
  }