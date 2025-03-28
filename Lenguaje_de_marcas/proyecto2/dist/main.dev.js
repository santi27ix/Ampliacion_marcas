"use strict";

var NumerosDePie = [12, 35, 47, 48]; //console.log(NumerosDePie(0));
//console.log(NumerosDePie(2));

for (var index = 0; index < NumerosDePie.length; index++) {
  console.log(NumerosDePie[index]);
}

NumerosDePie.push(38);
console.log("DESPUES");
NumerosDePie.pop();
console.log("DESPUES DE DESPUES");
NumerosDePie.forEach(function (valor, indice) {
  console.log(indice + ":" + valor);
});
var personas = ["Jose", "Chema", "Pepe", "Juan", "Roscachapa"];
personas[0] = 'Josito';
personas.forEach(function (valor, indice) {
  console.log(indice + ":" + valor);
}); //intercambiar el valor de la posición 2 y 3, independientemente de los valores

var aux;
aux = personas[2];
personas[2] = personas[3];
personas[3] = aux;
personas.forEach(function (valor, indice) {
  console.log(indice + ":" + valor);
});
personas.sort();
console.log(personas);
var numerospotencia2 = [32, 64, 128, 16, 8, 4, 2];
numerospotencia2.sort();
console.log(numerospotencia2);
numerospotencia2.sort(function (a, b) {
  return a - b;
});
console.log(numerospotencia2);
var fila1 = [1, 2];
var fila2 = [5, 7];
var matriz1 = [fila1, fila2];
var matriz2 = [[1, 2], [5, 7]];
console.log(matriz1);
console.log(matriz2);

for (var _index = 0; _index < matriz2.length; _index++) {
  var fila = matriz2[_index];

  for (var i = 0; i < fila.length; i++) {
    fila[i]++;
  }
} // incrementar en 2 cada elemento


function ImprimirMatriz() {}