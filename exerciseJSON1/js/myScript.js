document.getElementById("add").onclick = function() {
  var dest = document.getElementById("destinatario").value;
  var art = document.getElementById("articulo").value;
  var dir = document.getElementById("direccion").value;
  var fech = document.getElementById("fecha").value;

  if (dest === "" || art === "" || dir === "" || fech === "") {
    alert("Rellena todos los campos");
  } else {
    var pedido = new Pedido(dest, art, dir, fech);

    var textoJSON = JSON.stringify(pedido);
    var objectJSON = JSON.parse(textoJSON);
    pedidosRealizados.push(objectJSON);

    var dest = (document.getElementById("destinatario").value = "");
    var art = (document.getElementById("articulo").value = "");
    var dir = (document.getElementById("direccion").value = "");
    var fech = (document.getElementById("fecha").value = "");

    alert("Pedido activo");
  }
};

document.getElementById("buscar").onclick = function() {
  var dest = document.getElementById("destinatario").value;

  if (dest === "") {
    alert("Introduce un nombre");
  } else {
    if (pedidosRealizados.length === 0) {
      alert("No hay ningún pedido activo");
    } else {
      for (var i = 0; i < pedidosRealizados.length; i++) {
        if (pedidosRealizados[i].destinatario === dest) {
          document.getElementById("result").innerHTML =
            pedidosRealizados[i].mostrar;
        }
      }
    }
  }
};

var pedidosRealizados = [];

function Pedido(destinatario, articulo, direccion, fecha) {
  this.destinatario = destinatario;
  this.articulo = articulo;
  this.direccion = direccion;
  this.fecha = fecha;

  this.mostrar =
    "Destinatario: " +
    this.destinatario +
    " / Articulo: " +
    this.articulo +
    " / Dirección: " +
    this.direccion +
    " / Fecha: " +
    this.fecha;
}
