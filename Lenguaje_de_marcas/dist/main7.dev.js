"use strict";

var pasar = 0;
pasar = prompt('Bienvenido al juego de ASMERIX, en este juego, usted tendrá que pasar diferentes niveles hasta ganar el juego. Pulse (c) para seguir adelante');
prompt('Nivel 1, se tirarán dos dados, si saca más de 15, pasa. Pulse (c) para seguir adelante');
var dado1 = prompt('Su primer número es ', Math.floor(Math.random() * 12));
var dado2 = prompt('Su segundo número es ', Math.floor(Math.random() * 12));
dado1 = parseInt(dado1);
dado2 = parseInt(dado2);
var suma = dado1 + dado2;
prompt('Sus dados suman ' + suma);

if (dado1 + dado2 >= 15) {
  prompt('Felicidades, has logrado llegar al nivel 2 pulse (c) para continuar');
  prompt('Para lograr llegar al nivel 3, se generará un número aleatorio del 1 al 5 y usted tendrá que adivinarlo, tiene dos oportunidades. Pulse (c) para seguir adelante');
} else {
  prompt('Dedícate a otra cosa');
}