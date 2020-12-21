// Creamos una variable para acceder al valor del array a través de ella

var frutas = ["Manzana", "Banana", "Cereza", "Frutilla"];

// imprime todo el array:

console.log(frutas);

// el método .length devuelve la cantidad en número de elementos del array:

console.log(frutas.length);

//como acceder a uno o varios elementos del array con el número de índice:

console.log(frutas[2]);

// el método .push nos ayuda a agregar elementos al final del array

var masFrutas = frutas.push("Uvas");

console.log(frutas);

// .pop elimina el último elemento del array, no necesita parámetro

var sacarUltima = frutas.pop();

console.log(frutas);

// imprime el elemento que se eliminó del array:

console.log(sacarUltima);

// .unshift agrega el elemento pasado como parámetro en primer lugar:

var agregaPrimero = frutas.unshift("Uvas");

console.log(frutas);

// .shift elimina el primer elemento del array, no necesita parámetro

var sacaPrimera = frutas.shift();

console.log(frutas);

console.log(sacaPrimera);

// .indexOf informa la posición del elemento en el array

var posicion = frutas.indexOf("Cereza");

console.log(posicion);

// Mando a llamar el elemento que está en determinado índice:

console.log(frutas[2]);