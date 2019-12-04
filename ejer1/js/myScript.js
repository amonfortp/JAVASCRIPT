//Exercise 2
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

//Excercise 4
function calculo() {
  var x, y, z;
  x = 5;
  y = 6;
  z = x + y;

  document.getElementById("calc").innerHTML = x + " + " + y + " = " + z;
}

// Exercise 7
// Este es su sueldo al dia
var sueldoDia = 141;

// Funcion para calcular el sueldo de la semana
function sueldoS() {
  document.getElementById("sueldo").innerHTML =
    "Gana " + sueldoDia * 7 + "€ a la semana";
}

// Fucion para calcular el sueldo de un mes
function sueldoM() {
  document.getElementById("sueldo").innerHTML =
    "Gana " + sueldoDia * 30 + "€ al mes";
}

// Funcion para calcular el sueldo de un año
function sueldoA() {
  document.getElementById("sueldo").innerHTML =
    "Gana " + sueldoDia * 365 + "€ al año";
}

//Ejercicio 8
// variables con el valor de las notas

//Funcion para calcular la evaluacion
function calcularEval(teoria, practicas, actitud) {
  var nota = teoria * 0.4 + practicas * 0.5 + actitud * 0.1;

  return nota;
}

//Funcion para calcular el curso
function calcularCurso() {
  var teoria;
  var practicas;
  var actitud;

  teoria = 6;
  practicas = 10;
  actitud = 8;
  var eval1 = calcularEval(teoria, practicas, actitud);

  document.getElementById("eval1").innerHTML = eval1.toFixed(2);

  teoria = 8;
  practicas = 6;
  actitud = 5;
  var eval2 = calcularEval(teoria, practicas, actitud);

  document.getElementById("eval2").innerHTML = eval2.toFixed(2);

  document.getElementById("final").innerHTML = ((eval1 + eval2) / 2).toFixed(2);
}

//Exercise 9
function horasDeEstudio() {
  var nombre = "Alejandro Monfort";
  var horaE = 2;
  var horaT = 0;

  document.getElementById("nombre").innerHTML = "Me llamo " + nombre;
  document.getElementById("horaE").innerHTML =
    "Estudio " + horaE + " horas al dia, " + horaE * 7 + " a la semana";
  document.getElementById("horaT").innerHTML =
    "Trabajo " + horaT + " horas al dia, " + horaT * 7 + " a la semana";
}
