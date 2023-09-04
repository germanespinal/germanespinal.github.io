// Arreglo que contiene las respuestas correctas
let correctas = [3, 4, 3, 1, 3, 4, 1, 2, 3, 2, 1, 2, 2, 1, 2];

// Arreglo donde se guardan las respuestas del usuario
let opcion_elegida = [];

let cantidad_correctas = 0;

function respuesta(num_pregunta, seleccionada) {
  opcion_elegida[num_pregunta] = seleccionada.value;

  id = "p" + num_pregunta;

  labels = document.getElementById(id).childNodes;
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].nodeName === "LABEL") {
      labels[i].style.backgroundColor = "white";
    }
  }

  seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

function corregir() {
  cantidad_correctas = 0;
  for (let i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
    } else {
      id = "p" + i;
      labels = document.getElementById(id).childNodes;
      for (let j = 0; j < labels.length; j++) {
        if (labels[j].nodeName === "LABEL" && parseInt(labels[j].htmlFor) === correctas[i]) {
          labels[j].style.backgroundColor = "green";
        }
      }
    }
  }
  document.getElementById("resultado").innerHTML = cantidad_correctas * 2; // Multiplicamos por 2 para convertir las preguntas correctas en puntos.
}
