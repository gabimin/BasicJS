// Variables, constantes y scope de bloque en JavaScript

// El estandar actual de JavaScript tiene variables, constantes y niveles de bloque. 

// Variables de bloque: En ES6 se agrega una nueva forma de definir variables usando la palabra let, se diferencia de var en que el scope de una variable definida con let es, el bloque en el cual se encuentra la variable y no la función.

let x = 'Hola kEnAi';

if (true) {

    let x = 'Hola Jon';

    console.log(x); // Imprime en consola Hola Jon

}

console.log(x); // Imprime en consola Hola kEnAi

for (let i = 0; i < 5; i++) {

    console.log(i); // Imprime del 0 al 4

};

console.log(i); // Imprime Uncaught ReferenceError: i is not defined


// Constantes:

// Una constante es un tipo INMUTABLE, no puede cambiar una vez definida, se usa la palabra const en lugar de var, al igual que let su scope es de bloque, son tipos de sólo lectura y se le debe asignar un valor en el momento de su declaración. Son referencias inmutables, pero sus valores no necesariamente, por ejemplo en los objetos y arreglos se pueden agregar, modificar o eliminar elementos y propiedades de los mismos, siempre y cuando el objeto o arreglo no cambie de tipo de dato.


const DIEZ = 10;

DIEZ = 5;

console.log(DIEZ); // Imprime Uncaught TypeError: Assignment to constant variable


const hola = 'hola mundo';

hola = 'hola mundo'; // Imprime Uncaught TypeError: Assignment to constant variable


const PI;

PI = 3.141592653589793; //Imprime Missing initializer in const declaration


const obj = {};

obj.prop = 'x';

console.log(obj); //Imprime { prop: 'x' }

obj.prop = 'y';

console.log(obj); //Imprime { prop: 'y' }


const D = document;

console.log(D); //Imprime el objeto document

console.log(D.documentElement); //Imprime el elemento <html>



// Nivel de Bloques:

// En ES5 los ámbitos de declaración (scope) estaban diseñados a nivel de funciones, con ES6 podemos declarar funciones a nivel de bloque.

// En ES6, como en muchos otros lenguajes de programación, el bloque se define entre llaves y genera un nuevo scope (block scope).


//Sin bloques

function f() { return 1; }

console.log(f()); //Imprime 1


function f() { return 2; }

console.log(f()); //Imprime 2



//Con bloques

function f() { return 1; }

{

    console.log(f()); //Imprime 2

    function f() { return 2; }

    console.log(f()); //Imprime 2

}

console.log(f()); //Imprime 1