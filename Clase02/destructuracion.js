let empleado = {
    'nombre': 'Lucas',
    'apellido': 'Rave',
    'edad': 34
}

console.log(empleado)
console.log(empleado.nombre, empleado.apellido, empleado.edad)

function imprimirNombreApellidoEmpleado({nombre, apellido}){
    console.log(nombre, apellido)
}

const {nombre, apellido, edad} = empleado

console.log(nombre, apellido)

imprimirNombreApellidoEmpleado(empleado)

const miembrosDeFamilia = ["padres", "hijos", "nietos"]

const [fam1, fam2, fam3] = miembrosDeFamilia

console.log(fam1)