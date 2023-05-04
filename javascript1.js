//Punto 1
function Piramide(numero) {
    for (let i = 1; i <= numero; i++) {
      let fila = "";
      for (let space = 1; space <= i; space++) {
        fila += space + " ";
      }
      console.log(fila);
    }
  }

//Punto 2
function coinciden(array1, array2){
    return array1.filter(elemento => array2.includes(elemento));
}

//Punto 3
class Producto {
  constructor(nombre, precio, unidades) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
  }
}

class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

  agregarProducto(nombre, precio, unidades) {
    const productoExiste = this.productos.find(producto => producto.nombre === nombre);
    if (productoExiste) {
      console.log(`Ya existe ${nombre} con ${productoExiste.unidades} unidades`);
      return;
    }
    const producto = new Producto(nombre, precio, unidades);
    this.productos.push(producto);
    this.montoTotal += precio * unidades;
  }
}