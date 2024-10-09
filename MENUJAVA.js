function MiFuncion() {
    // aquí se define el ID del elemento que va a tomar la clase
  var x = document.getElementById("navegador");
  if (x.className === "sidebar") {
      // esta es la clase que se agrega al elemento con el id="navegador"
    x.className += " responsive";
  } else {
    x.className = "sidebar";
  }
}
