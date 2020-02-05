var number;
var respuesta = document.getElementById("result");

document.getElementById("submit").onclick = function() {
  number = Number.parseInt(document.getElementById("number").value);
  if (!isNaN(number)) {
    cargarDatos();
  } else {
    alert("Introduce un numero");
  }
};

function cargarDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let respuesta = document.getElementById("result");
      respuesta.innerHTML = number;
      if (Number.parseInt(this.responseText) == 0) {
        respuesta.innerHTML += " es primo";
      } else {
        respuesta.innerHTML += " no es primo";
      }

      palindromo();
    }
  };

  xhttp.open("POST", "php/esPrimo.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("numero=" + number);
}

function palindromo() {
  var arrayNum = String(number).split("");
  var aux;

  for (var i = 0; i < arrayNum.length - 1; i++) {
    aux = i + 1;
    if (arrayNum[i] != arrayNum[aux]) {
      respuesta.innerHTML += " y no es un palindromo";
      return;
    }
  }

  respuesta.innerHTML += " y es un palindromo";
}
