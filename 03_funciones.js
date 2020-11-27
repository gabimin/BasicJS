// Las funciones son procedimientos, un conjunto de pasos que realizarán una tarea o cálculo con ciertos valores.


// Declarativas

function miFuncion() {
    return 3;
}

//así la mando a llamar:
miFuncion();


// De expresión o anónimas porque la función no tiene un nombre. La mando a llamar con el nombre de la variable

var miFuncion = function(a, b) {
    return a + b;
}

//mando a llamar:
miFuncion();

// Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
// Cada parámetro va separado por una coma.
// Cada instrucción que tenga la función debe terminar con ; 
// Si queremos que una función nos dé un dato tenemos que usar la siguiente sintaxis:
// return El dato que queremos que nos dé;

// La diferencia principal radica en que mientras la primera es una declaración que forma parte de un programa global, la segunda es una expresión que forma parte de un punto concreto (y de una closure). Esto determina en qué momento ambas instrucciones son evaluadas por Javascript y cuándo pasan a estar disponibles en tiempo de ejecución.

// Las funciones declaradas son evaluadas antes que cualquier otra expresión. Incluso si la declaración se encuentra al final de todo un código fuente, ésta tendrá preferencia sobre aquellas expresiones que la precedan. 

// Sin embargo, si tratamos con funciones expresadas, éstas solo son evaluadas cuando el flujo natural de ejecución las alcanza. 

// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`)
}