window.onload=iniciar;

function iniciar(){
	document.formulario.comprobar.onclick=comprobarnombre;
}

function comprobarnombre(){
	var nombreminuscula=document.formulario.nombre.value.toLowerCase();
	var cadena = nombreminuscula.toLowerCase(); 
	var adicionales="ñáéíóúü";
	var escorrecto=true;
	
	//la longitud de la cadena va a estar comprendida entre 3 y 27 caracteres
	if (cadena.length < 3 || cadena.length > 27)
			escorrecto=false
	
	//la cadena empieza por letra
	else if ((cadena.charAt(0) < "a" || cadena.charAt(0)>"z") && 
		!adicionales.includes(cadena.charAt(0)))
			escorrecto=false
	
	// la cadena termina por letra 
	else if ((cadena.charAt(0) < "a" || cadena.charAt(0)>"z") && 
		!adicionales.includes(cadena.charAt(0)))
			escorrecto=false
	
	else {
	// la cadena en medio puede tener letras, espacios, guiones, y los caracteres ºª/
		var posicion=1;
		var otros="-ºª/ ";
		
		while (espalabra && posicion < cadena.length -1){
			if ((cadena.charAt(posicion) < "a" || cadena.charAt(posicion)>"z") && 
				!adicionales.includes(cadena.charAt(posicion)) &&
				!otros.includes(cadena.charAt(posicion)))
					escorrecto=false;
			posicion+=1;
		}
	}
	if (escorrecto)
		document.formulario.mensaje.value="El nombre es correcto";
	else 
		document.formulario.mensaje.value="Error, el nombre no es correcto";
}