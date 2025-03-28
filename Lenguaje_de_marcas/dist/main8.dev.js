"use strict";

var numObjetivo = 12;
var maxOpor = 3;
var numjugador;
var seguir = true;

for (var i = 0; i < 3 && seguir; i++) {
  numjugador = prompt('Intento nº ' + (i + 1) + 'Dime un número');

  if (numjugador == numObjetivo) {
    console.log("ENHORABUENA DE LA BUENA");
    seguir = false;
  }
}