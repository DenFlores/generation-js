/*
variable var se utilizaba anteriormente, son variables globales.
variable let es una variable de contexto solo vive en un bloque delimitado
*/
var numero = 3;
console.log(numero); // 40

if (true){
    var numero = 50;
    console.log(numero); //50


}
console.log(numero); //50

var texto = 'Bootcamp java';
console.log(texto); //bootcamp java

if (true){
    let texto = 'Cohorte 8';
    console.log(texto); //cohorte 8
    let numeroFavv = 9;
    console.log(numeroFavv);

}
console.log(texto); //bootcamp