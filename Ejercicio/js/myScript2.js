/**
 * TASK 7
 * Programa que devuelva la fecha actual en un formato concreto
 * Today is: ??
 * Current time is: ??:??:??
 */

//Metodo para mostrar el nombre del dia actual y la hora de dicho momento
function mostrarDiaActual() {
  var dias = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var diaActual = new Date();

  document.write("Today is: " + dias[diaActual.getDay()] + "<br>");
  document.write(
    "Current time is: " +
      diaActual.getHours() +
      ":" +
      diaActual.getMinutes() +
      ":" +
      diaActual.getSeconds()
  );
}

/**
 * TASK 8
 * Escribe la fecha actual en diferentes formatos
 */

//Metodo para escribir el formato de las fechas
function formatosFechas() {
  diaActual = new Date();

  document.write(
    diaActual.getMonth() +
      "-" +
      diaActual.getDay() +
      "-" +
      diaActual.getFullYear() +
      ", "
  );

  document.write(
    diaActual.getMonth() +
      "/" +
      diaActual.getDay() +
      "/" +
      diaActual.getFullYear() +
      " or "
  );

  document.write(
    diaActual.getDay() +
      "-" +
      diaActual.getMonth() +
      "-" +
      diaActual.getFullYear() +
      ", "
  );

  document.write(
    diaActual.getDay() +
      "/" +
      diaActual.getMonth() +
      "/" +
      diaActual.getFullYear()
  );
}

/**
 * TASK 9
 * Programa que calcula cuantos dias quedan para navidad
 */

//Funccion que calcula los dias que quedan para navidad
function calcularDias() {
  var fechaActual = new Date();
  var fechaElegida = new Date(document.getElementById("fecha").value);
  var navidad = new Date(fechaElegida.getFullYear(), 12, 24);

  document.write(
    "Faltan " +
      operacion(fechaActual, navidad) +
      " dias para el " +
      navidad +
      " desde hoy <br><br>"
  );

  document.write(
    "Faltan " +
      operacion(fechaElegida, navidad) +
      " dias para el " +
      navidad +
      " desde del" +
      fechaElegida
  );
}

function operacion(fechaI, fechaF) {
  fechaI.setMonth(fechaI.getMonth() + 1);
  var dif = fechaF - fechaI;
  var cuenta = Math.round(dif / 1000 / 60 / 60 / 24);

  return cuenta;
}

/**
 * TASK 10
 * Elegir una posicion de un String y eliminar el caracter por su posicion
 */

//Funcion para eliminar el caracter por posicion
function eliminarChar() {
  var posicion = document.getElementById("posicion").value;
  var stringViejo = document.getElementById("String").innerText;
  var arreglo = stringViejo.split("");
  var nuevoString = "";

  arreglo[posicion] = "";

  nuevoString = arreglo.join("");
  document.getElementById("String").innerHTML = nuevoString;
}

/**
 * TASK 11
 * Programa para poder mover el primer caracter o el ultimo
 */

//Funcion para cambiar el primer caracter
function cambiarPrimerChar() {
  /**
   * posicion - variable donde queremos mover el String
   * stringViejo - String que vamos a modificar
   * arreglo - dividir en un array cada caracter del string
   * char - guardar el string de la posicion a la cual vamos a mover el primer string
   */
  var posicion = document.getElementById("primero").value;
  var stringViejo = document.getElementById("String").innerText;
  var arreglo = stringViejo.split("");
  var char = arreglo[posicion];

  /**
   * Intercambio entre las posiciones
   */
  arreglo[posicion] = arreglo[0];
  arreglo[0] = char;

  nuevoString = arreglo.join("");
  document.getElementById("String").innerHTML = nuevoString;
}

//Funcion para cambiar el primer caracter
function cambiarUltimoChar() {
  /**
   *
   * stringViejo - String que vamos a modificar
   * arreglo - dividir en un array cada caracter del string
   * posicion - variable donde queremos mover el String
   * char - guardar el string de la posicion a la cual vamos a mover el ultimo string
   */

  var stringViejo = document.getElementById("String").innerText;
  var arreglo = stringViejo.split("");
  var posicion =
    Number(arreglo.length - 1) +
    Number(document.getElementById("ultimo").value);
  var char = arreglo[posicion];

  /**
   * Intercambio entre posiciones
   */
  arreglo[posicion] = arreglo[arreglo.length - 1];
  arreglo[arreglo.length - 1] = char;

  nuevoString = arreglo.toString().replace(/,/gi, "");
  document.getElementById("String").innerHTML = nuevoString;
}

/**
 * TASK 12
 * Anadir un caracter al inicio y al final del string
 */

//Funcion para insertar los caracteres
function insertar() {
  var stringViejo = document.getElementById("String").innerText;
  var char = document.getElementById("char").value.charAt(0);
  var nuevoString = char + stringViejo + char;

  document.getElementById("String").innerHTML = nuevoString;
}

/**
 * TASK 13
 * Crear un programa que cree una frase y añada los tres
 * ultimos caracteres al final y al principo del caracter
 */

//Funcion para crear la frase
function crearFrase() {
  var string = document.getElementById("frase").value;
  var cadenaChar;
  var nuevoString;
  console.log(string + " " + string.length);
  if (string.length >= 3) {
    cadenaChar = string.substr(string.length - 3, 3);
    nuevoString = cadenaChar + string + cadenaChar;
    document.getElementById("String").innerHTML = nuevoString;
  } else {
    alert("La frase o palabra no es mas larga de 3 caracteres");
  }
}

/**
 * TASK 14
 * Comprobar que una frase empieza por Java
 *
 */

const PALABRATASK14 = "Java";

//Funcion para comprobar si empieza por java
function comprobarJava() {
  var string = document.getElementById("frase").value;

  if (string.replace(/ /gi, "").substr(0, 4) == PALABRATASK14) {
    document.getElementById("return").innerHTML = "true";
  } else {
    document.getElementById("return").innerHTML = "false";
  }
}

/**
 * TASK 15
 * Si la palabra Script esta en la posicion 5 (indice 4) eliminar la palabra del resultado final
 */

const PALABRATASK15 = "Script";

//Funcion que compruba si Script esta en la posicion 5
function comprobarScript() {
  var string = document.getElementById("frase").value;
  var nuevoString;
  if (string.substr(4, 6) == PALABRATASK15) {
    nuevoString = string.replace(PALABRATASK15, "");
    document.getElementById("return").innerHTML = nuevoString;
  } else {
    document.getElementById("return").innerHTML = string;
  }
}

/**
 * TASK 16
 * Progama para convertir los tres primeros caracteres en minuscula
 * y en caso de ser menor a 3 caracteres convertir en mayusculas
 */

//Funcion para convertir los caracteres
function minusMayus() {
  var string = document.getElementById("frase").value;
  var nuevoString;

  if (string.length == 3) {
    nuevoString = string.substring(0, 3).toLowerCase();
  } else if (string.length > 3) {
    nuevoString =
      string.substring(0, 3).toLowerCase() +
      string.substring(4, string.length - 1).toUpperCase();
  } else {
    nuevoString = string.toUpperCase();
  }

  document.getElementById("return").innerHTML = nuevoString;
}

/**
 * TASK 17
 * Programa para dar la vuelta a un String
 */

//Funcion para darle la vuelta al string
function reverse() {
  var string = document.getElementById("frase").value;
  var arrayString = string.split("");
  var arreglo = [];
  var nuevoString;

  for (var i = arrayString.length - 1; i >= 0; i--) {
    arreglo.push(arrayString[i]);
  }

  nuevoString = arreglo.join("");

  document.getElementById("return").innerHTML = nuevoString;
}

/**
 * TASK 18
 * Introducir un caracter y devuelve la siguiente letra en el alfabeto
 */

//Funcion para cambiar la letra
function nextChar() {
  var char = document
    .getElementById("char")
    .value.charAt(0)
    .replace(/ /gi, "")
    .toLowerCase();
  var newChar;

  if (char != "" && char >= "a" && char <= "z") {
    if (char == "z") {
      newChar = "a";
    } else {
      newChar = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    document.getElementById("return").innerHTML = newChar;
  } else {
    document.getElementById("return").innerHTML = "No pongas nada extraño";
  }
}
