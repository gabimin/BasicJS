/* Variable es una representación de algún lugar en la memoria para guardar datos
 */

var nombre = "Gabi"; // Nombre apuntará en algún lugar en la memoria (nosotros no sabemos donde, pero eso no es importante), pero dirá la señal de = tomará ese string y lo guardará en ese lugar y después si queremos utilizar ese valor, utilizaremos la variable Nombre para pedir que nos traigan ese string de memoria.
// = es operador de asignación 



// declarar

var edad;

// inicializar

edad = 25;
edad;


//array
var elementos = ["computadora", "celular"];


//objeto
var persona = {
    nombre: "Gabi",
    edad: 25
}

persona;


console.log(elementos[1]); // consola es de igual forma una función que le pertenece al navegador, con cierto espacio en memoria, y con un tipo de comportamiento especial. Donde Log es un método de la función