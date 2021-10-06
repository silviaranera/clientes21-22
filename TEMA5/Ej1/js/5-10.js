window.onload=iniciar;

function iniciar(){
	document.formulario.comprobar.onclick=comprobarurl;
}

function comprobarurl(){
	var url = document.formulario.url.value.toLowerCase();
	let adicionales= "ñáéíóúàèìòùäëïöü";
    var esurl= true;
    var www= "www.";
	var http= "http://";
	var http= "https://";

	//Empieza por http o https seguido de www.
    if	((url.charAt(i)!="http://" || url.charAt(i)!="https://") && url.charAt(i)!="www.") {
		esurl=false
    }
   
	//Sigue por una letra
	else if ((url.charAt(i) < "a" || url.charAt(i)>"z")){
		esurl=false
    }
    
	else if (){
		var posipunto = url.lastIndexOf(".");

		if (posipunto==-1) {
			esurl=false;
		}
		else {
			var urlpunto = url.substring(posipunto-1);
			//Antes del punto una subcadena con dígitos, letras o guion y a continuación un punto
			for (var i=0; i<posipunto; i++) {

				if ((urlpunto.charAt(i) < "a" || urlpunto.charAt(i)>"z") &&
					!adicionales.includes(urlpunto.charAt(i)) &&
					(urlpunto.charAt(i)<"0" || urlpunto.charAt(i) > "9") && 
					url.charAt(i)!="-")
						esurl=false;{
				}		
			}					
					
			var urlterminacion=url.substring(posipunto+1);
			//Despues del punto va a terminar con entre dos y cuatro letras
			var posifinal=urlterminacion.length;

			if ((urlterminacion.length < 2 || urlterminacion.length > 4)) {
				esurl=false;
			} else {
				for (var i= 0; i<posifinal; i++) {
					if (urlterminacion.charAt(i)<"a" || urlterminacion.charAt(i)>"z")&&
					!adicionales.includes(urlpunto.charAt(i)) {
						esurl=false;
					}
				}
			}						
		}
	}
		
	
    if (esurl)
		document.formulario.mensaje.value="La URL es correcta"
	else 
		document.formulario.mensaje.value="Error, la URL no es correcta";
	 
}



