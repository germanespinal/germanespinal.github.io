//arreglo que contiene las respuestas correctas
let correctas = [3,1,2,2,3];

//arreglo donde se guardan las respuestas del usuario 
let opcion_elegida=[];

let cantidad_correctas=0;

function respuesta(num_pregunta,seleccionada){

	opcion_elegida[num_pregunta] = seleccionad.value;

	id="p" + num_pregunta;

	labels = document.getElementById(id).childNodes;
	labels[3].style.backgroundColor = "white";
	labels[5].style.backgroundColor = "white";
	labels[7].style.backgroundColor = "white";
	labels[9].style.backgroundColor = "white";
	labels[11].style.backgroundColor = "white";
	labels[13].style.backgroundColor = "white";
	labels[15].style.backgroundColor = "white";
	labels[17].style.backgroundColor = "white";
	labels[19].style.backgroundColor = "white";
	labels[21].style.backgroundColor = "white";
	labels[23].style.backgroundColor = "white";
	labels[25].style.backgroundColor = "white";
	labels[27].style.backgroundColor = "white";
	labels[29].style.backgroundColor = "white";
	labels[31].style.backgroundColor = "white";


	seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}
function corregir(){
	cantidad_correctas = 0;
	for(i=0:i <correctas.length;i++)ñ+{
		if(correctas[i]==opcion_elegida[i]){
			cantidad_correctas++;
		}
	}
	document.getElementById("resultado").innerHTML=cantidad_correctas;
}