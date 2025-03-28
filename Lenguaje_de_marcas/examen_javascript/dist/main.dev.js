"use strict";

var numclase = 29;
var numraro = numclase % 5 + 6;
document.write(numraro);
console.log(" (2 puntos) Escribe un programa que reciba 3 palabras (con la función prompt) e imprima por consola “DISTINTAS!” si las 3 son distintas.");
var palabra1 = prompt('Escriba una palabra');
var palabra2 = prompt('Escriba una palabra');
var palabra3 = prompt('Escriba una palabra');

if (palabra1 !== palabra2 && palabra1 !== palabra3 && palabra2 !== palabra3) {
  console.log('DISTINTAS!');
} else {
  console.log('Se ha escrito una palabra igual');
}