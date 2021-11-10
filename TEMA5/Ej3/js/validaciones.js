//Ejercicio 1

function esNIF(nifodni){
	let letrasNIF2 = ["X","Y","Z","L","K","M"];
	let letrasNIF = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    let retorno = 1;
	//Si no mide 9 caracteres, luego o es un Dni u otra cosa
    if(nifodni.length != 9){
        //Tiene entre 6 y 8, puede ser dni, comprobamos que todos los caracteres son numéricos
		if(nifodni.length >=6 && nifodni.length<= 8){
            for(let i = 0; i < (nifodni.length); i++){
                if(!numeros.includes(nifodni.charAt(i))){
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
                
                    retorno = 0;
                }
            }
			//Si los 7 son numéricos, creamos el numero resultante concatenando el primer caracter numérico con los 7 restantes
            if(retorno == 1){
                let nifForma2 = sustNIF + nifodni.substr(1,7);
				//por ultimo comprobamos que el caracter de control es correcto
                if(letrasNIF[parseInt(nifForma2)%23]!=nifodni.charAt(nifodni.length - 1)){
                    retorno = 2;
                }else{
                    retorno = 1
                }
            }
        }else{ //Validacion NIF forma 1
			//Comprobamos que los 8 primeros caracteres son numéricos
            for(var i = 0; i < (nifodni.length-1); i++){
                if(!numeros.includes(nifodni.charAt(i))){                   
                    retorno = 0;
                }
            }
            if(retorno == 1){

                if(!letras.includes(nifodni.charAt(nifodni.length - 1))|| letrasNIF[parseInt(nifodni.substr(0, 8))%23]!=nifodni.charAt(nifodni.length - 1)){
                    retorno = 2;
                }else{
                    retorno = 1;
                }
            }
        }
    }
    return retorno;
}


//Ejercicio 2: va a recibir un parámetro y nos va a indicar como es ese parámetro.

function esCif(datosCif) {
	let cadena=datosCif;
	let resultado=" ";
	let inicioNum="ABCDEFGHJUV"; //Una letra (A..H, J, U, V), luego siete dígitos y por último el carácter de control que va a ser un número.
	let inicio="ABCDEFGHJUVPQRSW"; //Una letra (P, Q, R, S, W), luego siete dígitos y por último el carácter de control que va a ser una letra.
	let letras="JABCDEFGHI"; //Si es caracter de control es una letra
	let datos=cadena.trim().toUpperCase();
	//Si no estan icluidas las letras de inicio o la longitud de datos es distinta a 9
	if ((!inicio.includes(datos.charAt(0))) || datos.length !=9) {
		resultado="0";// Se ha introducido un dato no válido. No es CIF
	}else {
		let digitos=true;
		//Cálculo de caracter de control,se cogen 7 digitos del 0 al 9
		for(let indice=1;indice < 8 ; indice ++) 
			if ( datos.charAt(indice)<"0" ||datos.charAt(indice) > "9" ) 
				digitos=false;
			if (digitos) {
				let pares=0;
				let impares=0;
				//Posiciones impares, multiplica por 2. Si el resultado > 9 se suman los dígitos entre sí
				for (let indice=1;indice < 8 ; indice+=2) {
					let numero= parseInt(datos.charAt(indice)) * 2;
					if ( numero > 9 ) {
						numero = 1 + numero % 10;
					}
					impares +=numero;
				}
				//Posiciones pares, se coge el valor de la multiplicación
				for (let indice=2;indice < 8 ; indice+=2) {
					pares += parseInt(datos.charAt(indice));
				}
				//Se suman los dos valores obtenidos
				let todos=pares + impares;
				//Dividimos el valor obtenido entre 10, y nos quedamos el resto
				let division = todos % 10;
				//Restamos a 10 el resto, obteniendo el complemento
				let complemento = 10 - division;
				//Si el resultado es 10 se utiliza 0
				complemento = complemento ==10?0:complemento;
				//Si el caracter de control calculado coincide con el caracter de control del parametro, CIF correcto
				let control;
				if (inicioNum.includes(datos.charAt(0))) {
					control=complemento.toString().trim();
				}else {
					control=letras.charAt(complemento);
				}
				if (control == datos.charAt(8)) {
					resultado="1"; //CIF correcto
				} else { 
					resultado="2"; //Si no concide con los parametros, CIF erroneo. Caracter de control erroneo
				 }
			} else {
				resultado="0"; //Dato no valido. No es CIF.
			}
	}	
	return resultado;	
}


//Ejercicio 3: Recibe u parametro y nos debe indicar que parametro es. Diferencia si es nif cif o un dato no válido

function nifcif(datosNCif){
	let cadena=datosNCif;
	let inicioNif="YZLKMX0123456789";
	let inicioCif="ABCDEFGHJUVPQRSW";
	let enviar;
	cadena=cadena.trim().toUpperCase();
	
	//Si empieza por las letras y numeros incluidas en inicioNif
	if (inicioNif.includes(cadena.charAt(0))) {
		let valornif=Nif(datosNCif);
		if (valornif=="0"){
			enviar=valornif;
		}else{
			enviar ="N"+valornif.toString(); //Devuelve si es NIF, si es erroneo o es DNI
		}
	//Si empieza por las letras incluidas en inicioCif
	}else if (inicioCif.includes(cadena.charAt(0))) {
		let valorcif=Cif(datosNCif);
		if (valorcif=="0"){ 
			enviar=valorcif;
		}else{
			enviar ="C"+valorcif.toString(); // Devuelve un tipo de CIF, ya sea correcto o erroneo
		}
	}else{
		enviar=0; //Si no es CIF ni NIF ,devuelve un error dato no valido. No es CIF
	}
	return enviar;	
}


//Ejercicio 4: Esta función va a devolver un valor que es el código de control de la cuenta, el código de control de una cuenta son dos dígitos.

function codigoControl(banco, sucursal, cuenta){
	let cc=" ";
	let multipBanco=new Array(4,8,5,10); //creamos un array donde almacenamos el numero x el que va a multiplicar las cifras del codigo del banco,1x4,2x8,3x5 y 4x10
	let multipSucursal=new Array(9,7,3,6);//creamos un array donde almacenamos el numero x el que va a multiplicar las cifras del numero de la sucursal,1x9,2x7,3x3 y 4x6
	let multipCuenta= new Array(1,2,4,8,5,10,9,7,3,6); //creamos un array donde almacenamos el numero x el que va a multiplicar las cifras del numero de cuenta,1x1,2x2,3x4 ... 10x6
	let numero1=0; //codigo banco
	let numero2=0; //numero de sucursal
	
	//Suma de valores de las multiplicaciones se almacena en numero1
	for (let i=0;i < 4; i++){
		numero1+=parseInt(banco.charAt(i),10)*multipBanco[i];
	}
	//Suma de valores de las multiplicaciones se almacena en numero2
	for (let i=0;i < 4; i++){
		numero2+=parseInt(sucursal.charAt(i),10)*multipSucursal[i];
	}
	//Se suman numero 1 y 2
	let suma=numero1+numero2;
	//Se divide la suma por 11 y nos quedamos con el resto
	let resto = suma % 11;
	//Se resta 11 menos el resto
	let complemento=11-resto;
	//Si es igual a 10 se transforma en 1
	if (complemento==10){
		cc="1";
	//Si es igual a 11 se transforma en 0
	}else if (complemento==11){
		cc="0";
	//Si el valor obtenido tiene un dígito ese va a ser el primero de los caracteres de control
	}else 
		cc=complemento.toString();
	let numero3=0; //Numero de cuenta
	//Suma de valores de las multiplicaciones se almacena en numero3
	for (let i=0;i < 10; i++){
		numero3+=parseInt(sucursal.charAt(i),10)*multipCuenta[i];
	}
	//Se divide el resultado por 11 y nos quedamos el resto
	resto=numero3 %11;
	//Se resta 11 menos el resto
	complemento=11 - resto;
	//si es igual a 10 se transforma en 1
	if (complemento==10){ 
		cc+="1";
	//Si es igual a 11 se transforma en 0
	}else if (complemento==11) {
		cc+="0";
	//Si el valor obtenido tiene un dígito ese va a ser el segundo de los caracteres de control
	}else {
		cc+=complemento.toString();
	}
	return cc;
}

//Ejercicio 5 : Esta funcion va a recibir un parámetro que se corresponde con el código de cuenta (20 dígitos). Y va a devolver el código IBAN,

function calculoIBANEspanya(codigo) {
	let iban="";
	let dato=codigo+"ES00";
	dato=dato.replace("E","14"); //sustituimos letra por valor
	dato=dato.replace("S","28"); //sustituimos letra por valor
	
	let veces=Math.ceil(dato / 9);
	let resultado;
	let resti=0;
	//Realizamos la división entera entre el número anterior y 97, quedándonos con el resto
	for (let indice=0; indice < veces; indice++){
		let numer=dato.substr(indice*9,9);
		let paso=parseInt(restiullo.toString()+numer,10);
		resti=restillo % 97;
	}
	//Calculamos 98 menos el resto anterior. El valor obtenido es el código de control del IBAN
	let complemento=98 - rest ;
	//si el valor obtenido es menor que 10 deberemos poner un cero no significativo.
	if ( complemento < 10 ) 
		iban="ES0"+complemento.toString()+codigo;
	else 
		iban="ES"+complemento.toString()+codigo;
	return iban;
}

//Ejercicio 6 : Esta funcion va a recibir un parametro que se corresponde con el codigo IBAN de la cuenta, de cualquier pais. Y devuelve un valor logicono nos indica si es correcto o erroneo

function comprobarIBAN(iban) {
	let letras=new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"); //letras
	let valorLetra=new Array("10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35");//valor de las letras
	//Se convierten todas las letras en numeros segun los arrays A=10...Z=35. 
	let posUno=letras.indexOf(iban.charAt(0));//indexOf(charAt) devuelve el indice 
	let posDos=letras.indexOf(iban.charAt(1));//indexOf(charAt) devuelve el indice 
	let primeros=valorLetra[posUno]+valorLetra[posDos]+iban.substr(2,2);
	let resto=iban.substr(4); //devuelve los caracteres de la cadena 
	let posicionLetras=0;
	for (let indice=0;indice< resto.length; indice++){
		if (letras.includes(resto.charAt(indice)))
			cambioResto+=valorLetra[posicionLetras];
		else 
			cambioResto+=resto.charAt(indice)
	}	
	let dato=cambioResto+primeros;
	let veces=Math.ceil(cambioResto / 9); // Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
	//El numero obtenido se dividirá entre 97, quedandonos el resto
	let resultado;
	let restillo=0;
	for (let indice=0; indice < veces; indice++){
		let numeros=cambioResto.substr(indice*9,9);
		let paso=parseInt(restillo.toString()+numeros,10);
		restillo=restillo % 97;
	}
	return (restillo==1); //1=correcto 
}
	
	/*for(let i=o; i<letras.length; i++){
		iban=iban.replaceAll(letras[i],numeros[i])
	}*/
	
