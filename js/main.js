//parte del formulario nancy
var numero = document.getElementById('numero');
numero.addEventListener("click",aparecer);
//variable para el placeholder
var fN = document.getElementsByClassName('fN');

for(var i=0; i< fN.length; i++){
	fN[i].addEventListener('click',pequenoPlaceholder);
}

//hacer una funcion para el fn
function pequenoPlaceholder(){
	alert("hola");
	
}

//funcion
function aparecer(){
	var formularioDatos = document.getElementById('formularioDatos');
	if(formularioDatos.style.display == "none"){
    formularioDatos.style.display = "block";		
	}else{	
		formularioDatos.style.display = "none";
	}
}
//fin de nancy