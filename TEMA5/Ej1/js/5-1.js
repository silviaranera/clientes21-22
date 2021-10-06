window.onload=iniciar;

function iniciar(){ 
 
	document.formulario.textarea.value="";   
	  
	  var nprimo=2+ "|";       //el 2 es primo, y todos los demás pares no lo son  
	  
	  for (var i=3;i<=100;i=i+2){  //tratamos solo los impares   
		
		var primo=true;        //inicialmente un número es primo hasta que no se demuestre lo contrario   
		
		for(j=3;j<=Math.sqrt(i);j=j+2){ //probamos hasta llegar a la raiz cuadrada de i   
		  
		  if (i%j==0){        //si el módulo es cero es que es divisible y por tanto no es primo  
			primo=false;   
			break;   
		  }   
		}   
		
		if (primo) {nprimo += i + "|";}   
	  }   
	 
	document.formulario.textarea.value += nprimo.toString() + "|";
}