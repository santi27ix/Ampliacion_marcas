"use strict";

var nNum = 30;
console.log("El valor de nNum es " + nNum);
nNum = nNum + 1;
console.log("El valor de nNum es " + nNum);
nNum = nNum + 5;
console.log("El valor de nNum es " + nNum);
nNum++;
console.log("El valor de nNum es " + nNum);
nNum = nNum - 1;
console.log("El valor de nNum es " + nNum);
nNum--;
console.log("El valor de nNum es " + nNum);
var objetoAlumno = {
  nombre: 'Daniel',
  cod_alum: 65544
};
console.log(objetoAlumno);
console.log("el nombre del alumno es " + objetoAlumno.nombre);
console.log("El codigo del alumno es " + objetoAlumno.cod_alum);
var ObjetoAula = {
  numero_mesas: 32,
  nombre: "ASIR1",
  numero_perchas: 15
}; //sumar en una variable las mesas mas las perchas

var suma = ObjetoAula.numero_mesas + ObjetoAula.numero_perchas;
console.log("La suma es " + suma);