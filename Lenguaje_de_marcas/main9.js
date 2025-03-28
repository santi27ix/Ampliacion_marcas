let i = 0;
var numObjetivo = 12;
var numjugador = 0;
while (i < 3){
    numjugador = prompt('Intento nº '+(i+1)+'Dime un número')
    if(numObjetivo==numjugador){
        console.log('Enhorabuena de la buena')
        break;
    }
    i++;
}