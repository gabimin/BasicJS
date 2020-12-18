/*

if (lo que pongamos aquí tiene que ser verdad) {
para que lo que pongamos aquí pase ;
}

*/


if (true) {
    console.log("hola");
}

// imprime hola


if (false) {
    console.log("hola");
}

// no imprime nada


if (false) {
    console.log("soy verdadero")
} else {
    console.log("soy falso")
}

// en else no hay que validar nada, es un paso de default


if (true) {
    console.log("hola");
} else if () {
    xx
} else {
    xx
}


// Ejemplo:

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación")

} else if (edad > 18) {
    console.log("Puedes votar nuevamente")
} else {
    console.log("Aún no puedes votar")
}