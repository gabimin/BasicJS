// Scope: El contexto en el que los valores y las expresiones son visibles o pueden ser referenciados. Si una variable u otra expresión no está en el Scope- alcance actual, entonces no está disponible para su uso. Los Scope también se pueden superponer en una jerarquía, de modo que los Scope secundarios tengan acceso a los ámbitos primarios, pero no al revés.



// Depende de donde declares e inicialices una variable si vas a tener acceso a ella o no

// Scope global
// se refiere al alcance de las variables que se inicializan fuera de las funciones
// se puede utilizar e invocar desde cualquier lugar a esta variable.

var miNombre = "Gabi";


// Scope local : 
//Esta variable está dentro de un bloque de código, por lo que no se puede acceder a ella globalmente.
// se refiere a las variables que se generan sólo adentro de una función
// no se pueden acceder desde afuera de la función
// se pueden usar dentro de la función las variables globales


function nombre() {
    var miApellido = "Min"
    console.log(miNombre + " " + miApellido);
}

// >>>miApellido 
// undefined 
//NO nos entrega ningún valor puesto que la variable no está declarada globalmente.



// VER: Actualmente el Scope en JavaScript es a nivel de llaves, es decir, tu no puedes acceder a una variable que esté declarada dentro de un if por ejemplo desde el scope global



/*  Ejemplo del universo, un sistema solar, y un planeta.  */

// Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.

// Tenemos dos tipos de Scope, Scope Global y Scope Local.

// ===============

// Ejemplo de lo que es un Scope Global

var miNombre = "Gabi";

function nombre() {
    miNombre = "Alonso";
    return miNombre;
}

nombre();

console.log(miNombre);


// Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una funcion, esto genera un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global 

var miNombre = "Gabi"

function nombre() {
    var miApellido = "Min";
    return miNombre + " " + miApellido
}

nombre();

console.log(miNombre);
console.log(miApellido);


//  Ejemplos de como puede ayudar o crear error el tema del scope. 

// Ejemplo 1, cómo con una funcion podemos cambiar el valor de la variable global

var miNombre = "Gabi"

function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre);
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,

var miNombre = "Gabi"

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la funcion, nos puede crear un problema. 

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre);
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);