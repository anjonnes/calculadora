window.onload=manejarClics;

var cifra1="";

function manejarClics() {
	
	var uno=document.getElementById("b1");
	uno.addEventListener("click",function() {
								       clicEn("1");
								       });
  
	var dos=document.getElementById("b2");
	dos.addEventListener("click",function() {
								       clicEn("2");
								       });
  
  var tres=document.getElementById("b3");
  tres.addEventListener("click",function() {
                        clicEn("3");
                        });
  
  var cuatro=document.getElementById("b4");
  cuatro.addEventListener("click",function() {
                        clicEn("4");
                        });
  
  var cinco=document.getElementById("b5");
  cinco.addEventListener("click",function() {
                        clicEn("5");
                        });
  
  var seis=document.getElementById("b6");
  seis.addEventListener("click",function() {
                        clicEn("6");
                        });
  
  var siete=document.getElementById("b7");
  siete.addEventListener("click",function() {
                        clicEn("7");
                        });
  
  var ocho=document.getElementById("b8");
  ocho.addEventListener("click",function() {
                        clicEn("8");
                        });
  
  var nueve=document.getElementById("b9");
 nueve.addEventListener("click",function() {
                        clicEn("9");
                        });
  
  var cero=document.getElementById("b0");
  cero.addEventListener("click",function() {
                        clicEn("0");
                        });
  
  var division=document.getElementById("bd");
  division.addEventListener("click",function() {
                        clicEn("/");
                        });
  
  var multi=document.getElementById("bm");
  multi.addEventListener("click",function() {
                        clicEn("*");
                        });
  
  var resta=document.getElementById("br");
  resta.addEventListener("click",function() {
                        clicEn("-");
                        });
  
  var suma=document.getElementById("bs");
  suma.addEventListener("click",function() {
                        clicEn("+");
                        });
  
	var resu =document.getElementById("bi");
	resu.addEventListener("click",function(){
									       resultado();
	});

//	var quitar =document.getElementById("menos1")
//	quitar.addEventListener("click",function(){
//									borrardigito();
//	});

	var nuevo =document.getElementById("bc")
	nuevo.addEventListener("click",function(){
									nuevacuenta();
	});
}

function clicEn(num){
  cifra1+=num;
  var impRes=document.getElementById("p");
		
  impRes.textContent=cifra1;
	}

function resultado(){
	var p=document.getElementById("p");
	var res=eval(cifra1);
	p.textContent=res;
}

function nuevacuenta(){
	var pantalla=document.getElementById("p");
	cifra1="";
	pantalla.textContent=cifra1;
}

//function borrardigito(){
//	var pantalla=document.getElementById("pantalla");
//	var panta=cifra.slice(0,-1);
//	cifra=panta;
//	pantalla.textContent=cifra;
//}