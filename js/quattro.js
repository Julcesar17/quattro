var e, b; //variables globales

function inicio(){ //inicia script js
	e = document.getElementById("email"); //accede a los elementos de html
	b = document.getElementById("boton");
	
	b.addEventListener("click", validar); //escucha evento de click en boton enviar 
}

// funcion para validar email, campo nombre y mensaje validado desde html

function validar() { 
	var email = e.value; //obtiene el valor del campo email
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //expresion regular para email

	if (!expr.test(email)) { //test() prueba expresiones en strings
		alert('Datos Incorrectos.');
	}
	else{
		alert('Datos Enviados Correctamente.');
	}
}




