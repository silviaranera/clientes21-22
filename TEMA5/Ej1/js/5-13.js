window.onload=inicio;

function iniciar(){
	document.formulario.comprobar.onclick=palindromo; 
} 

function palindromo() {
	
	  var cadena = document.formulario.palindromo.value;

  // Pasar a minusculas la cadena
	  var cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
	  var letrasEspacios = cadenaOriginal.split("");

  // Eliminar los espacios en blanco 
	  var cadenaSinEspacios = "";
	  
	  for(i in letrasEspacios) {
		if(letrasEspacios[i] != " ") {
		  cadenaSinEspacios += letrasEspacios[i];
		}
	  }
  // Convertir otra vez en array
	  var letras = cadenaSinEspacios.split("");
	  var letrasReves = cadenaSinEspacios.split("").reverse();
  
  //Verifico que son iguales
	  var iguales = true;
	  
	  for(i in letras) {
		if(letras[i] != letrasReves[i]) {
		  iguales=false;
		  break;
		}
	  }

	if(iguales)
		document.formulario.mensaje.value="Es un palindromo"  		
	else
		document.formulario.mensaje.value="No es un palindromo" ; 
	
}

