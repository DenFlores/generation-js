/*
arreglos
*/

const comidas = ['Pozole', 'Quesadillas','Tacos'];
console.log(comidas.length);

/* push: agrega al final
 pop: quita un elemtno del final
  unshift: agrega un elemento al principio
   shift*/

   comidas.push('Torta');
   console.log(comidas);

   comidas.unshift('Pancita');
   console.log(comidas);

   comidas.shift();
   console.log(comidas);

   /*
   forEach - ayuda a realizar una acción por cada
   elemento de nuestro arreglo*/
   
   /*console.log(comidas[0]);
   console.log(comidas[1]);
   console.log(comidas[2]);*/

   comidas.forEach(function(el){
       console.log(el);

   })


   const numeros = [1, 2, 3, 4];
   console.log(numeros);
   numeros.forEach(function (el){
       let  suma= el + 1; 
       console.log(numeros);

   })

   /* ejercicio*/
   const arr = []

   function suma(num){
       let sumNum = num +1;
       return arr.unshift(sumNum);

   }
   suma(3);
   suma(5);
   suma(6);
   suma(8);
   suma(9);


   console.log(arr);