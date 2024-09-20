const IVA = 1.21
let resultadoFinal

const calcularConsumoElectrico = (precioSinIva) => precioSinIva * IVA

const mostrarResultado = (costoFinal) => alert("El costo es de: " + costoFinal)

const pedirVatios = () => {

    let vatios = prompt("Ingresa la cantidad de Vatios (W) que tiene de potencia el aparato ").toLowerCase()

    if (vatios === "salir") {
        return "salir"
    }

    while ((vatios === "") || (vatios === null) || (isNaN(vatios) || vatios <= 0)) {
        vatios = prompt("Intente nuevamente o ingrese salir.")
    }

    return parseInt(vatios)
}

const calcEnergia = () => {

    let costoPorHora

    let costoDeAparato = pedirPrecio()

    if (costoDeAparato === "salir") {
        return "salir"
    }

    costoPorHora = calcularConsumoElectrico(costoDeAparato)

    costoPorHora = costoPorHora.toFixed(2)

    return costoPorHora

}

do {
    resultadoFinal = calcEnergia()

    if (resultadoFinal === "salir") {
        alert("El programa se ha terminado")
    } else {
        mostrarResultado(resultadoFinal)
    }
} while (resultadoFinal !== "salir")