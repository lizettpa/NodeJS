function imprimirNombre(nombre){
    let nombreMayus = nombre.toUpperCase()
    console.log(nombreMayus)
}

const imprimirNombreM = (nombre) =>{
    let nombreM = nombre.toLowerCase()
    console.log(nombreM)
}
imprimirNombre("Lizett")
imprimirNombreM("Lizett")

function resMulti(numA, numB){
    return numA * numB
}

let resultado = resMulti(2,3)
console.log(resultado)

let resultadoDeMultiplicar = (numC, numD) => numC*numD

let resultadoFlecha = resultadoDeMultiplicar(3,3)
console.log(resultadoFlecha)