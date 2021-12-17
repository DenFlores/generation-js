let compra = parseInt(prompt('Ingresa el monto de la compra:'));
let precioTotal;
if (compra >= 0 && compra < 100){
    precioTotal = compra*.9
    document.write("<h1>" + precioTotal + "</h1>");
}else if(compra >=100 && compra < 200){
    precioTotal = compra*.8
    document.write("<h1>" + precioTotal + "</h1>");
}else if(compra >=200){
    precioTotal = compra*.7
    document.write("<h1>" + precioTotal + "</h1>");
}else{
    alert("Me rompiste")
}
