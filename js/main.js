
// funcionalidad barra de navegacion ilse y sue
var navegador =document.getElementsByClassName('navBar')[0];
var textosNavUno=document.getElementsByClassName('elementosUlTexto')[0];
var textosNavDos=document.getElementsByClassName('elementosUlTexto')[1];
var textosNavTres=document.getElementsByClassName('elementosUlTexto')[2];
var botonOculto = document.getElementsByClassName('botonSign')[0];
var logo=document.getElementsByClassName('logo')[0];
var botonLog = document.getElementsByClassName('botonLog')[0];
var cuerpo=document.getElementsByTagName('body');
// var inicioScroll= document.getElementById('sectionFormulario');
// console.log(inicioScroll);
document.addEventListener("scroll",prueba);

function prueba(){
  var distancia = window.scrollY;
  if (distancia > 30) {
    navegador.style.background="white";
    botonOculto.style.visibility="visible";
    logo.src="img/logo-pink.png";
    botonLog.style.background="transparent";
    botonLog.style.borderColor="#C0C0C0";
    botonLog.style.color="black";
    textosNavUno.style.color="black";
    textosNavDos.style.color="black";
    textosNavTres.style.color="black";
  } else {
    navegador.style.background="transparent";
    botonOculto.style.visibility="hidden";
    logo.src="img/logo-white.png";
    botonLog.style.background="transparent";
    botonLog.style.borderColor="#C0C0C0";
    botonLog.style.color="white";
    textosNavUno.style.color="white";
    textosNavDos.style.color="white";
    textosNavTres.style.color="white";

  }

}

// termina funcionalidad barra de navegacion ilse y sue

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


var reproducir = document.getElementById("clickimagen");
console.log(reproducir);


reproducir.addEventListener("click",videos);

function videos(){

    reproducir.style.display="none";
    document.getElementById("clickimagen1").style.display="none"
    document.getElementById("video1").style.display="block";
}

