cargarDatos();
function cargarDatos() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText);
      mostrarDatos(this.responseText);
    }
  };

  xhttp.open("GET", "js/json/ejercicio3.json", true);
  xhttp.send();
}

function mostrarDatos(response) {
  var menu = JSON.parse(response);
  for (i in menu.menu) {
    let plato = menu.menu[i];
    let p = document.createElement("p");
    for (a in plato) {
      console.log(a);
      p.innerHTML +=
        "<span>" +
        a.toUpperCase() +
        "</span>" +
        " - " +
        plato[a] +
        (a === "precio" ? "€ " : "") +
        "<br>";
    }
    document.getElementById("result").appendChild(p);
  }
}
