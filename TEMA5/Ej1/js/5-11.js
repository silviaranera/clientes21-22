window.onload=iniciar;

function iniciar(){
	document.formulario.comprobar.onclick=comprobarlocalidad;
}

function comprobarlocalidad(){
	
	let cadena=document.formulario.localidad.value.toLowerCase();
	let adicionales="ñáéíóúü";
	let eslocalidad=true;
	
	//la longitud de la cadena de 7 a 35 caracteres 
	if (cadena.length < 7 || cadena.length > 35)
			eslocalidad=false
	//la cadena empieza por 3 letras
	else if ((cadena.charAt(3) < "a" || cadena.charAt(3)>"z") && 
		!adicionales.includes(cadena.charAt(3)))
			eslocalidad=false
	// la cadena termina por 2 letras 
	else if ((cadena.charAt(cadena.length -2) < "a" || cadena.charAt(cadena.length -2)>"z") && 
			!adicionales.includes(cadena.charAt(cadena.length -2)) )
			eslocalidad=false
	else {
	// la cadena en medio puede tener letras y espacios
		let posicion=1;
		let otros=" ";
		while (espalabra && posicion < cadena.length -1){
			if ((cadena.charAt(posicion) < "a" || cadena.charAt(posicion)>"z") && 
				!adicionales.includes(cadena.charAt(posicion)) &&
				!otros.includes(cadena.charAt(posicion)))
					eslocalidad=false;
			posicion+=1;
		}
	}
	if (eslocalidad)
		document.formulario.mensaje.value="La localidad es correcta"
	else 
		document.formulario.mensaje.value="Error,la localidad no es correcta";
}