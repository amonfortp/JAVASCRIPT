var auxTurno = 1;
var pcInterval = null;

var baraja = [];
var turno = "usu";
var dinero = 0;
var apuesta = 0;

var valorUsu = 0;
var valorPc = 0;

var cartasUsu = [];
var cartasPc = [];

document.getElementById("start").onclick = function() {
  apuesta = Number.parseInt(prompt("¿Cuanto vas a apostar?", ""));
  dinero = Number.parseInt(document.getElementById("total").value);
  if (isNaN(apuesta)) {
    alert("Apuesta dinero ¡POBRE!");
  } else if (dinero < apuesta || dinero <= 0 || apuesta <= 0) {
    alert(
      "No se puede realizar apuestas imposibles, estas apostando mas dinero del que tienes o has introducido un numero negativo"
    );
  } else {
    document.getElementById("dinero").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("seguir").style.display = "inline";
    document.getElementById("plantarse").style.display = "inline";
    document.getElementById("total").disabled = true;
    document.getElementById("apuesta").innerHTML = apuesta + " €";
    document.getElementById("valorUsuario").innerHTML += " " + valorUsu;
    document.getElementById("valorMaquina").innerHTML += " " + valorPc;
    crearBaraja();
    comenzarJuego();
  }
};

function comenzarJuego() {
  for (var i = 0; i < 2; i++) {
    pedir();
  }
  turno = "pc";
  pedir();
  if (valorUsu === 21) {
    plantarse();
  } else {
    turno = "usu";
  }
  document.getElementById("plantarse").onclick = plantarse;
  document.getElementById("seguir").onclick = function() {
    pedir();
    if (valorUsu >= 21) {
      comprobarPuntos();
    }
  };
}

function plantarse() {
  turno = "pc";
  document.getElementById("seguir").disabled = true;
  document.getElementById("plantarse").disabled = true;
  pcInterval = setInterval(function() {
    pedir();
    comprobarPuntos();
  }, 1000);
}

function pedir() {
  let carta = obtenerCarta();
  let img = document.createElement("img");
  img.src = "./imagenes/" + carta.replace(/-/gi, "") + ".png";
  document.getElementById(turno).appendChild(img);
  document.getElementById("valorUsuario").innerHTML = "Usuario " + valorUsu;
  document.getElementById("valorMaquina").innerHTML = "Máquina " + valorPc;
}

function crearBaraja() {
  var tipoCarta = ["C", "D", "H", "S"];
  var valorCarta = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "K",
    "Q"
  ];

  for (var i = 0; i < valorCarta.length; i++) {
    for (var x = 0; x < tipoCarta.length; x++) {
      let carta = valorCarta[i] + "-" + tipoCarta[x];
      baraja.push(carta);
    }
  }
}

function obtenerCarta() {
  var posicion = Math.floor(Math.random() * baraja.length);
  var cartaU = cartasUsu.indexOf(baraja[posicion]);
  var cartaP = cartasPc.indexOf(baraja[posicion]);
  if (cartaU == -1 && cartaP == -1) {
    if (turno === "usu") {
      valorUsu += valorCarta(baraja[posicion].split("-")[0]);
      cartasUsu.push(baraja[posicion]);
    } else {
      valorPc += valorCarta(baraja[posicion].split("-")[0]);
      cartasPc.push(baraja[posicion]);
    }
    return baraja[posicion];
  } else {
    return obtenerCarta();
  }
}

function valorCarta(valor) {
  if (isNaN(Number.parseInt(valor))) {
    if (valor !== "A") {
      valor = 10;
    } else {
      if (turno === "usu") {
        if (valorUsu >= 11) {
          valor = 1;
        } else {
          valor = 11;
        }
      } else {
        if (valorPc >= 11) {
          valor = 1;
        } else {
          valor = 11;
        }
      }
    }
  }

  return Number.parseInt(valor);
}

function comprobarPuntos() {
  if (turno === "usu") {
    if (valorUsu == 21) {
      plantarse();
    } else if (valorUsu > 21) {
      fin();
    }
  } else if (valorPc > valorUsu || valorPc >= 21) {
    fin();
  }
}

function fin() {
  if (turno === "usu" && valorUsu > 21) {
    alert("HAS PERDIDO " + apuesta + "€");
    dinero -= apuesta;
  } else {
    if (valorUsu > valorPc || valorPc > 21) {
      alert("HAS GANADO " + apuesta + "€");
      dinero += apuesta;
    } else if (valorUsu <= valorPc || valorPc == 21) {
      alert("HAS PERDIDO " + apuesta + "€");
      dinero -= apuesta;
    }
  }
  if (turno != "usu") {
    document.getElementById("seguir").disabled = false;
    document.getElementById("plantarse").disabled = false;
    clearInterval(pcInterval);
    pcInterval = null;
  }

  turno = "usu";
  apuesta = 0;
  valorUsu = 0;
  valorPc = 0;
  cartasUsu = [];
  cartasPc = [];

  document.getElementById("valorUsuario").innerHTML = "Usuario";
  document.getElementById("valorMaquina").innerHTML = "Máquina";
  document.getElementById("dinero").style.display = "inline";
  document.getElementById("start").style.display = "inline";
  document.getElementById("seguir").style.display = "none";
  document.getElementById("plantarse").style.display = "none";
  document.getElementById("total").disabled = false;
  document.getElementById("total").value = dinero;
  document.getElementById("apuesta").innerHTML = "Apuesta";

  var divUsu = document.getElementById("usu");
  var divPc = document.getElementById("pc");

  while (divUsu.hasChildNodes()) {
    divUsu.removeChild(divUsu.lastChild);
  }

  while (divPc.hasChildNodes()) {
    divPc.removeChild(divPc.lastChild);
  }
}
