const getEmpladoById = (id, callback) => {
    const employe = {
        id,
        nombre: "Carlos"
    }
    setTimeout(()=>{
        callback(employe)
    },2000)
}

const myCallback = (employe)=>{
    console.log(employe.id)
    console.log(employe.nombre)
}

getEmpladoById(123456, myCallback)