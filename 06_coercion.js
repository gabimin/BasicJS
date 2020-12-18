// Coerción es la forma en la que podemos cambiar un tipo de valor a otro

// Existen dos tipos de coerción:

// Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.

// Coerción explicita = es cuando obligamos a que cambie el tipo de valor.



// Coerción implícita: 

var a = 20;

var b = a + "";

b
// resultado >"20"


// más ejemplos:

var a = [1, 2];
var b = [3, 4];

a + b
console.log(a + b);

// resultado >1,23,4

// En este ejemplo, por la concatenación, ambos arrays son obligados a convertirse en strings, y luego se juntan.


var a = 4 + "7";
typeof a

// resultado > "string"

// la concatenación junta los dos strings: 47


var b = 4 * "7";
typeof b

// resultado > "number"

// la coerción implícita supone que son números porque no está + de concatenación: 28

var a = 20;
var b = a + ""; //Aquí concatenamos para convertir la variable a string (coerción implícita)
console.log(b);



// Coerción Explícita:

var c = String(a);

var d = Number(c);

// Otro ejemplo

var a = 30;
var b = a.toString();

var c = "100";
var d = +c;

// Unary operator '+' de forma explícita convierte a número

// más ejemplos

var num1 = "3.14";
var num2 = 5 + +num1;

/*  

Number + Number = Number
Number + String = String
String + Number = String
String + String = String

*/

/*
ParseInt vs Number

ParseInt: Analiza la cadena desde el primer dígito, hasta que encuentre algo que no sea dígito y devuelve lo que haya analizado.
Ejemplo:
parseInt(“123hui”) //123
En este caso puede parsear “123” porque están empezando en el string , porque de otra manera si “123” está despues de “hui” el resultado sería NaN.
Ej:
parseInt(“123hui”) = 123
parseInt(“hui123”) = NaN


Number: Busca convertir toda la cadena en un número, por lo que al encontrarse con un elemento que no sea diginto nos dara como resultado NAN.
Ejemplo:
Number(“123hui”) //NaN

*/