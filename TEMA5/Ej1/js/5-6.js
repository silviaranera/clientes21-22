window.onload = iniciar;

function iniciar (){
	document.formulario.comprobar.onclick = comprobarcadena;
}

function comprobarcadena (){
	var cad = document.formulario.cadena.value;
	var subcad = document.formulario.vocal.value;
	  
    var cadminus = cad.toLowerCase(); 
    var cadjunta = cadminus.replace(/ /g,"");

    var subcadminus = subcad.toLowerCase(); 
    var subcadunta = subcadminus.replace(/ /g,"");

    var cont=0;

   while(cadjunta.includes(subcadjunta)){
		cadjunta = cadjunta.slice(cadjunta.indexOf(subcadjunta)+subcadjunta.length);
		cont++;
	}
    document.formulario.mensaje.value=cont;
}


