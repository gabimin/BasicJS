// Loops: for y for... of

// for

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i])
}


// for ... of

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}