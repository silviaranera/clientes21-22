window.onload=iniciar;

function iniciar () {
    document.formulario.textarea.value=" ";
    
	var nprimo = 2;
    var total = 1;
    
	while (total <= 100){
            esprimo = true;
            for (var i = 2; i < nprimo; i++) {
                if(nprimo % i == 0){
                    esprimo = false;
                    break;
                }
            }
            if(esprimo){
             document.formulario.textarea.value += i.toString() + "|";
                total++;
            }
            nprimo++;
        }
}



   