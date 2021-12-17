/* coleccion de elementos
cuentan con metodos o funciones que nos permiten ordenar o manipular los datos que nosotros almacenemos
*/
//manera1
const arreglo1 = [4, true, 'Hola'[1, 2, 6]];
console.log(arreglo1);
//manera2
const arreglo2 = Array.of(1, 'Hola', true);
console.log(arreglo2);

//manera3
const arreglo3 = new Array(3, true, 'adios');
console.log(arreglo3);

const frutas = ['manzana', 'naranjas', 'uvas', 'sandias'
, [1, 2, 3, 4, 5, ['A', 'B', 'C']]];
//notacion de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4])
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);
frutas[4][5].push('A');
console.log(frutas);

//Metodos
/*Length, ayuda a saber la longitud del arreglo */

const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* push = añade un elemento al final de nuestro arreglo*/

letras.push('E');
console.log(letras);
/*pop elimina automaticamente el ultimo elemento, no es necesario 
poner nada en los parentesis*/

letras.pop();
console.log(letras);

/* unshift = agrega un elemento al inicio de el arreglo*/

letras.unshift(1);
console.log(letras);

/*shift = elimina el primer elemento automaticamente
no es necesario poner nada en los parentesis*/

letras.shift();
console.log(letras);
