document.getElementById("add").onclick = function() {
  var dest = document.getElementById("destinatario").value;
  var art = document.getElementById("articulo").value;
  var dir = document.getElementById("direccion").value;
  var fech = document.getElementById("fecha").value;

  var pedido = new Pedido(dest, art, dir, fech);

  var textoJSON = JSON.stringify(pedido);
  var objectJSON = JSON.parse(textoJSON);
  pedidosRealizados.push(objectJSON);
  console.log("insertado");
};

document.getElementById("buscar").onclick = function() {
  var dest = document.getElementById("destinatario").value;
  var art = document.getElementById("articulo").value;
  var dir = document.getElementById("direccion").value;
  var fech = document.getElementById("fecha").value;

  var pedido = new Pedido(dest, art, dir, fech);

  var textoJSON = JSON.stringify(pedido);
  var objectJSON = JSON.parse(textoJSON);

  for (var i = 0; i < pedidosRealizados.length; i++) {
    if (pedidosRealizados[i].destinatario === objectJSON.destinatario) {
      document.getElementById("result").innerHTML = pedido.mostrar;
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
