window.onload=iniciar;

function iniciar(){
	document.formulario.comprobar.onclick=comprobarfecha;
}

function comprobarfecha(){
	
		var fech = document.formulario.fecha.value;
		var adicionales="/";
		var fechaSep = fecha.split("/");
		var diasMes=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
		var dia = fechaSep[0];
		var mes = fechaSep[1];
		var anio = fechaSep[2];

		var esfecha = true;

		if ((fech.charAt(0) < "0" || fech.charAt(0) > "9") && !adicionales.includes(fech.charAt(0))) {
			esfecha = false;                 
		}

		else if ((dia.length < 1 || diasMes[valorMes]) {

			esfecha=false; 
		}

		else if (anio.length != 4) {

			esfecha=false; 
		}

		if(esfecha)
			document.formulario.mensaje.value="La fecha introducida es correcta" 		
		else
			document.formulario.mensaje.value="Error, la fecha introducida no es correcta";
}




/*function comprobarfecha(fecha){
	
	let esfecha=true;
	let dia=valorFch.substring(0,2);
	let mes=valorFch.substring(3,5);
	let anio=valorFch.substring(6);
	let diasMes=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	
	if (!numero(dia))
		esfecha=false
	else if (!numero(mes))
		esfecha=false
	else if (!numero(anio))
		esfecha=false
	else {
		let valorDia=parseInt(dia,10);
		let valorMes=parseInt(mes,10);
		let valorAnio=parseInt(anio,10);
		
		if (valorAnio % 400 == 0)
			diasMes[1]=29
		
		else if ((valorAnio % 100 != 0) && (valorAnio % 4 == 0 ))
			diasMes[1]=29;
		
		if (valorAnio < 1700 || valorAnyo > 2100)
			esfecha=false
		
		else if (valorMes < 1 || valorMes > 12 )
			esfecha=false
		
		else if (valorDia < 1 || valorDia > diasMes[valorMes])
			esfecha=false;
	}
	
	if(esfecha)
			document.formulario.mensaje.value="La fecha introducida es correcta" 		
	else
			document.formulario.mensaje.value="Error, la fecha introducida no es correcta";;
}*/

