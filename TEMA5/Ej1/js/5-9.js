window.onload=iniciar;

function iniciar(){
	document.formulario.comprobar.onclick=comprobaremail;
}

function comprobaremail(){

	var email = document.formulario.email.value.toLowerCase();
	let adicionales= "ñáéíóúàèìòùäëïöü";
    var esemail= true;
    var arroba= "@";
    var punto= ".";

	//Empieza por una letra
    if	((email.charAt(0) < "a" || email.charAt(0)>"z") && !adicionales.includes(email.charAt(0))) {
		esemail=false
    }
   
    else {
		var posiarroba = email.indexOf("@"); 

		if (posiarroba==-1) {
			esemail=false;
		}

		else {
			for (var i=1; i<posiarroba -1; i++) {
				//Entre la letra inicial y la letra/digito, pueden ir letras, numeros, guion o punto
				if ((email.charAt(i) < "a" || email.charAt(i)>"z") && 
				!adicionales.includes(email.charAt(i)) &&
                (email.charAt(i)<"0" || email.charAt(i) > "9") && 
				email.charAt(i)!="-" && email.charAt(i)!=".") {
					esemail=false;
				}
			}
				// Antes del arroba va a seguir una letra o un dígito
			if ((email.charAt(posiarroba -1) < "a" || email.charAt(posiarroba -1)>"z") &&
                !adicionales.includes(email.charAt(posiarroba -1)) && 
				(email.charAt(posiarroba -1)<"0" || email.charAt(posiarroba -1) > "9")) {
					esemail=false;
			
			} else {
				var posipunto = email.lastIndexOf(".");

				if (posipunto==-1) {
					esemail=false;
				}
				else {
					var emailpunto = email.substring(posiarroba+1, posipunto);
					//Despues del arroba una letra a continuación una subcadena con dígitos, letras o guión, le sigue una letra o un dígito, a continuación un punto
					for (var i=0; i<posipunto; i++) {

					if ((emailpunto.charAt(i) < "a" || emailpunto.charAt(i)>"z") &&
						!adicionales.includes(emailpunto.charAt(i)) &&
						(emailpunto.charAt(i)<"0" || emailpunto.charAt(i) > "9"))
							esemail=false;
						
					}					
					
					var emailterminacion=email.substring(posipunto+1);
					//Despues del punto va a terminar con entre dos y cuatro letras
					var posifinal=emailterminacion.length;

					if ((emailterminacion.length < 2 || emailterminacion.length > 4)) {
						esemail=false;
					} else {
						for (var i= 0; i<posifinal; i++) {
							if (emailterminacion.charAt(i)<"a" || emailterminacion.charAt(i)>"z")&&
							!adicionales.includes(emailpunto.charAt(i)) {
								esemail=false;
							}
						}
					}
				}
			}
		}
    }
   
    if (esemail)
		document.formulario.mensaje.value="El correo es correcto"
	else 
		document.formulario.mensaje.value="Error, el correo no es correcto";
	 
}
