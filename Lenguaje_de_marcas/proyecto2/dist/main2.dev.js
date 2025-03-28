"use strict";

function shuffleArray(arr) {
  arr.sort(function (a, b) {
    return Math.random() - 0.5;
  });
}

var aBaraja = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(aBaraja);
shuffleArray(aBaraja);
console.log(aBaraja); //jugador1

var aJugador = [];
aJugador.push(aBaraja[0]);
aJugador.push(aBaraja[4]);
aJugador.push(aBaraja[8]);
console.log("Mano del jugador 1");
console.log(aJugador); //jugador2

var aJugador2 = [];
aJugador2.push(aBaraja[1]);
aJugador2.push(aBaraja[5]);
aJugador2.push(aBaraja[9]);
console.log("Mano del jugador 2");
console.log(aJugador2); //jugador3

var aJugador3 = [];
aJugador3.push(aBaraja[2]);
aJugador3.push(aBaraja[6]);
aJugador3.push(aBaraja[10]);
console.log("Mano del jugador 3");
console.log(aJugador3); //jugador4

var aJugador4 = [];
aJugador4.push(aBaraja[3]);
aJugador4.push(aBaraja[7]);
aJugador4.push(aBaraja[11]);
console.log("Mano del jugador 4");
console.log(aJugador4);
var SumaAcumulada = 0;

for (var index = 0; index < aJugador.length; index++) {
  SumaAcumulada = SumaAcumulada + aJugador[index];
}

console.log("calidad de la mano " + SumaAcumulada);
SumaAcumulada = 0;

for (var _index = 0; _index < aJugador2.length; _index++) {
  SumaAcumulada = SumaAcumulada + aJugador2[_index];
}

console.log("calidad de la mano " + SumaAcumulada);
SumaAcumulada = 0;

for (var _index2 = 0; _index2 < aJugador3.length; _index2++) {
  SumaAcumulada = SumaAcumulada + aJugador3[_index2];
}

console.log("calidad de la mano " + SumaAcumulada);
SumaAcumulada = 0;

for (var _index3 = 0; _index3 < aJugador4.length; _index3++) {
  SumaAcumulada = SumaAcumulada + aJugador4[_index3];
}

console.log("calidad de la mano " + SumaAcumulada);