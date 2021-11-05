window.onload=function(){
	document.formulario.onsubmit=valida;
}

function valida{

	let enviar=true;
	let adicionales="áéíóúüñ";

/*La Razón Social/Apellidos y Nombre va a empezar por una letra, y en su
interior puede contener letras, dígitos, y los caracteres, “ª”, “º”, “-“ y “.”. Va a
terminar por una letra, un dígito o un punto*/

	let caracteresrazon="ªº-.";	
	let mensaje="";
	
	let razon=document.formulario.nombre.value.toLowerCase().trim();
	
	//Longitud minima de 3
	if (razon.length < 3) {
		mensaje+="La razón social no es valido segun el formato establecido \n";
		enviar = false;
	//Empieza por una letra
	} else if ((razon.charAt(0)<"a" || razon.charAt(0) > "z") && !adicionales.includes(razon.charAt(0))) {
		enviar=false;
		mensaje+="La razón social no es valido segun el formato establecido \n";
	//Termina letras digitos o punto
	} else if((razon.charAt(razon.length -1)<"a" || razon.charAt(razon.length -1) > "z") && 
			!adicionales.includes(razon.charAt(razon.length -1)))
		if ((razon.charAt(razon.length -1)<"0" || (razon.charAt(razon.length -1)>"9"))&& 
			(razon.charAt(razon.length -1)!=".")) {
			enviar=false;
			mensaje+="La razón social no es valido segun el formato establecido \n";
		//Puede contener letras digitos y caracteres
		} else {
			let i=1;
			let correcto=true;
			while (i < razon.length -1 && correcto) {
				if ((razon.charAt(i) < "a" || razon.charAt(i) > "z") && !adicionales.includes(razon.charAt(i)) && 
				!caracteresrazon.includes(razon.charAt(i)) && (razon.charAt(i)<"0" || (razon.charAt(i)>"9"))) {
					correcto=false;
					enviar=false;
					mensaje+="La razón social no es valida segun el formato establecido \n";
				}
				i=+1;
			}
		}
	else{
		enviar=false;
		mensaje+="La razón social no se adecua al formato establecido \n";
	} 

/*El Código de la empresa va a contener letra y dígitos y va a tener un número de
caracteres comprendidos entre 5 y 10.*/

	let codigo=document.formulario.codemp.value.toLowerCase().trim();
	
	//La longitud se comprende entre 5 y 10 caracteres
	if (codigo.length < 5 || codigo.length  > 10) {
		mensaje+="El Código de la Empresa no es valido segun el formato establecido \n";
		enviar=false;
	//Contiene letras y digitos
	} else {
		let indice = 0;
		let seguir=true;
		while (seguir && indice < codigo-length) {
			if ((codigo.charAt(indice)<"a" || codigo.charAt(indice) > "z") && !adicionales.includes(codigo.charAt(indice)) && 
				(codigo.charAt(indice) < "0" || codigo.charAt(indice) > "9" ) ) {
				mensaje+="El Código de la Empresa no es valido segun el formato establecido \n";
				enviar=false;
				seguir =false;
			}
			indice +=1;
		}
	}
/*El NIF/CIF de la empresa se debe validar que sea correcto, para ellos se
utilizará la función NIF-CIF, que acabamos de crear*/

	let vnifcif=document.formulario.nif.value.toLowerCase().trim();
	
	let resultadonif=NIFCIF(vnifnif);
	if  (resultadonif!="C1" && resultadonif!="N1" ) {
		mensaje+="Error, el NIF o el CIF introducido no es correcto\n";
		enviar=false;
	}

/*La Dirección va a comenzar por una letra, va a terminar por una letra o un dígito y 
en medio va a poder contener letras, dígitos, y los caracteres “ª”, “º”,“-“, “/” y “.”.*/

	let caracteresdire="ªº-./";
	
	let direc=document.formulario.dompar.value.toLowerCase().trim();
	
	//Longitud minimo de 3 caracteres
	if (direc.length < 3) {
		mensaje+="La Dirección del Domicilio Social/Particular no es valida segun el formato establecido \n";
		enviae = false;
	//Empieza por una letra
	} else if ((direc.charAt(0)<"a" || direc.charAt(0) > "z") && !adicionales.includes(direc.charAt(0))) {
		enviar=false;
		mensaje+="La Dirección no se adecua al formato establecido \n";
	//Termina por una letra o digito
	} else if((direc.charAt(direc.length -1)<"a" || direc.charAt(direc.length -1) > "z") && 
			!adicionales.includes(direc.charAt(direc.length -1)) &&
		    ((direc.charAt(direc.length -1)<"0" || (direc.charAt(direc.length -1)>"9")))) {
				enviar=false;
				mensaje+="La Dirección del Domicilio Social/Particular no es valida segun el formato establecido \n";
	//Contiene letras digitos y caracteres
	} else {
		let i=1;
		let continuar=true;
		while( continuar && i < direc.length - 1){
			if ((direc.charAt(indice)<"a" || direc.charAt(indice) > "z") && !adicionales.includes(direc.charAt(indice)) && 
				(direc.charAt(indice) < "0" || direc.charAt(indice) > "9" ) && !caracteresdire.includes(direc.charAt(indice))) {
				mensaje+="La Dirección del Domicilio Social/Particular no es valida segun el formato establecido \n";
				enviar=false;
				continuar =false;
			}
			indice +=1;
		}
	}

/*La Localidad va a empezar y terminar con letra y en medio va a contener letras o espacio.*/

	let localid=document.formulario.localpar.value.toLowerCase().trim();
	
	//Longitud minima de 3 caracteres 
	if (localid.length < 3) {
		mensaje+="La Localidad del Domicilio Social/Particular no es valida segun el formato establecido \n";
		enviae = false;
	//Empieza por un letra
	} else if ((localid.charAt(0)<"a" || localid.charAt(0) > "z") && !adicionales.includes(localid.charAt(0))) {
		enviar=false;
		mensaje+="La Localidad del Domicilio Social/Particular no es valida segun el formato establecido \n";
	//Termina por una letra
	} else if((localid.charAt(localid.length -1)<"a" || localid.charAt(localid.length -1) > "z") && 
			!adicionales.includes(localid.charAt(localid.length -1))){
		enviar=false;
		mensaje+="La Localidad del Domicilio Social/Particular no es valida segun el formato establecido \n";
	//Contiene letras y espacios
	} else {
		let indice=1;
		let seguir=true;
		while (seguir && inidce < localid.length -1) {
			if ((localid.charAt(indice)<"a" || localid.charAt(indice) > "z") && !adicionales.includes(localid.charAt(indice)) && 
				localid.charAt(indice)!=" " ) {
				enviar=false;
				mensaje+="La Localidad del Domicilio Social/Particular no es valida segun el formato establecido \n";
			}
			indice+=1;
		}
	}	
	
/*El código postal puede tener valores comprendidos entre 1000 y 52999.*/
/*Las cajas de texto de la provincia son de solo lectura y su valor se va a incluir cuando se introduzca un código postal correcto.*/

	var listaProvincias= new Array("Álava","Albacete", "Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres",
		"Cádiz","Castellón","Ciudad Real","Córdoba","A Coruña","Cuenca","Girona","Granada","Guadalajara","Gipuzkoa",
		"Huelva","Huesca","Jaén","León","Lleida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Ourense","Asturias","Palencia",
		"Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel",
		"Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla");

	
	let codpost=document.formulario.codpospar.value.toLowerCase().trim();
	
	//Longitud de 4 a 5 digitos
	if (codpost.length < 4 ||codpost.length > 5){
		enviar=false;
		mensaje+="El Código Postal del Domicilio Social/Particular no es valido segun el formato establecido \n";
	} else  {
		let indice=0;
		let seguir=true;
		while (indice < codpost.length && seguir){
			//Se compone de digitos del 0 al 9
			if (codpost.charAt(indice)<"0" || codpost.charAt(indice) > "9" ) {
				enviar=false;
				seguir=false;
				mensaje+="El Código Postal del Domicilio Social/Particular no es valido segun el formato establecido \n";
			}
			indice+=1;
		}
		if (seguir) {
			let numero=parseInt(codpost,10);
			//Numero comprendido entre 1000 y 52999
			if numero < 1000 || numero > 52999) {
				enviar=false;
				seguir=false;
				mensaje+="El Código Postal del Domicilio Social/Particular no es valido segun el formato establecido \n";
			}
		}
		//Para identificar el cp con la provincia
		if (seguir) {
			let codig=Math.trunc(numero / 1000)-1;
			document.formulario.propar.value=listaProvincias[codig];
		}
	}
	

/* El Teléfono contiene nueve dígitos y solamente puede empezar por 9, 6 y 7.*/

	let telefono=document.formulario.telefpar.value.toLowerCase().trim();
	
	//Logitud de 9 caracteres
	if (telefono.length != 9){
		enviar=false;
		mensaje+="El Teléfono del Domicilio Social/Particular no es valido segun el formato establecido \n";
	//Empieza por 9 7 o 6
	} else  if (telefono.charAt(0)!="9" && telefono.charAt(0)!="7" && telefono.charAt(0)!="6"){
		enviar=false;
		mensaje+="El Teléfono del Domicilio Social/Particular no es valido segun el formato establecido \n";
	//Contiene digitos del 0 al 9
	} else {
		let indice=1;
		let seguir=true;
		while (indice < telefono.length && seguir){
			if (telefono.charAt(indice)<"0" || telefono.charAt(indice) > "9" ) {
				enviar=false;
				seguir=false;
				mensaje+="El Teléfono del Domicilio Social/Particular no es valido segun el formato establecido \n";
			}
			indice+=1;
		}
	}

/*El Fax contiene nueve dígitos y empieza por 9*/
//No hay fax en el html de esta practica



/* Los números que se introducen van a ser siempre positivos.*/
	//Numero de trabajadores de la empresa 
	let ntrab=document.formulario.numtrab.value.toLowerCase().trim();
	
	if (ntrab.length == 0){
		enviar=false;
		mensaje+="El Número de Trabajadores de la Empresa no es un numero positivo \n";
	} else  {
		let indice=1;
		let seguir=true;
		while (indice < ntrab.length && seguir){
			if (ntrab.charAt(indice)<"0" || ntrab.charAt(indice) > "9" ) {
				enviar=false;
				seguir=false;
				mensaje+="El Número de Trabajadores de la Empresa no es un numero positivo \n";
			}
			indice+=1;
		}
		if(seguir){
			let num=parseInt(ntrab,10);
			if (num ==0){
				enviar=false;
				mensaje+="El Número de Trabajadores de la Empresa no es un numero positivo \n";
			}
		}
	}
	//Numero de fabricas de la empresa
	let nfab=document.formulario.numfab.value.toLowerCase().trim();
	
	if (nfab.length == 0){
		enviar=false;
		mensaje+="El Número de Fabricas de la Empresa NO es positivo \n";
	} else  {
		let indice=1;
		let seguir=true;
		while (indice < nfab.length && seguir){
			if (nfab.charAt(indice)<"0" || nfab.charAt(indice) > "9" ) {
				enviar=false;
				seguir=false;
				mensaje+="El Número de Fabricas de la Empresa NO es positivo \n";
			}
			indice+=1;
		}
		if(seguir){
			let num=parseInt(nfab,10);
			if (num ==0){
				enviar=false;
				mensaje+="El Número de Fabricas de la Empresa NO es positivo \n";
			}
		}
	}


/*La Fecha puede tener uno ó dos dígitos para el mes y día y para el año va a
poder tener dos o cuatro dígitos.*/

	let vfcha=document.formulario.fchacons.value.toLowerCase().trim();
	let fecha=true;
	let dia;
	let mes;
	let anio;
	let pos=vfcha.indexOf("/");
	let posmes;
	
	if (pos == -1) {
		pos=vfcha.indexOf("-");
	}
	
	if (pos== -1 || pos > 2) {
		fecha=false;
	} else {
		dia=vfcha.substr(0,pos);
		posmes=vfcha.indexOf("/", pos+1);
		if (posmes == -1) {
			posmes=vfcha.indexOf("-", pos + 1);
		}
		if (posmes == -1 || posmes > pos+3) {
			fecha=false;
		} else {
			mes=vfcha.substr(pos+1,posmes - pos - 1);
			anio=vfcha.substring(posmes+1,vfcha.lenght);
			if ( anio.length != 2 && anio.length!=4) {
				fecha=false;
			} else  {
				console.log("dia" + dia + "mes" + mes + "año" + anio);
				for (let indice=0; indice < dia.length;indice++) 
					if ( dia.charAt(indice) < "0" || dia.charAt(indice)> "9" )
						fecha=false;
				for (let indice=0; indice < mes.length;indice++) 
					if ( mes.charAt(indice) < "0" || mes.charAt(indice)> "9" )
						fecha=false;
				for (let indice=0; indice < anio.length;indice++) 
					if ( anio.charAt(indice) < "0" || anio.charAt(indice)> "9" )
						fecha=false;
				if (fecha) {
					let vanio=parseInt(anio);;
					if( anio.lenght==2) {
						if (vanio<15) {
							vanio+=2000;
						} else {
							vanio+=1900;
						}
					} 
					let vmes=parseInt(mes);
					let vdia=parseInt(dia);
					if (vmes < 1 || vmes > 12 ) {
						fecha=false;
					} else {
						switch (vmes) {
							case 1, 3, 5, 7, 8, 10, 12:
								if (vdia <1 || vdia > 31) {
									fecha=false;
								} 
								break;
							case 4, 6, 9, 11:
								if ( dia < 1 || dia > 30 ) {
									fecha = false;
								} 
								break;
							default:
								let bisiesto= true;
								if (vanno % 400 !=0 && vanno % 100==0 ) {
									bisiesto=false;
								} else  if (vanno % 4 != 0) {
									bisiesto=false;
								}
								let final=28;
								if (bisiesto) {
									final=29;
								} 
								if (dia <1 || dia > final) {
									fecha=false;
								} 
						}	
					}
				}
			}
		}
	}
	if(!fecha) {
		enviar=false;
		mensaje+="La fecha de Constitución de la Empresa es incorrecta \n";
	}

/*Se debe comprobar que en las agrupaciones de los botones de selección
solamente uno esté seleccionado y en las casillas de verificación debe haber al
menos uno seleccionado.*/

	//Sector Economico
	let numero=0;
	for (let i=0; i < document.formulario.elements.length ; i++ ) {
		if (document.formulario.elements[i].type=="checkbox") {
			if (document.formulario.elements[i].checked) {
				numero+=1;
			}
		}
	}
	if (numero ==0) {
		enviar=false;
		mensaje+="Debe seleccionar al menos un sector \n";
	}

	//Número de Trabajadores por Empresa y Tipo de Empresa
	
	let numtip=0;
	for (let i=0;i < tipempre.length;i++){
		if (tipempre[i].checked){
			numtip=1;
		}
	}
	if (numtip ==0) {
		enviar=false;
		mensaje+="Debe seleccionar al menos un Tipo de Empresa \n";
	}	
	if (mensaje.length>0){
		alert(mensaje);
	}
	return enviar;




}