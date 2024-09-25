/*
const ingredientes = []

const agregarIngrediente = () => {
    const precioPorUnidad = 0;

    const nombre = prompt('ingrese el nombre del ingrediente comprado').toLowerCase();

    const precioDeCompra = parseFloat(prompt('ingrese el precio del bulto del producto comprado'));

    const cantidadOPeso = parseFloat(prompt('Ingrese el numero de unidades o del peso que tiene el bulto'));

    const medida = (prompt('Ingrese "u" o "unidad" si se trata de un bulto de unidades, "kg" o "g" para venta por granel'));



    switch (medida) {
        case 'u', 'unidad':
            precioPorUnidad = precioDeCompra / cantidadOPeso
            break;
        case 'kg':
            precioPorUnidad = precioDeCompra / ((cantidadOPeso * 1000) / 100) //suponiendo que cada 100gr es una unidad
            break;
        case 'g':
            precioPorUnidad = precioDeCompra / (cantidadOPeso / 100) //suponiendo que cada 100gr es una unidad
            break;
    }
}


class Ingrediente{
    constructor(nombre, precioDeCompra,cantidadOPeso){
        this.nombre= nombre
        this.precioDeCompra= precioDeCompra
        this.medida = medidad
    }
}

*/

let totalGeneral = 0,
    contadorIngredientes = 0,
    listadoIngredientes = '\n listado de ingredientes :',
    costoDeProductoFinal = 0;

function solicitarDatosUsuario() {
    let nombre = prompt('Ingrese su nombre: ')
    let apellido = prompt('Ingrese su apellido: ')


    let genero = prompt('Ingrese una "F" para femenino, "M" para masculino o "X" para otros:').toLowerCase();

    while (genero !== 'f' && genero != 'm' && genero != 'x') {
        alert('Error de tipeo de genero. Intente nuevamente.')
        genero = prompt('Ingrese una "F" para femenino, "M" para masculino o "X" para otros:').toLowerCase();
    }




    let mensaje;

    let nombreCompleto = nombre + " " + apellido;

    switch (genero) {
        case 'f':
            mensaje = 'Bienvenida ' + nombreCompleto + '!'
            break;
        case 'm':
            mensaje = 'Bienvenido ' + nombreCompleto + '!'
            break;
        case 'x':
            mensaje = 'Bienvenide ' + nombreCompleto + '!'
            break;

        default:
            alert('No ha introducido un genero valido, en la proxima ocasion vuelva a intentarlo')
            break;
    }
    alert(mensaje);
}

function agregarIngredientes() {
    let confirmacion = confirm('Desea agregar un ingrediente a su carrito de compras? \n');

    while (confirmacion) {
        ingresarDatosIngredientes();

        confirmacion = confirm('Desea agregar un ingrediente a su carrito de compras? \n');
    }

    if (contadorIngredientes > 0) {
        mostrarInfo();
    }
}

function ingresarDatosIngredientes() {
    let nombre, precio, cantidad, total;

    nombre = prompt("Ingrese nombre del ingrediente: ");
    precio = parseFloat(prompt("Ingrese el precio del ingrediente comprado: "));
    cantidad = parseFloat(prompt("Ingrese la cantidad del ingrediente comprado: \n"));
    medida = prompt('Segun corresponda ingrese "u" para ingrediente unitario o "kg"/"g" para ingrediente por granel').toLowerCase();

    while (medida !== 'u' && medida != 'kg' && medida != 'g') {
        alert('Error de tipeo de medida. Intente nuevamente.')
        let medida = prompt('Segun corresponda ingrese "u" para ingrediente unitario o "kg"/"g" para ingrediente por granel').toLowerCase();
    }

    switch (medida) {
        case 'u':
            unidadesDisponibles = cantidad //considerando que la compra es unitaria
            break;
        case 'kg':
            unidadesDisponibles = (cantidad * 1000) / 50 //considerando que para el producto final unitario siempre se utilizan 50 gramos de un ingrediente. Se realiza una conversion de kilogramos a gramos.
            break;
        case 'g':
            unidadesDisponibles = cantidad / 50 //considerando que para el producto final unitario siempre se utilizan 50 gramos de un ingrediente
            break;

        default:
            alert('No ha introducido una medida valida, en la proxima ocasion vuelva a intentarlo')
            break;
    }


    total = calcularTotal(precio, cantidad); //precio de la compra por bulto
    costoUnitario = calcularCostoUnitario(precio, unidadesDisponibles); //precio del costo unitario

    contadorIngredientes++;

    console.log({ nombre, precio, cantidad, total });
    listadoIngredientes += '\n\ningrediente' + contadorIngredientes + ' | Nombre: ' + nombre + ' | Precio: $' + precio + ' | Cantidad: ' + cantidad + ' | Costo por unidad:' + costoUnitario + '| TOTAL: $' + total;
}



function calcularTotal(precio, cantidad) {
    let total = precio * cantidad;
    totalGeneral += total;
    return (total);
}

function calcularCostoUnitario(precio, unidadesDisponibles) {
    //Redondeo para abajo para evitar problemas de stock.
    let total = Math.floor(precio / unidadesDisponibles);

    costoDeProductoFinal += total;
    return (total);
}

function mostrarInfo() {
    listadoIngredientes += '\n\n\n El total a pagar de todos los ingredientes  es de $' + totalGeneral;
    alert(listadoIngredientes);
    console.log(listadoIngredientes);
    alert('El costo del producto unitario con los ingredientes seleccionados es de: $' + costoDeProductoFinal)

}

solicitarDatosUsuario();
agregarIngredientes();


