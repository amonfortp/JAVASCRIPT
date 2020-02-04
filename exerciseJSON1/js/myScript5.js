cargarDatos();

function cargarDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);
      mostrarDatos(this.responseText);
    }
  };

  xhttp.open("GET", "js/json/ejercicio6.json", true);
  xhttp.send();
}

function mostrarDatos(response) {
  var datos = JSON.parse(response);

  for (i in datos.peliculas) {
    let pelicula = datos.peliculas[i];
    let p = document.createElement("p");
    for (a in pelicula) {
      if (a == "interpretes") {
        p.innerHTML += "<span>" + a.toUpperCase() + "</span>" + " - <br>";
        for (inter in pelicula[a]) {
          p.innerHTML += "&nbsp; - " + pelicula[a][inter].nombre + "<br>";
        }
      } else {
        p.innerHTML +=
          "<span>" + a.toUpperCase() + "</span>" + " - " + pelicula[a] + "<br>";
      }
    }
    document.getElementById("result").appendChild(p);
  }
}
