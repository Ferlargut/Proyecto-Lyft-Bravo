//parte del formulario nancy
var numero = document.getElementById('numero');
numero.addEventListener("click",aparecer);

//funcion
function aparecer(){
	var formularioDatos = document.getElementById('formularioDatos');
	if(formularioDatos.style.display == "block"){
		formularioDatos.style.display = "none";
	}else{	
		formularioDatos.style.display = "block";
	}
}