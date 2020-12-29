// While

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//cada vez que se cumpla un loop .shift va a sacar un elemento del array

while (estudiantes.length > 0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}