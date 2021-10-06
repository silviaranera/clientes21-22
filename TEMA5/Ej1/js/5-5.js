window.onload=iniciar;

function iniciar(){
	document.formulario.convertir.onclick=contar;
	
}

function contar (){
	var cuenta = document.formulario.cadena.value;
	
	sVocales = cuenta.match(/[aeiouáéíóúàèìòùäëïöü]/gi).length;
	sConsonantes = cuenta.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;
	
	document.formulario.vocal.value = sVocales;
	document.formulario.consonantes.value = sConsonantes;
}




