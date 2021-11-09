{ //Global scope -> Lo que se habla en casa
    let conversacionHogarena = "El perro se comió el pollo que estaba en la mesa"
    console.log("todos los del hogar pueden ver esta conversacion: " +conversacionHogarena)

    function Hijos(){
        let conversacionEntreHijos = "Perdimos 8 materias"
        console.log(conversacionEntreHijos)
        console.log("Los hijos del hogar pueden ver esta conversacion: " + conversacionHogarena) 
    }

    function Padres(){
        let conversacionEntrePadres = "Nuestra primera vez"
        console.log(conversacionEntrePadres)
        console.log("Los padres del hogar pueden ver esta conversacion: "+conversacionHogarena)
    }

    Hijos()
    Padres()
}