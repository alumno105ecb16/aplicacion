// JavaScript Document

$(document).on("pagecreate",function(){
$('.logotipo').css({"width": $('#principal').width()*.28 , "height": 'auto'});
});    

$(document).on("pageshow", "jugart", function (){
alert ("tiene s1 " + $('#respuesta1').hasClass('correcta'));
		  	  alert ("tiene s2 " + $('#respuesta2').hasClass('correcta'));
			  	  alert ("tiene s3 "+$('#respuesta3').hasClass('correcta'));
				  	  alert ("tiene s4 "+$('#respuesta4').hasClass('correcta'));
});

$(document).ready(function(e) {

function genera_pregunta(numero)
{
	RespuestasO = ["","","",""]
	
      Respuestas [0] = Preguntas [numero]['resp1'];
	  Respuestas [1] = Preguntas [numero]['resp2']
	  Respuestas [2] = Preguntas [numero]['resp3']
	 
	  
	  var orden = Math.floor((Math.random() * 4) + 1) - 1;

	  RespuestasO [orden] = Preguntas [numero]['respc'];
  	  $('#respuesta1').addClass('correcta');
	  alert ("tiene 1 " +$('#respuesta1').hasClass('correcta'));
  	  $('#respuesta2').addClass('correcta');
	  	  alert ("tiene 2 "+$('#respuesta2').hasClass('correcta'));
  	  $('#respuesta3').addClass('correcta');
	  alert ("tiene 3 "+$('#respuesta3').hasClass('correcta'));
  	  $('#respuesta4').addClass('correcta');
							  
	  alert ("tiene 4 "+$('#respuesta4').hasClass('correcta'));

		switch (orden) {
    case 0:
  	  $('#respuesta2').removeClass('correcta');  	  
  	  $('#respuesta3').removeClass('correcta');  	  
   	  $('#respuesta4').removeClass('correcta');  	  
    break;
    case 1:
  	  $('#respuesta1').removeClass('correcta');  	  
  	  $('#respuesta3').removeClass('correcta');  	  
   	  $('#respuesta4').removeClass('correcta');  	  
        break;
    case 2:
  	  $('#respuesta2').removeClass('correcta');  	  
  	  $('#respuesta1').removeClass('correcta');  	  
   	  $('#respuesta4').removeClass('correcta');  	  
        break;
    case 3:

  	  $('#respuesta2').removeClass('correcta');  	  
  	  $('#respuesta3').removeClass('correcta');  	  
   	  $('#respuesta1').removeClass('correcta');  	  

        break;
}		  
				  
	  	  alert ("tiene d1 " + $('#respuesta1').hasClass('correcta'));
		  	  alert ("tiene d2 " + $('#respuesta2').hasClass('correcta'));
			  	  alert ("tiene d3 "+$('#respuesta3').hasClass('correcta'));
				  	  alert ("tiene d4 "+$('#respuesta4').hasClass('correcta'));
					  
for (var i = 0; i < 3; i++)
{
  while (Continuar)
  {
   orden = Math.floor((Math.random() * 4) + 1) - 1;
  // alert ("donde " + orden + "->" + RespuestasO [orden] + "<-");

	if (RespuestasO [orden] == "")
	 {
	//	 alert ("dentro");
	  RespuestasO[orden] = Respuestas[i];
	  Continuar = false;
	 }

  }
  Continuar = true;
}
}

function question(cve,preg,resp1,resp2,resp3,respc)
{
 this.cve = cve;
 this.preg = preg;
 this.resp1 = resp1;
 this.resp2 = resp2;
 this.resp3 = resp3;
  this.respc = respc;
}

	
	$("#muscia").click (function (){

if ($('#muscia').hasClass('ui-icon-noaudio'))
{
	$('#muscia').removeClass('ui-icon-noaudio');
	$('#muscia').addClass('ui-icon-audio');
}
else
{
		$('#muscia').removeClass('ui-icon-audio');
	$('#muscia').addClass('ui-icon-noaudio');
}


	});

    var cuantas ;
	var Respuestas=[];
	var RespuestasO = ["","","",""]
	var Preguntas = [];
	var PreguntasO = ["","","","","","",""]
	var Continuar = true;
	var correctas = 0;

	
	
	$('.ligas').click(function(){
		var x= $('#encabezado').css("height");

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top  - (parseInt(x, 10)*1.1)
    }, 700);
    return false;
});
	

$('.resp').click(function(e){
// $(".correcta").css('background-color', '#87D658');
 if (cuantas <=6)
 { alert (correctas);
   alert ("this " + $(this).hasClass('correcta'));
if ($(this).hasClass('correcta'))
 {
  correctas+=1;
  $('#aciertos').text(correctas);
 }
 else
 {
	alert ("mal"); 
 }
 }
/* if (cuantas <6)
 {
 cuantas+=1;
 genera_pregunta(cuantas);  
$('#pregunta p').text(Preguntas[cuantas]['preg']);
$('#respuesta1').text(RespuestasO[0]);
$('#respuesta2').text(RespuestasO[1]);
$('#respuesta3').text(RespuestasO[2]);
$('#respuesta4').text(RespuestasO[3]);
 }
 else
 {
	alert ('Ya no hay más preguntas'); 
 }*/
});

$('#respuesta1').addClass('correcta');
alert ("fuera " + $('#respuesta1').hasClass('correcta'));
//$('#R1').css('height', $('#respuesta').css('height'));
document.addEventListener( 'deviceready', function() {

//alert ("ready");

	//$(document).on('pagebeforecreate','#principal',function(e){
//		alert ("tres3");
//	});
    var dbTam = 5 * 1024 * 1024; // 5MB
	var db = openDatabase ("TecnoQ", "1.0", "Preguntas TecnoQ", dbTam);

    db.transaction (function (transaction)
     {
      var sql = "CREATE TABLE IF NOT EXISTS Puntajes " +
      " (Usuario, " +
      "Puntaje NOT NULL, " +
      "Fecha NOT NULL)";
      transaction.executeSql (sql, undefined, function ()
       {
    //    alert ("Tabla Creada 'Puntajes'");
       }, error);
     });

     db.transaction (function (transaction)
      {
       var sql = "CREATE TABLE IF NOT EXISTS Usuario " +
       "(Nombre)";
       transaction.executeSql (sql, undefined, function ()
        {
  //       alert ("Tabla Creada 'Usuario'");
        }, error);
      });


     db.transaction (function (transaction)
      {
       var sql = "CREATE TABLE IF NOT EXISTS Preguntas " +
       " (CvePregunta INTEGER NOT NULL UNIQUE, " +
       "Pregunta NOT NULL, " +
       "R1 NOT NULL, " +
       "R2 NOT NULL, " +
       "R3 NOT NULL, " +
       "RC NOT NULL, " +
       "Modulo INTEGER NOT NULL)"
       transaction.executeSql (sql, undefined, function ()
        {
//         alert ("Tabla Creada");
        }, error);
      });

      function error (transaction, err)
       {
        alert ("DB error : " + err.message);
        return false;
       } 


	db.transaction(function (tx) {
		   tx.executeSql('INSERT INTO Usuario (Nombre) VALUES ("ICEon")');
   tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (1, "es el area bajo la curva", "Operadores", "Variables", 1)');
      tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (2, "que tipo de integral es, cuando usamos la constante", "Lógica computacional", 1)');
	     tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (3, "una raiz puede puede representarse tambien como 1)');
		    tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (4, "¿Metodo que sirve para calcular el valor de una integral definida?", "Compilación y errores", "Precisión y la compilación", "Transcripción", "Precisión, determinismo, finitud", 1)');

});

$('.jugart').bind('click', function (){
 cuantas = 0;
 	$('#aciertos').text('0');
	RespuestasO = ["","","",""];

	
  db.transaction (function (ejecutar){
   var sql = "SELECT * FROM Preguntas";
   ejecutar.executeSql (sql, undefined,
   function (ejecutar, resultado){
 

for (var x = 0; x < resultado.rows.length ; x++)
{
	
	var filaP = resultado.rows.item (x)
  Preguntas.push (new question(filaP.CvePregunta, filaP.Pregunta, filaP.R1, filaP.R2, filaP.R3, filaP.RC));
 //( new question(filaP.CvePregunta,filaP.Pregunta, filaP.R1,filaP.R2, filaP.R3.);	
}



	  
genera_pregunta(cuantas);  
$('#pregunta p').text(Preguntas[cuantas]['preg']);
$('#respuesta1').text(RespuestasO[0]);
$('#respuesta2').text(RespuestasO[1]);
$('#respuesta3').text(RespuestasO[2]);
$('#respuesta4').text(RespuestasO[3]);

    });
   });
  });
  
});


});

