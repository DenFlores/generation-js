/*
condicionales
if (condicion){
    bloque
}
else fi (condicion){
    bloque
}
    else{
    bloque
}
*/
/*
función
Bloque de dódigo reutilizable
function nombre(parametros){
    return
}
nombre(argumentos);
*/

function procesadoDeFrutas(manzanas, naranajas){
    let jugo = 'Jugo de ' + manzanas + ' manzanas y' +
    naranjas + ' naranjas. ' ;
    return jugo
}
let jugoDeManzana = procesadoDeFrutas(4,0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadoDeFrutas(0, 5);
console.log(jugoDeNaranja);

