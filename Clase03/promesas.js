const estudiantes = [
    {
        id: 1,
        nombre: "Camilo"
    },
    {
        id:2,
        nombre: "Sebas"
    },
    {
        id:3,
        nombre: "Laura"
    }
]

const cursoPorEstudiantes = [
    {
        idCurso: 1,
        idEstudiante:1,
        nombreCurso: "Desarrollo Web"
    },
    {
        idCurso: 2,
        idEstudiante:2,
        nombreCurso: "Desarrollo de videojuegos"
    }
]

const cursoNotaPorEstudiante = [
    {
        nombreCurso: "Desarrollo de videojuegos",
        idEstudiante: 1,
        nota1: 3,
        nota2: 4,
        nota3: 5
    }
]

const getEstudiante = (id) => {
    return new Promise((resolve, reject)=>{
        const estudiante = estudiantes.find(est => est.id == id)?.nombre
        estudiante? resolve(estudiante):reject(`No existe el estudiante con id ${id}`)
    })
}

const getNombreCursoPorEstudiante = (id) => {
    return new Promise((resolve, reject)=>{
        const cursoPorEstudiante = cursoPorEstudiantes.find(curso => curso.idEstudiante == id)?.nombreCurso
        cursoPorEstudiante? resolve(cursoPorEstudiante):reject(`No existe un curso para el estudiante con id ${id}`)
    })
}

const getCursoNotasPorEstudiante = (id) =>{
    return new Promise((resolve, reject)=>{
        const cursoNotasPorEstudiante = cursoNotasPorEstudiantes.find(notas => notas.idEstudiante == id && notas.nombreCurso == nombreCurso)?.notas
        cursoNotasPorEstudiante? resolve(cursoPorEstudiante):reject(`No existen notas en el curso ${nombreCurso} para el estudiante con id ${id}`)
    })
}

const id = 3

getEstudiante(id)
    .then(cursoPorEstudiante=>{
        console.log(cursoPorEstudiante.toUpperCase())
        return getNombreCursoPorEstudiante(id)
    })
    .then(curso =>{
        return getCursoNotasPorEstudiante(id,curso)
    })
    .then(notas =>{
        const{nota1,nota2,nota3} = notas
        console.log(`El promedio del estudiante es: ${(nota1+nota2,+nota3)/3}`)
        console.log(notas)
    })
    .catch(err=>{
        console.log(err)
    })