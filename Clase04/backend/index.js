const http = require("http")
const {calcularAreaCilindro, calcularAreaEsfera, calcularAreaCubo} = require("./helpers/areas.js")
const colors = require("colors")

http.createServer((request,response)=>{
    const incomingUrl =new URL(request.url, `http://${request.headers.host}`)
    //console.log(incomingUrl)
    switch(incomingUrl.pathname){
        case '/cilindro':
            const radioCilindro = (incomingUrl.searchParams.get('radio'))
            const alturaCilindro = (incomingUrl.searchParams.get('altura'))
            response.write(`El area del cilindro es: ${calcularAreaCilindro(radioCilindro, alturaCilindro)}`)
            break;
        case '/esfera':
            const radioEsfera = (incomingUrl.searchParams.get('radio'))
            response.write(`El area de la esfera es: ${calcularAreaEsfera(radioEsfera)}`)
            break;
        case '/cubo':
            const aristaCubo = (incomingUrl.searchParams.get('arista'))
            response.write(`El area del cubo es: ${calcularAreaCubo(aristaCubo)}`)
            break;
        default:
            response.write(`Esa ruta no existe`)
            break;
    }
    response.end()
}).listen(8080, "localhost")
    console.log("Se inició el servidor",()=>{
})

console.log("Se inició el server")