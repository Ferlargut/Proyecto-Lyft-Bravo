
// funcionalidad barra de navegacion ilse y sue
var navegador =document.getElementsByClassName('navBar')[0];
var textosNavUno=document.getElementsByClassName('elementosUlTexto')[0];
var textosNavDos=document.getElementsByClassName('elementosUlTexto')[1];
var textosNavTres=document.getElementsByClassName('elementosUlTexto')[2];
var botonOculto = document.getElementsByClassName('botonSign')[0];
var logo=document.getElementsByClassName('logo')[0];
var botonLog = document.getElementsByClassName('botonLog')[0];

document.addEventListener("scroll",prueba);

function prueba(){
  navegador.style.background="white";
  botonOculto.style.visibility="visible";
  logo.src="img/logo-pink.png";
  botonLog.style.background="transparent";
  botonLog.style.borderColor="#C0C0C0";
  botonLog.style.color="black";
  textosNavUno.style.color="black";
  textosNavDos.style.color="black";
  textosNavTres.style.color="black";
  }
  // termina funcionalidad barra de navegacion ilse y sue
