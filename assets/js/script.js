
function divide() {
  var nombreUn = document.getElementById('premier_nombre');
  var nombreDeux = document.getElementById('deuxieme_nombre');
  var modulo = parseInt(nombreUn.value) % parseInt(nombreDeux.value);
  alert(modulo);
}
