//Constante que guarda las letras del abecedario
const letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//Variable que contendra las cinco letras que se mostraran
var celdas = [];

//variable para los aciertos del usuario
var aciertos = 0;
var pulsaciones = 0;

//variable auxiliar para saber la posicion de la letra
var auxLetra = 0;

//Evento para comenzar el programa y cargar la interfaz
document.getElementById("start").onclick = function() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("result").style.display = "none";
  alert(
    "En unos segundos comienzas, preparate. Recuerda simpre ir de izquierda a derecha"
  );
  setTimeout(function() {
    document.getElementById("celdas").style.display = "inline";
    cargarCeldas();
    document.onkeypress = esLetra;
  }, 3000);
  setTimeout(function() {
    finJuego();
  }, 60000);
};
/**
 * Funcion que devuelve un array con 5 letras
 * @return array
 */
function cargarLetras() {
  var l = [];
  var i = 0;
  while (i < 5) {
    let letra = letras[Math.floor(Math.random() * letras.length)];
    if (l.indexOf(letra) == -1) {
      l.push(letra);
      i++;
    }
  }

  return l;
}

//Funcion que mostrara las celdas con cada letra
function cargarCeldas() {
  celdas = cargarLetras();
  cajaCeldas = document.getElementById("celdas");

  while (cajaCeldas.hasChildNodes()) {
    cajaCeldas.removeChild(cajaCeldas.firstChild);
  }

  for (var i = 0; i < celdas.length; i++) {
    let celda = document.createElement("div");
    celda.className = "celda";
    celda.id = i;
    celda.innerHTML = celdas[i];
    cajaCeldas.appendChild(celda);
  }
}

//Funcion para contar los aciertos y pulsaciones del usuario
function esLetra(tecla) {
  var tecla = tecla.key.toUpperCase();

  pulsaciones++;

  if (tecla == celdas[auxLetra]) {
    aciertos++;
    document.getElementById(auxLetra).style.backgroundColor = "green";
    auxLetra++;
    if (auxLetra == 5) {
      auxLetra = 0;
      cargarCeldas();
    }
  } else {
    aciertos -= 2;
  }
}

//funcion para acabar el juego, mostrar los resultados y restablecer los valores
function finJuego() {
  document.getElementById("celdas").style.display = "none";
  document.getElementById("inicio").style.display = "block";
  var result = document.getElementById("result");
  while (result.hasChildNodes()) {
    result.removeChild(result.firstChild);
  }
  var p1 = document.createElement("p");
  p1.innerHTML = "Aciertos: " + aciertos;
  result.appendChild(p1);
  var p2 = document.createElement("p");
  p2.innerHTML = "Pulsaciones: " + pulsaciones;
  result.appendChild(p2);
  console.log(p1);
  console.log(p2);
  document.getElementById("result").style.display = "block";

  celdas = [];
  aciertos = 0;
  pulsaciones = 0;
  auxLetra = 0;

  document.onkeypress = null;
}
