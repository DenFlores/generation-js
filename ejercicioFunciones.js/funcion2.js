function descuento(precio) {
	if (precio >= 0 && precio < 100) {
		precio = precio * 0.9;
		document.write("<h1>", "El precio con descuento es de: " + precio, "</h1>");
	} else {
		if (precio >= 100 && precio < 200) {
			precio = precio * 0.8;
			document.write("<h1>", "El precio con descuento es de: " + precio, "</h1>");
		} else {
			if (precio >= 200) {
				precio = precio * 0.7;
				document.write("<h1>", "El precio con descuento es de: " + precio, "</h1>");
			} else {
				document.write("<h1>", "No existen precios negativos", "</h1>");
			}
		}
	}
}

let precio = parseFloat(prompt("Ingresa el valor del precio: "));

descuento(precio);
