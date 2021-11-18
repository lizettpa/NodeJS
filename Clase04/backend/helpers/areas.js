let calcularAreaCilindro = (radio, altura)=>{
    return (2*Math.PI*(radio**2))+(altura*(2*Math.PI*radio))
}

let calcularAreaEsfera = (radio)=>{
    return (4*Math.PI*radio*2)
}

let calcularAreaCubo = (arista)=>{
    return (6*(arista*arista))
}
module.exports = {
    calcularAreaCilindro,
    calcularAreaEsfera,
    calcularAreaCubo
}