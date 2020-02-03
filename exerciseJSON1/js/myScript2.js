cargarDatos();

function cargarDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);
      mostrarDatos(this.responseText);
    }
  };

  xhttp.open("GET", "/exerciseJSON1/js/json/ejercicio2.json", true);
  xhttp.send();
}

function mostrarDatos(response) {
  var json = JSON.parse(response);

  for (i in json.mensaje) {
    let datos = json.mensaje[i];
    console.log(datos);
    let p = document.createElement("p");
    for (a in datos) {
      console.log(datos[a][0]["parrafo1"]);
      if (a === "remite" || a === "destinatario") {
        p.innerHTML +=
          "<span>" +
          a.toUpperCase() +
          "</span>" +
          " - " +
          datos[a][0]["nombre"] +
          ", " +
          datos[a][0]["email"] +
          "<br>";
      } else if (a === "text") {
        p.innerHTML += "<span>" + a.toUpperCase() + "</span> - ";
        for (parrafo in datos[a][0]) {
          p.innerHTML += "<br>" + datos[a][0][parrafo] + "<br>";
        }
      } else {
        p.innerHTML +=
          "<span>" + a.toUpperCase() + "</span>" + " - " + datos[a] + "<br>";
      }
    }
    document.getElementById("result").appendChild(p);
  }
}
