
//nivel 1
console.log('Bienvenido al juego de ASMERIX, en este juego, usted tendrá que pasar diferentes niveles hasta ganar el juego.');
console.log('Nivel 1, se tirarán dos dados, si saca más de 15, pasa.');
let dado1 = Math.floor(Math.random() *12) + 1;
let dado2 = Math.floor(Math.random() *12) + 1;
let suma = dado1 + dado2;
console.log('La suma de sus dados es ' + suma)
if (suma < 15 ){
    console.log('Dedícate a otra cosa');    
}
if (suma >= 15){
          
    


//nivel 2

    console.log('Felicidades, has logrado llegar al nivel 2')
    console.log('Para lograr llegar al nivel 3, se generará un número aleatorio del 1 al 5 y usted tendrá que adivinarlo, tiene dos oportunidades.')
    const num_aleatorio = (Math.floor(Math.random() *5) + 1);
    let respuesta = prompt('Adivine su número aleatorio entre 1 y 5')
    let intentos = 0
    intentos + 1
    if(respuesta != num_aleatorio || intentos <= 2){
        intentos + 1
        respuesta = prompt('Incorrecto, segundo intento, vuelva a adivinar un número aleatorio entre 1 y 5')
    }    
    else{
        console.log('Has perdido, el número oculto era ' + num_aleatorio)
        console.log('Eres malill@')
    } 
    //nivel 3
    if(respuesta == num_aleatorio){
            respuesta=true
            console.log('Felicidades has logrado pasar el nivel 3, ahora se generará una clave de tres bits la cual tendrá que adivinar')
            let num3bits = (Math.floor(Math.random() *3).toString(2).padStart(3, "0"));
            let respuesta2 = prompt('Cuál es la clave de tres bits?')
    }else {
        console.log("Eres buenecillo@")
    }
    //nivel 4
    console.log('Felicidades, has logrado entrar en el último nivel, ahora se te propondrá una pregunta, esta se responde con un número')
    let respuesta3 = prompt('¿Cuantas personas habitan en EE.UU? (en millones)')
    let pregunta = 300
    if(pregunta == respuesta3){
        console.log('YOU ARE DE BEST')
    }else{
        console.log('Eres grande')
    }
}     