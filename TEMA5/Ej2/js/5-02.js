window.onload=iniciar;

function iniciar(){
	//Ejercicio 1 cambio de color de cajas
	document.primero.nif.onfocus=color;
	document.primero.nombre.onfocus=color;
	document.primero.apellidos.onfocus=color;
	document.primero.domicilio.onfocus=color;
	document.primero.localidad.onfocus=color;
	document.primero.cp.onfocus=color;
	document.primero.provincia.onfocus=color;
	//Ejercicio 2 vuelve a blanco las cajas
	document.primero.nif.onblur=blanco;
	document.primero.nombre.onblur=blanco;
	document.primero.apellidos.onblur=blanco;
	document.primero.domicilio.onblur=blanco;
	document.primero.localidad.onblur=blanco;
	document.primero.provincia.onblur=blanco;	
	//Ejercicio 3 codigo postal 
	document.primero.cp.onkeypress=solodigitos;	
	document.primero.cp.onblur=provincia;
	//Ejercicio 4 cuando se pulse Crtl+F3 cambiar fondo
	document.body.onkeyup=fondoimagen;	
	//Ejercicio 5 mostrar imagen cuando selecionemos una provincia
	document.primero.provin[0].onclick=imagenprovincia;
	document.primero.provin[1].onclick=imagenprovincia;
	document.primero.provin[2].onclick=imagenprovincia;
	document.primero.provin[3].onclick=imagenprovincia;	
	//Ejercicio 6 mostrar imagen cuando selecionemos una aficion
	document.primero.viajar.onclick=imagenaficion;
	document.primero.leer.onclick=imagenaficion;
	document.primero.musica.onclick=imagenaficion;
	document.primero.cine.onclick=imagenaficion;
	document.primero.deporte.onclick=imagenaficion;
	document.primero.cena.onclick=imagenaficion;	
	//Ejercicio 7 mensaje de bienvenida
	alert("¡Bienvenido!");	
	//Ejercicio 8 nombre apellidos y localidad solo permite letras y espacio en blanco
	document.primero.nombre.onkeypress=sololetras;
	document.primero.apellidos.onkeypress=sololetras;
	document.primero.localidad.onkeypress=sololetras;	
	//Ejercicio9 boton limpiar formulario
	document.primero.onreset=limpiar;	
	//Ejercicio 10 validacion
	document.primero.onsubmit=validacion;
}

//Ejercicio1.Cambiar color caja
function color(evento){
	let eventos=evento || window.event;	
	eventos.target.style.backgroundColor="red";
	eventos.target.value=" ";
}

//Ejercicio2.Que la caja vuelva al color blanco
function blanco(evento){
	let eventos=evento || window.event;
	eventos.target.style.backgroundColor="white";
}

//Ejercicio8.Nombre, apellidos y localidad solo permita letras y espacio en blanco
var adicionales=new Array("ñ","á","é","í","ó","ú","à","è","ì","ò","ù","ä","ë","ï","ö","ü"," ");

function sololetras(evento){
	let eventos=evento || window.event;
	let esletra=true;
	let caracter=String.fromCharCode(evento.charCode).toLowerCase();
	if ((caracter < "a" || caracter > "z") && (!adicionales.includes(caracter)) )
		esletra=false;
	return esletra;
}

//Ejercicio5.Mostrar imagen cuando selecionemos una provincia
function imagenprovincia(){
	document.primero.imgprovincia.src="imagenes/"+document.primero.provin.value+".jpg";
}

//Ejercicio3.Codigo postal que tenga solo digitos 
function solodigitos(evento){
	let eventos=evento || window.event;
	let esdigito=true;
	let caracter=String.fromCharCode(evento.charCode);
	if (caracter < "0" || caracter > "9" )
		esdigito=false;
	return esdigito;
}
//Poner la provincia segun el codigo postal que pongas
var listaprovincias= new Array("Álava","Albacete", "Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres",
		"Cádiz","Castellón","Ciudad Real","Córdoba","A Coruña","Cuenca","Girona","Granada","Guadalajara","Gipuzkoa",
		"Huelva","Huesca","Jaén","León","Lleida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Ourense","Asturias","Palencia",
		"Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel",
		"Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla");

function provincia(evento){
	let eventos=evento || window.event;
	if (eventos.target.value.trim().length >0){
		let palabra=eventos.target.value.trim();
		let correcto=true;
		let indice=0;
		while (correcto && indice < palabra.length){
			if (palabra.charAt(indice) < "0" || palabra.charAt(indice) > "9")
				correcto=false;
			indice+=1;
		}
		if (correcto) {
			let numero=parseInt(palabra,10);
			if (numero >= 1000 && numero <=52999) {
				let codi=Math.floor(numero / 1000);
				document.primero.provincia.value=listaprovincias[codi-1];
			} else {
				document.primero.provincia.value="";
				eventos.target.value="";
			}
		} else 
			evento.target.value="";
	}
}

//Ejercicio4.Cuando se pulse Crtl+F3 cambiar fondo 
//Las imagenes con separacion en el nombre no las coge, por lo que he cambiado el espacio por guion
var imagenes=new Array("Paris-Torre-Eiffel.jpg","Venecia-Plaza-San-Marcos.jpg","lisboa-torre-belem.jpg","atenas-acropoli.jpg","roma-fontana-di-trevi.jpg");
var indimagenes=0;

function fondoimagen(evento){
	let eventos=evento || window.event;
	if (eventos.keyCode=114 && eventos.ctrlKey) {
		document.body.style.backgroundImage="url(imagenes/"+imagenes[indimagenes]+")";
		indimagenes=(indimagenes + 1) % imagenes.length;
	}
}

//Ejercicio6.Mostrar imagen cuando selecionemos una aficion
var listaficiones=new Array();
var indicaficiones=0;
var paraficiones=false;
var controlaficiones;

function imagenaficion(evento){
	if (evento.target.checked) {
		listaficiones.push("imagenes/"+evento.target.value+".jpg");
		if (listaficiones.length > 1) {
			if (!paraficiones) {
				controlaficiones=setInterval(mostraraficiones,1000);
				paraficiones=true;
			}
		} else 
			document.primero.img_aficion.src=listaficiones[0];
	} else {
		let posicion = listaficiones.indexOf("imagenes/"+evento.target.value+".jpg");
		let mostrada=false;
		if (document.primero.img_aficion.src.includes(listaficiones[posicion]))
			mostrada=true;
		listaficiones.splice(posicion,1);
		if (listaficiones.length == 1) {
			clearInterval(controlaficiones);
			paraficiones=false;
			document.primero.img_aficion.src=listaficiones[0];
		} else if (listaficiones.length == 0)
			document.primero.img_aficion.src=""
		  else if (mostrada){ 
			mostraraficiones();
		  }
	}
}

function mostraraficiones() {
	indicaficiones=(indicaficiones+1) % listaficiones.length;
	document.primero.img_aficion.src=listaficiones[indicaficiones];
}

//Ejercicio9.Limpiar formulario
function limpiar(){
	document.body.style.backgroundImage=null;
	document.primero.imgprovincia.src=null;
	document.primero.img_aficion.src=null;
	if (controlaficiones)
		clearInterval(controlaficiones);
}

//Ejercicio10.Validacion de formulario
function validacion(){
	let enviar=true;
	let elnombre=document.primero.nombre.value.trim();
	let elapellidos=document.primero.apellidos.value.trim();
	let eldomicilio=document.primero.domicilio.value.trim();
	let ellocalidad=document.primero.localidad.value.trim();
	let elcodigopos=document.primero.cp.value.trim();
	let mensaje="";
	
	let correcto = true;

	switch(esNIF(document.primero.nif.value)){
		case 0:
			mensaje = "Se ha introducido un dato no válido. No es NIF ni un DNI.";
			alert(mensaje);
			correcto = false;
			break;
		case 2:
			mensaje = "Se ha introducido un NIF erróneo. El caracter de control es erróneo.";
			alert(mensaje);
			correcto = false;
			break;
		case 3:
			mensaje = "Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000.";
			alert(mensaje);
			correcto = false;
			break;
		default:
			mensaje = "";
			break;
	}

	if (!validarNombre(elnombre)){
		mensaje+="Error, el nombre introducido no es valido \n";
		enviar=false;
	}
	if (!validarApellidos(elapellidos)){
		mensaje+="Error, los apellidos introducidos no es valido \n";
		enviar=false;
	}
	if (!validarDomicilio(eldomicilio)){
		mensaje+="Error, el domicilio introducido no es valido \n";
		enviar=false;
	}
	if (!validarLocalidad(ellocalidad)){
		mensaje+="Error, la localidad introducidano es valido \n";
		enviar=false;
	}
	if (!validarCodigoPostal(elcodigopos)){
		mensaje+="Error, el código postal introducido no es valido \n";
		enviar=false;
	}
	
	if (!enviar)
		alert(mensaje);
	return enviar;
}


function esNIF(nifodni){
	let letrasNIF2 = ["X","Y","Z","L","K","M"];
	let letrasNIF = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    let retorno = 1;
	//Si no mide 9 caracteres, luego o es un Dni u otra cosa
    if(nifodni.length != 9){
        document.primero.nif.style.backgroundColor = "orange";
        //Tiene entre 6 y 8, puede ser dni, comprobamos que todos los caracteres son numéricos
		if(nifodni.length >=6 && nifodni.length<= 8){
            for(let i = 0; i < (nifodni.length); i++){
                if(!numeros.includes(nifodni.charAt(i))){
                    document.primero.nif.style.backgroundColor = "orange";
                    retorno = 0;
                }
            }
			//si lo son comprobamos que es un número mayor que 100000
            if(retorno == 1){//no es DNI
                if(parseInt(nifodni) < 100000){
                    retorno = 0;
                }else if(parseInt(nifodni) >= 100000){//Es un DNI
                    retorno = 3;
                }
            }
            
        }else{
            retorno = 0;
        }
    }else{
        if(letrasNIF2.indexOf(nifodni.charAt(0).toUpperCase()) != -1){//Es NIF tipo 2
            switch(letrasNIF2.indexOf(nifodni.charAt(0).toUpperCase())){
                case 1: var sustNIF = "1";
                break;
                case 2: var sustNIF = "2";
                break;
                default: var sustNIF = "0";
                break;
            }
			//Comprobamos que los 7 siguientes caracteres son numéricos
            for(let i = 1; i < (nifodni.length-1); i++){
                if(!numeros.includes(nifodni.charAt(i))){
                    document.primero.nif.style.backgroundColor = "orange";
                    retorno = 0;
                }
            }
			//Si los 7 son numéricos, creamos el numero resultante concatenando el primer caracter numérico con los 7 restantes
            if(retorno == 1){
                let nifForma2 = sustNIF + nifodni.substr(1,7);
				//por ultimo comprobamos que el caracter de control es correcto
                if(letrasNIF[parseInt(nifForma2)%23]!=nifodni.charAt(nifodni.length - 1)){
                    document.primero.nif.style.backgroundColor = "orange";
                    retorno = 2;
                }else{
                    retorno = 1
                }
            }
        }else{ //Validacion NIF forma 1
			//Comprobamos que los 8 primeros caracteres son numéricos
            for(var i = 0; i < (nifodni.length-1); i++){
                if(!numeros.includes(nifodni.charAt(i))){
                    document.primero.nif.style.backgroundColor = "orange";
                    retorno = 0;
                }
            }
            if(retorno == 1){

                if(!letras.includes(nifodni.charAt(nifodni.length - 1))|| letrasNIF[parseInt(nifodni.substr(0, 8))%23]!=nifodni.charAt(nifodni.length - 1)){
                    document.primero.nif.style.backgroundColor = "orange";
                    retorno = 2;
                }else{
                    retorno = 1;
                }
            }
        }
    }

    return retorno;
}

function validarNombre(valorNombre){
	let valido=true;
	let nomb=valorNombre.toLowerCase();
	let letras="abcdefghijklmnñopqrstuvwxyzáéíóúü";
	//Tiene de 6 a 20 caracteres
	if (nomb.length >= 6 && nomb.length <=20) {
		let indice=0
		//Empieza por 3 letras
		while ( valido && indice < 3){
			if (!letras.includes(nomb.charAt(indice)))
				valido=false;
		indice+=1;
		}
		//Termina por 2 letras
		indice=nomb.length - 2;
		while (valido && indice < nomb.length){
			if (!letras.includes(nomb.charAt(indice)))
				valido=false;
		indice+=1;
		}
		//En medio tiene letras y espacios
		indice = 3;
		while (valido && indice < nomb.length - 2){
			if (!letras.includes(nomb.charAt(indice)) && nomb.charAt(indice)!=" " )
				valido=false;
		indice+=1;
		}
	} else 
		valido=false;
	
	return valido;
}

function validarApellidos(valorApellido){
	let valido=true;
	let ape=valorApellido.toLowerCase();
	let letras="abcdefghijklmnñopqrstuvwxyzáéíóúü";
	//Tiene de 12 a 35 caracteres
	if (ape.length >= 12 && ape.length <=35) {
		let indice=0
		//Empieza por 4 letras
		while ( valido && indice < 4){
			if (!letras.includes(ape.charAt(indice)))
				valido=false;
		indice+=1;
		}
		//Termina por 5 letras
		indice=ape.length - 5;
		while (valido && indice < ape.length){
			if (!letras.includes(ape.charAt(indice)))
				valido=false;
		indice+=1;
		}
		//En medio tiene letras y espacios
		indice = 3;
		while (valido && indice < ape.length - 5){
			if (!letras.includes(ape.charAt(indice)) && ape.charAt(indice)!=" " )
				valido=false;
		indice+=1;
		}
	} else 
		valido=false;
	
	return valido;
}

function validarLocalidad(valorLocalidad){
	let valido=true;
	let local=valorLocalidad.toLowerCase();
	let letras="abcdefghijklmnñopqrstuvwxyzáéíóúü";
	//Tiene de 10 a 30 caracteres
	if (local.length >= 10 && local.length <=30) {
		let indice=0
		//Empieza por 3 letras
		while ( valido && indice < 3){
			if (!letras.includes(local.charAt(indice)))
				valido=false;
		indice+=1;
		}
		//Termina por 3 letras  
		indice=local.length - 3;
		while (valido && indice < local.length){
			if (!letras.includes(local.charAt(indice)))
			valido=false;
		}
		//En medio tiene letras ,espacios y caracteres ,º.
		indice = 3;
		while (valido && indice < local.length - 1){
			if (!letras.includes(local.charAt(indice)) && local.charAt(indice)!=" ")
				valido=false;
		indice+=1;
		}
	} else 
		valido=false;
	
	return valido;
}

function validarCodigoPostal(valorCodigoPostal){
	let valido=true;
	let codp=valorCodigoPostaltoLowerCase();
	//Tiene de 4 a 5 digitos
	if (codp.length >= 4 && codp.length <=5) {
		let digitos="0123456789";
		let indice=0;
		//Admite digitos del 0 al 9
		while ( valido && indice < codp.length){
			if (!digitos.includes(codp.charAt(indice)))
				valido=false;
		indice+=1;
		}
		if (valido){
			let numPostal=parseInt(codp,10);
			//Comprendido entre 1000 y 52999
			if (numPostal < 1000 || numPostal >= 53000)
				valido=false;
		}
	} else 
		valido=false;
	return valido;
}