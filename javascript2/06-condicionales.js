/* 
condicionales se utilizan para tomar decisiones dentro de nuestro programa
*/
/*
if(condicion){

}
*/

const edad = parseInt(prompt('Ingresa tu edad: '));

if(edad >= 18 && edad <30){
    document.write('Eres un joven');
}
else if(edad>=30 && edad <60){
document.write('Eres un adulto');
}
else if(edad >=60){
    document.write('Eres un adulto mayor');

}
else{
    document.write('Eres un niño');

} 

