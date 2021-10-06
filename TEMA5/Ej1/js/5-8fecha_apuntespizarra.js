
	var diasMes=new Array(31,28,31,30,31,30,31,31,30,31,30,31);

	if (año%400==0) //año bisiesto
		diasMes[1]=29
	else if(año % 4==0 && (año %100!=0)
		diasMes[1]=29
	if (mes<1 || mes>12)
		esfecha =false
	else if (dias<1 || dia>diasMes[mes-1])
		esfecha=false;
