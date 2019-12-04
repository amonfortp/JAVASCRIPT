//CONSTANTES para metodos
const NUMTASK4 = 19;

//TASK 1
//Pedir base y altura para luego calcular el AREA

//Funcion para pedir la Base y la altura, ademas de llamar al metodo para calcularla
function pedirBaseAltura() {
  var base = prompt("Introduce la base del triangulo");
  var altura = prompt("Introduce la altura del triangulo");

  document.getElementById("result").innerHTML =
    base + " * " + altura + " = " + areaTringulo(base, altura);
}

//Funcion para calcular el area del triangulo, pasanadole la base y la altura
function areaTringulo(base, altura) {
  var result;

  result = (base * altura) / 2;

  return result;
}

//TASK 2
//Pedir temperatura y convertila a Celsius o Fahrenheit

//Funcion para pedir la temperatura y a que convertir
function pedirTemperatura() {
  var temperatura = prompt("¿Que temperatura quieres calcular?");
  var opcion = prompt(
    "¿A que temperatura quiere hacer el cambio?",
    "Celsius / Fahrenheit"
  );
  var cel;
  var far;

  if (opcion == "Fahrenheit") {
    cel = aFahrenheit(temperatura);
    document.write(temperatura + "ºC is " + cel + "ºF");
  } else if (opcion == "Celsius") {
    far = aCelsius(temperatura);
    document.write(temperatura + "ºF is " + far + "ºC");
  }
}

function aFahrenheit(temperatura) {
  var resultado;

  resultado = (temperatura * 9) / 5 + 32;

  return resultado;
}

function aCelsius(temperatura) {
  var resultado;

  resultado = ((temperatura - 32) * 5) / 9;

  return resultado;
}

//TASK 3
//Sumar dos enteros, y si el valor de los enteros el el mismo triplicar el resultado

//Metodo para pedir los numeros
function pedirEnteros() {
  var entero1 = Number(prompt("Escribe algun numero 1"));
  var entero2 = Number(prompt("Escribe algun numero 2"));
  var resultado = suma(entero1, entero2);

  if (entero1 == entero2) {
    document.getElementById("result").innerHTML =
      entero1 + " + " + entero2 + " * 3 = " + resultado;
  } else {
    document.getElementById("result").innerHTML =
      entero1 + " + " + entero2 + " = " + resultado;
  }
}

//Metodo para calcular la suma
function suma(e1, e2) {
  var resultado = e1 + e2;

  if (e1 == e2) {
    resultado *= 3;
  }

  return resultado;
}

//TASK 4
//Calcular la diferencia absoluta de un numero con un numero, si es mayor que 19 3 veces la diferencia

//Metodo para pedir los numeros
function pedirNumero() {
  var num = Number(prompt("Escoge un numero menor, mayor o igual que 19"));
  var dif = comparar(num);

  document.getElementById("result").innerHTML = dif;
}

//Funcion para comparar el numero introducido con la contaste
function comparar(num) {
  var diferencia = num - NUMTASK4;

  if (num > NUMTASK4) {
    diferencia *= 3;
  }

  return diferencia;
}

//TASK 5
//Pedir dos numero y devolver TRUE en caso de que uno sea 50 o su suma sea 50

//Metodo para pedir los numeros
function pedirNumeros() {
  var num1 = Number(prompt("Introduce el numero 1"));
  var num2 = Number(prompt("Introduce el numero 2"));

  document.write(compararSumar(num1, num2));
}

function compararSumar(n1, n2) {
  var suma = n1 + n2;

  if (n1 == 50 || n2 == 50 || suma == 50) {
    return true;
  } else {
    return false;
  }
}

//TASK 6
//Pedir una cadena de texto si no empieza por EL, añadirlo

//Metodo para pedir la cadena
function pedirCadena() {
  var cadena = prompt("Escribe una frase");

  if (cadena.charAt(0) == "E" && cadena.charAt(1)) {
    document.write(cadena);
  } else {
    document.write("El " + cadena);
  }
}
