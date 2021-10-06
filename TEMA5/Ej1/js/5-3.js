window.onload=iniciar;

function iniciar(){
	document.formulario.calcular.onclick=calcularprimo; 
	//document.formulario.textarea.value=" "; 
}

function calcularprimo() {
    
	var primo;
    
    num1 = parseInt(document.formulario.inicio.value, 10); 
	num2 = parseInt(document.formulario.fin.value, 10);
 
    for(var i=Math.min(num1,num2); i<=(Math.max(num1,num2)) ;i++){
        primo=1;
 
        for(var j=2 ; j<i ; j++){ 
            if(i%j==0 ){
                primo=0;
                break;
            }
        }
            if(primo==1){
                document.formulario.textarea.value += i.toString() + "|"; 
            }
        }
 
    } 
	
	
/*
function calcularprimo(){
	
	var primo;
    
	var totalPrimos=0;
    var arrayPrimos = new Array();
    
	num1 = parseInt(document.formulario.inicio.value, 10); 
	num2 = parseInt(document.formulario.fin.value, 10);
 
    for(var i=Math.min(num1,num2);i<=(Math.max(num1,num2));i++){
        primo=1; 
 
			for(var j=2;j<i;j++){ 
				if(i%j==0 ){
					primo=0;
					break;
				}
			}
				if(primo==1)
				{
					arrayPrimos[totalPrimos]=i;
					totalPrimos++;
					
				}
			}
 
    }  
    
	document.formulario.textarea.value = arrayPrimos.toString() + "|" ;
	//alert(arrayPrimos);
}*/