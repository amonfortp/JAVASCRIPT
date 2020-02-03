cargarDatos();

function cargarDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);
      mostrarDatos(this.responseText);
    }
  };

  xhttp.open("GET", "/exerciseJSON1/js/json/ejercicio5.json", true);
  xhttp.send();
}

function mostrarDatos(response) {
  var datos = JSON.parse(response);

  for (i in datos.arboles) {
    let arbol = datos.arboles[i];
    console.log(arbol);
    let p = document.createElement("p");
    for (a in arbol) {
      console.log(a + " " + arbol[a]);
      p.innerHTML += "<span>" + a + "</span>" + " - " + arbol[a] + "<br>";
    }
    document.getElementById("result").appendChild(p);
  }
}
