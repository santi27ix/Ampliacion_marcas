
var numObjetivo = 12;
let maxOpor = 3; 
var numjugador;
let seguir = true;
for(let i = 0; (i < 3 && seguir); i++){
    numjugador = prompt('Intento nº '+(i+1)+'Dime un número')
    if(numjugador==numObjetivo)
    {
        console.log("ENHORABUENA DE LA BUENA")
        seguir=false
    }
}