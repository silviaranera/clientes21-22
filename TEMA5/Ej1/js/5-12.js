window.onload=iniciar;

function iniciar(){
	document.formulario.comprobar.onclick=comprobardireccion;
}

function comprobardireccion(){
	
	let cadena=document.formulario.direccion.value.toLowerCase();
	let adicionales="ñáéíóúü";
	let esdireccion=true;
	
	//la longitud de la cadena de 8 a 42
	if (cadena.length < 8 || cadena.length > 42)
			esdireccion=false
	
	//la cadena empieza por letra
	else if ((cadena.charAt(0) < "a" || cadena.charAt(0)>"z") && 
		!adicionales.includes(cadena.charAt(0)))
			esdireccion=false
	
	// la cadena termina por letra 
	else if ((cadena.charAt(cadena.length -1) < "a" || cadena.charAt(cadena.length -1)>"z") && 
			!adicionales.includes(cadena.charAt(cadena.length -1)))
			esdireccion=false
	
	else {
	// la cadena en medio puede tener letras, números, y los caracteres ºª/-
		let posicion=1;
		let otros="-ºª/";
		while (espalabra && posicion < cadena.length -1){
			if ((cadena.charAt(posicion) < "a" || cadena.charAt(posicion)>"z") && 
				!adicionales.includes(cadena.charAt(posicion)) && 
				(cadena.charAt(posicion)<"0" || cadena.charAt(posicion) > "9") &&
				!otros.includes(cadena.charAt(posicion)))
					esdireccion=false;
			posicion+=1;
		}
	}
	if (esdireccion)
		document.formulario.mensaje.value="La direccion es correcta"
	else 
		document.formulario.mensaje.value="Error, la direccion no es correcta";
}