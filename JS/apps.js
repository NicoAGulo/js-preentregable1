let totalGeneral = 0,
    contadorIngredientes = 0,
    listadoIngredientes = '\n listado de ingredientes :',
    costoDeProductoFinal = 0,
    precioDeBulto = 0,
    nombreEnLista = [];


function solicitarDatosUsuario() {
    let nombre = prompt('Ingrese su nombre: ')
    let apellido = prompt('Ingrese su apellido: ')


    let genero = prompt('Ingrese una "F" para femenino, "M" para masculino o "X" para otros:').toLowerCase();

    while (genero !== 'f' && genero != 'm' && genero != 'x') {
        alert('Error de tipeo de genero. Intente nuevamente.')
        genero = prompt('Ingrese una "F" para femenino, "M" para masculino o "X" para otros:').toLowerCase();
    }




    let mensaje;

    const nombreCompleto = nombre + " " + apellido;

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
    let nombre, cantidad, precioDeBulto, medida;

    nombre = prompt("Ingrese nombre del ingrediente: ");
    precioDeBulto = parseFloat(prompt("Ingrese el precio del ingrediente comprado: "));
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
            unidadesDisponibles = (cantidad * 1000) / 75 //considerando que para el producto final unitario siempre se utilizan 75 gramos de un ingrediente. Se realiza una conversion de kilogramos a gramos.
            break;
        case 'g':
            unidadesDisponibles = cantidad / 75 //considerando que para el producto final unitario siempre se utilizan 75 gramos de un ingrediente.
            break;

        default:
            alert('No ha introducido una medida valida, en la proxima ocasion vuelva a intentarlo')
            break;
    }

    costoUnitario = calcularCostoUnitario(precioDeBulto, unidadesDisponibles); //precio del costo unitario

    contadorIngredientes++;
    totalGeneral += precioDeBulto;



    listadoIngredientes += '\n\n Ingrediente nro ' + contadorIngredientes + ' | Nombre: ' + nombre + ' | Cantidad: ' + cantidad + ' | Costo por unidad: $' + costoUnitario + ' | COSTO TOTAL: $' + precioDeBulto;

    console.log('La lista es: ' + nombreEnLista)
}

function calcularCostoUnitario(precioDeBulto, unidadesDisponibles) {
    //Redondeo para abajo para evitar problemas de stock.
    let total = Math.floor(precioDeBulto / unidadesDisponibles);

    costoDeProductoFinal += total;
    return (total);
}

function mostrarInfo() {
    listadoIngredientes += '\n\n\n El total a pagar de todos los ingredientes  es de $' + totalGeneral + '\n El costo de hacer un solo producto es de $' + costoDeProductoFinal;
    alert(listadoIngredientes);
    console.log(listadoIngredientes);
    alert('El costo del producto unitario con los ingredientes seleccionados es de: $' + costoDeProductoFinal)

}





solicitarDatosUsuario();

while (confirm('Continuamos?')) {
    agregarIngredientes();
}


