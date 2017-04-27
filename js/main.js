//parte del formulario nancy
var numero = document.getElementById('numero');
numero.addEventListener("click",aparecer);

//funcion
function aparecer(){
	var formularioDatos = document.getElementById('formularioDatos');
	if(formularioDatos.style.display == "none"){
		formularioDatos.style.display = "block";
	}else{	
		formularioDatos.style.display = "none";
	}
}