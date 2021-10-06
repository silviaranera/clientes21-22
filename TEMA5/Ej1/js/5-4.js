window.onload=iniciar;

function iniciar(){
	
	document.formulario.convertir.onclick=convertirdecimal;	
	 	
}

function convertirdecimal(){
	
	let dec = parseInt(document.formulario.decimal.value,10);
	
	let decimalbinario = dec.toString(2);
	//let decibinario = parseInt(binario,2) 
	
	let decimaloctal = dec.toString(8);
	//let decioctal= parseInt(octal,8)
	
	let decimalhexadecimal = dec.toString(16);
	//let decihexadecimal = parseInt(hexadecimal,16)
	
	document.formulario.binario.value = decimalbinario;
	document.formulario.octal.value = decimaloctal;
	document.formulario.hexadecimal.value = decimalhexadecimal;
}

