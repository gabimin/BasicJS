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

// pueden hacerse más de un else if, tantos como se necesiten

// Ejemplo:

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación")
} else if (edad > 18) {
    console.log("Puedes votar nuevamente")
} else {
    console.log("Aún no puedes votar")
}


/*

OPERADOR TERNARIO: permite generar if y else en una sola línea



condition ? true : false

*/

// Ejemplo:

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";

console.log(resultado);

// imprime Sí soy un uno porque se está cumpliendo la condición que está antes de ?