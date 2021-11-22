window.onload=function (){
	document.formulario.onsubmit=comprobar;
}

function comprobar() {
	let enviar=true;
	document.formulario.errnombre.value="";
	document.formulario.errcodemp.value="";
	document.formulario.errnif.value="";
	document.formulario.errTipPer.value="";
	
	document.formulario.errdompar.value="";
	document.formulario.errtelefpar.value="";
	document.formulario.errlocpar.value="";
	document.formulario.errcodpospar.value="";
	
	document.formulario.errfchacons.value="";
	document.formulario.errnumtrab.value="";
	document.formulario.errnumfab.value="";
	
	document.formulario.errsector.value="";
	document.formulario.errtrabemp.value="";
	document.formulario.errtipempre.value="";
	
/*La Razón Social/Apellidos y Nombre va a empezar por una letra, y en su interior puede contener letras, dígitos, y los 
caracteres, “ª”, “º”, “-“ y “.”. Va a terminar por una letra, un dígito o un punto.*/
	let razon=document.formulario.nombre.value.toLowerCase().trim();
	let expRegRazon=/^[a-záéíóúñ][a-záéíóúñüªº\-\.]+[a-záéíóúñ0-9\.]$/i;
	//let expRegRazon=new RegExp("^[a-záéíóúñ][a-záéíóúñüªº\-\.]+[a-záéíóúñ0-9\.]$","i");
	
	if (!expregRazon.test(razon)){
		document.formulario.errnombre.value="La razón social no es valida segun el formato establecido";
		enviar=false;
	}
	
/*El Código de la empresa va a contener letra y dígitos y va a tener un número de caracteres comprendidos entre 5 y 10.*/
	let codigo=document.formulario.codemp.value.toLowerCase().trim();
	let expRegCodigo=new RegExp("^[a-záéíóúñü0-9]{5,10}$","i");
	//let expRegCodigo=/^[a-záéíóúñü0-9]{5,10}$/i;
	
	if (!expRegCodigo.test(codigo)) {
		document.formulario.errcodemp.value="El código no es valido segun el formato establecido";
		enviar=false;
	}
	
/*El NIF/CIF de la empresa se debe validar que sea correcto.*/
	let vnifcif=document.formulario.nif.value.toLowerCase().trim();
	let expRegNIFCIF=/^([0-9xyzklma-hjuvpqrsw]\d{7}[a-z0-9])$/i;
	//let expRegNIFCIF= new RegExp("^([0-9xyzklma-hjuvpqrsw]\\d{7}[a-z0-9])$","i");
	
	if (!expregNIF.test(vnifcif)) {
		document.formulario.errnif.value="N.I.F./C.I.F. es erróneo";
		enviar=false;
	}
	
/*La Dirección va a comenzar por una letra, va a terminar por una letra o un dígito y en medio va a poder contener letras, dígitos, 
y los caracteres “ª”, “º”,“-“, “/” y “.”.*/
	let direc=document.formulario.dompar.value.toLowerCase().trim();
	let expRegDom=/^[a-záéíóúñ][a-záéíóúñü0-9ªº\-\/\.]+[a-záéíóúñ0-9]$/i;
	//letExpRegDom=new RegExp("[a-záéíóúñ][a-záéíóúñü0-9ªº\-\/\.]+[a-záéíóúñ0-9]$","i");
	
	if (!expRegDom.test(direc)) {
		document.formulario.errdompar.value="El domicilio particular es erróneo";
		enviar=false;
	}
	
/*La Localidad va a empezar y terminar con letra y en medio va a contener letras o espacio. */
	let locali=document.formulario.locpar.value.toLowerCase().trim();
	let expRegLocal=new RegExp("^[a-záéíóúñ][a-záéíóúñ ]+[a-záéíóúñ]$","i");
	//let expRegLocal=/^[a-záéíóúñ][a-záéíóúñ ]+[a-záéíóúñ]$/i;
	
	if (!expRegLocal.test(locali)) {
		document.formulario.errlocpar.value="La localidad particular errónea";
		enviar=false;
	}
	
		
	var listaProvincias= new Array("Álava","Albacete", "Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres",
	"Cádiz","Castellón","Ciudad Real","Córdoba","A Coruña","Cuenca","Girona","Granada","Guadalajara","Gipuzkoa",
	"Huelva","Huesca","Jaén","León","Lleida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Ourense","Asturias","Palencia",
	"Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel",
	"Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla");
	
	
/*El código postal puede tener valores comprendidos entre 1000 y 52999.*/	
	let expRegPostal=/^((0?[1-9])|([1234]\d)|(5[0-2]))\d{3}$/;
	//let expRegPostal= new RegExp("^((0?[1-9])|([1234]\\d)|(5[0-2]))\\d{3}$");
	
	let codpost=document.formulario.codpospar.value.toLowerCase().trim();
	if (!expRegPostal.test(codpost)) {
		document.formulario.errcodpospar.value="El código Postal particular es erróneo";
		enviar=false;
	} else {
		let codpro=Math.trunc(parseInt(codpost,10)/1000)-1;
		document.formulario.propar.value=listaProvincias[codpro];
	}
	
/*El Teléfono contiene nueve dígitos y solamente puede empezar por 9, 6 y 7.*/
	let expRegTel= new RegExp("^[967]\\d{8}");
	//let expRegTel=/^[967]\d{8};
	
	let telefo=document.formulario.telefpar.value.toLowerCase().trim();
	if (!expRegTel.test(telefo)) {
		document.formulario.errtelefpar.value="El teléfono particular es erróneo";
		enviar=false;
	}
	
/*No hay FAX
	El Fax contiene nueve dígitos y empieza por 9.
	let expRegFax=new RegExp("^9\\d{8}$");
	let expRegFax=/^9\d{8}$;
*/
	
	
/*Los números que se introducen van a ser siempre positivos.*/
	let expRegNum=/^[1-9][0-9]*$/;
	//let expRegNum=new RegExp("[1-9][0-9]*$");
	
	//Numero de trabajadores
	let ntrab=document.formulario.numtrab.value.toLowerCase().trim();
	if (!expRegNum.test(ntrab)) {
		document.formulario.errnumtrab.value="El número de trabajadores es erróneo";
		enviar=false;
	}
	//Numero de fabricas
	let nfab=document.formulario.numfab.value.toLowerCase().trim();
		if (!expRegNum.test(nfab)) {
		document.formulario.errnumfab.value="El número de fabricas es erróneo";
		enviar=false;
	}
	
/*La Fecha puede tener uno ó dos dígitos para el mes y día y para el año va a poder tener dos o cuatro dígitos.*/	
	let fchacon=document.formulario.fchacons.value.toLowerCase().trim();
	let expRegFch=/^(((((0?[1-9])|([12]\d)|(3[01]))[\-\/]((0?[13578])|(1[02]))|((0?[1-9])|([12]\d)|(30))[\-\/]((0?[469])|(11)))[\-\/]\d{4})|
					(((((0?[1-9])|[12]\d))[\-\/](0?2[\-\/](([02468][048])|([13579][26])))))|
					(((0?[1-9])|(1\d)|(2[0-8]))[\-\/]0?2[\-\/]((\d{2}(([02468][1235679])|([13579][01345789])))|(([02468][1235679])|([13579][01345789]))00)))$/;
		
		if (!expRegFch.test(fchacon)) {
		document.formulario.errfchacons.value="La fecha de Constitución de la Empresa errónea";
		enviar=false;
	}
	
/*Se debe comprobar que en las agrupaciones de los botones de selección solamente uno esté seleccionado y en las casillas de 
verificación debe haber al menos uno seleccionado.*/
	
	//Sector/es Económicos
	let mensaje="";
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
		document.formulario.errSector.value="Debe seleccionar al menos un sectores económicos \n";
	}
	//Número de Trabajadores por Empresa y Tipo de Empresa
	let numtra=0;
	let numtip=0;
	let numper=0;
	for (let i=0; i < document.formulario.elements.length ; i++ ) {
		if (document.formulario.elements[i].type=="radio") {
			if (document.formulario.elements[i].checked) {
				if (document.formulario.elements[i].name=="numtraemp")
					numtra=1
				else if (document.formulario.elements[i].name=="persona")
					numper=1
				else 
					numtip=1;
			}
		}
	}
	if (numtra ==0) {
		enviar=false;
		document.formulario.errtrabemp.value="Debe seleccionar al menos un Número de Trabajadores por Empresa \n";
	}
	if (numtip ==0) {
		enviar=false;
		document.formulario.errtipempre.value="Debe seleccionar al menos un Tipo de Empresa \n";
	}
	if (numper ==0) {
		enviar=false;
		document.formulario.errTipPer.value="Debe seleccionar al menos un Tipo de persona \n";
	}
	return enviar;
	
}	