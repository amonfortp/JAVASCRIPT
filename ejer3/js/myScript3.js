/**
 * TASK 21
 * Programa para comprobar si los dos numero
 * estan dentro del rango 50 - 99 (Incluidos)
 */

//Metodo para comprobar si estan dentro del rango
function comprobar() {
  var num1 = Number(document.getElementById("number1").value);
  var num2 = Number(document.getElementById("number2").value);

  console.log(num1 + " " + num2);
  if (isNaN(num1) || isNaN(num2)) {
    alert("Alguna de las dos opciones no es un numero");
  } else {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
      document.getElementById("return").innerHTML = "true";
    } else {
      document.getElementById("return").innerHTML = "false";
    }
  }
}

/**
 * TASK 22
 * Programa para comparar tres numero y mostrar cual
 * es el mas largo
 *
 */

//Metodo para comprobar los 3 numeros
function numGrande() {
  var num1, num2, num3;
  num1 = Number(document.getElementById("number1").value);
  num2 = Number(document.getElementById("number2").value);
  num3 = Number(document.getElementById("number3").value);
  var array = [num1, num2, num3];

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Alguna de las tres opciones no es un numero");
  } else {
    let numGrande = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > numGrande) {
        numGrande = array[i];
      }
    }

    document.getElementById("return").innerHTML =
      "El numero mas grande seleccionado es: " + numGrande;
  }
}

/**
 * TASK 23
 * Programa para mostrar el el numero mas grande y pequeño que este dentro * * del rango 50 - 100
 */

//Metodo para comprobar cual es el numero mas pequeno y cual es mas grande
function numPequeno() {
  //Obtengo los 5 numeros del usuario y los introduzco en un array
  var num1, num2, num3, num4, num5;
  num1 = Number(document.getElementById("number1").value);
  num2 = Number(document.getElementById("number2").value);
  num3 = Number(document.getElementById("number3").value);
  num4 = Number(document.getElementById("number4").value);
  num5 = Number(document.getElementById("number5").value);

  var array = [num1, num2, num3, num4, num5];

  //Inicio un if y compruebo si alguno de  los numero no es un numero usando isNaN
  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
    alert("Alguna de las 5 opciones no es un numero");
  } else {
    //Declaro las dos siguientes variables un numero mas de los rangos

    /**
      let numPequeno = 101;
      let numGrande = 49;
      //For() para recorrer el array
      for (var i = 0; i < array.length; i++) {
        //If para comprobar que el numero esta dentro del rango
        if (comparar2(array[i]) == true) {
          //Compruebo si el numero del array es el mas grande o pequeño
          if (array[i] < numPequeno) {
            numPequeno = array[i];
          }
          if (array[i] > numGrande) {
            numGrande = array[i];
          }
        }
      }
    */

    for (var i = 0; i < array.length; i++) {
      if (comparar2(array[i]) == false) {
        array[i] = null;
      }
    }

    array = array.filter(Boolean);

    if (Math.min(...array) < 101) {
      document.getElementById("return").innerHTML =
        "Numero pequeño - " +
        Math.min(...array) +
        " numero grande - " +
        Math.max(...array);
    } else {
      document.getElementById("return").innerHTML =
        "Ningun numero estaba entre 50 y 100";
    }
  }
}

/**
 * Metodo para comprobar si esta dentro del rango
 * @return {boolean}
 */
function comparar2(num) {
  var valido = false;

  if (num >= 50 && num <= 100) {
    valido = true;
  }

  return valido;
}

/**
 * TASK 24
 * Programa que cuente cuantas veces se repite un caracter en un string
 * y segun la cantidad decir si es divisible entre dos
 */

/**
 * Metodo utilizado para recoger los dos String y llamar a las funciones
 * necesarias para completar el programa
 */
function divisible() {
  var cadena = document.getElementById("frase").value.toLowerCase();
  var char = document.getElementById("char").value.toLowerCase();
  var array = cadena.split("");
  var cuenta = contarChar(array, char);

  if (cuenta % 2 == 0) {
    document.getElementById("return").innerHTML =
      cuenta + " es divisible entre dos";
  } else {
    document.getElementById("return").innerHTML =
      cuenta + " no es divisible entre dos";
  }
}

/**
 * Funcion para contar cuentas veces se repite el char en el array
 * @param {array} vector
 * @param {char} char
 * @return {int}
 */
function contarChar(vector, char) {
  var cuenta = 0;
  for (var i = 0; i < vector.length; i++) {
    if (vector[i] == char) {
      cuenta++;
    }
  }

  return cuenta;
}

/**
 * TASK 25
 * Comprobar si el tercer numero es igual a alguno de los dos anteriores
 */

/**
 * Funcion para comprobar que los datos cumplen los requisitos y
 * llamar a la funcion "tercerNumero"
 */
function compararTercero() {
  var num = document.getElementById("num").value;
  if (isNaN(num)) {
    if (Number.parseInt(num) >= 100 && Number.parseInt(num) <= 999) {
      document.getElementById("return").innerHTML = tercerNumero(num);
    } else {
      document.getElementById("return").innerHTML =
        "Elige un numero de tres cifras";
    }
  } else {
    alert("No es un numero");
  }
}

/**
 * Fucion que corta el string en 3 partes para comparar los numeros
 * @param {string} stringNum
 */
function tercerNumero(stringNum) {
  var array = stringNum.split("");
  var valido = "false";
  if (array[0] == array[2] || array[1] == array[2]) {
    valido = "true";
  }

  return valido;
}

/**
 * TASK 26
 * Convertir los 3 primeros caracteres en minuscula y el resto en
 * mayuscula, en caso de ser menos de 3 caracteres convertirlos en
 * mayuscula
 */

//Funcion para convertir los caracteres
function minusMayus2() {
  var string = document.getElementById("frase").value.toUpperCase();
  var nuevoString;

  if (string.length <= 3) {
    nuevoString = string;
  } else if (string.length > 3) {
    nuevoString =
      string.substring(0, 3).toLowerCase() +
      string.substring(4, string.length - 1).toUpperCase();
  }

  document.getElementById("return").innerHTML = nuevoString;
}

/**
 * TASK 27
 * Introducir x notas y mostar un mensaje segun la media, ademas
 * de mostrar la nota mas baja y alta ademas del examen
 */

//funcion para pedir las notas y reunir el resto de funciones
function notas() {
  var num = Number(document.getElementById("num").value);
  var media = 0;
  var notaP = 0;
  var notaA = 0;
  var array = [];

  if (num > 0) {
    for (var i = 0; i < num; i++) {
      let nota = Number(prompt("Introduce la nota del examen " + (i + 1)));
      if (!isNaN(nota)) {
        array.push(nota);
      } else {
        i--;
        alert("Solo numeros");
      }
    }

    media = calcularMedia(array);
    notaP = notaBaja(array);
    notaA = notaAlta(array);
    let felicitacion = "";

    if (media >= 89 && media <= 100) {
      felicitacion = "A+";
    } else {
      felicitacion = "Trabaja mas duro amigo";
    }

    document.getElementById("return").innerHTML =
      "Nota media = " +
      media +
      " " +
      felicitacion +
      "<br>Nota mas baja - " +
      notaP[1] +
      " del examen " +
      notaP[0] +
      "<br>Nota mas alta - " +
      notaA[1] +
      " del examen " +
      notaA[0];
  }
  console.log(array);
}

function calcularMedia(array) {
  var media = 0;

  for (var i = 0; i < array.length; i++) {
    media += array[i];
  }

  return media / array.length - 1;
}

function notaAlta(array) {
  var notaE = [0, 0];

  for (var i = 0; i < array.length; i++) {
    if (notaE[1] < array[i]) {
      notaE[0] = i + 1;
      notaE[1] = array[i];
    }
  }

  return notaE;
}

function notaBaja(array) {
  var notaE = [0, notaAlta(array)[1]];

  for (var i = 0; i < array.length; i++) {
    if (notaE[1] > array[i]) {
      notaE[0] = i + 1;
      notaE[1] = array[i];
    }
  }

  return notaE;
}
