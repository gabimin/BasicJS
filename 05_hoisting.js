var miNombre; // a veces aún no tenemos el valor

miNombre = "gabi";

// or:

var miNombre = "gabi";


hey()

function hey() {
    console.log("hola " + miNombre)
}

var miNombre = "gabi";

// Las variables y las funciones se procesan antes de ejecutar cualquier código. JS automáticamente declara e inicializa (hoisting) a todas las funciones antes del código pero no hace los mismo con las variables. A las variables sólo las declara y quedan undefined hasta que se les asigna un valor. 

// Por eso si mandamos a llamar (inicializamos) una función antes de declararla ésta va a funcionar siempre y cuando a las variables que contiene se les haya asignado un valor (inicializado). Si no es así el resultado dará una variable undefined.

// Por buenas prácticas todas las variables tienen que declararse e inicializarse al inicio del código para evitar el problema de ocupar una función cuya variable todavía no tenga un valor.


// Ejemplos

// Con variables: Qué resultado esperas que nos aparezca si corremos este ejemplo? > undefined

console.log(miNombre);

var miNombre = "Gabi";

// Lo que en realidad sucede en el código por el hoisting

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Gabi";


// Con funciones: resultado > Hola undefined

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Gabi';

// Lo que sucede con el procesamiento del código por el hoisting, donde las funciones se declaran e inicializan antes de la declaración de variables: 

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Gabi';