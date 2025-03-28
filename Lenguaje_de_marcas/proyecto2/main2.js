function shuffleArray(arr) {
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
}
 
let aBaraja = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(aBaraja);

shuffleArray(aBaraja);

console.log(aBaraja);

//jugador1

let aJugador = [];

aJugador.push(aBaraja[0]);
aJugador.push(aBaraja[4]);
aJugador.push(aBaraja[8]);
console.log("Mano del jugador 1");
console.log(aJugador);

//jugador2
let aJugador2 = [];

aJugador2.push(aBaraja[1]);
aJugador2.push(aBaraja[5]);
aJugador2.push(aBaraja[9]);
console.log("Mano del jugador 2");
console.log(aJugador2);

//jugador3

let aJugador3 = [];

aJugador3.push(aBaraja[2]);
aJugador3.push(aBaraja[6]);
aJugador3.push(aBaraja[10]);
console.log("Mano del jugador 3");
console.log(aJugador3);

//jugador4

let aJugador4 = [];

aJugador4.push(aBaraja[3]);
aJugador4.push(aBaraja[7]);
aJugador4.push(aBaraja[11]);
console.log("Mano del jugador 4");
console.log(aJugador4);


let SumaAcumulada = 0;

for (let index = 0; index <  aJugador.length; index++) 
  {
      SumaAcumulada = SumaAcumulada + aJugador[index];
  
}
console.log("calidad de la mano "+ SumaAcumulada);

SumaAcumulada= 0;
for (let index = 0; index <  aJugador2.length; index++) 
  {
      SumaAcumulada = SumaAcumulada + aJugador2[index];
  
}
console.log("calidad de la mano "+ SumaAcumulada);

SumaAcumulada= 0;

for (let index = 0; index <  aJugador3.length; index++) 
  {
      SumaAcumulada = SumaAcumulada + aJugador3[index];
  
}
console.log("calidad de la mano "+ SumaAcumulada);

SumaAcumulada= 0;

for (let index = 0; index <  aJugador4.length; index++) 
  {
      SumaAcumulada = SumaAcumulada + aJugador4[index];
  
}
console.log("calidad de la mano "+ SumaAcumulada);

function calidad(miArray){

  let suma=0;
  
  for (let index = 0; index < miArray.length; index++) 
      {
          suma = suma + calidad[index];  
      }
      return suma;
  }
  
  console.log("calidad de la mano juagador 1" + calidad(aJugador));
  console.log("calidad de la mano juagador 2" + calidad(aJugador2));
  console.log("calidad de la mano juagador 3" + calidad(aJugador3));
  console.log("calidad de la mano juagador 4" + calidad(aJugador4));
  
  let suma1 = 12;
  let suma2 = 5;
  let suma3 = 6;
  let suma4 = 20;
  
  //decir que jugador va mejor y peor
  if (suma1 > suma2 && suma1 > suma3 && suma1 > suma4)
  {
      console.log("el jugador 1 va mejor");
  }
  else if (suma2 > suma1 && suma2 > suma3 && suma2 > suma4)
  {
      console.log("el jugador 2 va mejor");
  }
  else if (suma3 > suma1 && suma3 > suma2 && suma3 > suma4)
  {
  console.log("el jugador 3 va mejor");
  }
  else if (suma4 > suma1 && suma4 > suma2 && suma4 > suma3)
  {
      console.log("el jugador 4 va mejor");
  }

// para 3
  if ((suma1 > suma2) && (suma1 > suma3))
  {
        console.log("el mayor es suma 1")    
  }
  else if (suma2 > suma3)
  {
        console.log("El mayor es suma 2")
  }
  else
  {
        console.log("El mayor es suma 3")
  }


// comparador

function Comparador() {

  if (((suma1 > suma2) && (suma1 > suma3) && (suma1>suma4)))
    {
            console.log("Suma 1 es el más grande entre los 4")
    }else if((suma2 > suma1) && (suma2 > suma3))
      {
              console.log("Suma 2 es el más grande entre los tres")
      }else if (suma3 > suma2) {
          console.log("Suma 3 es el más grande entre los tres")
      }else
      {

      }
}
 
function mayor2(n1,n2) {
  if (n1>n2) return n1;
  else return n2; 
  }

  console.log(mayor2(6,8));

  function mayor3(n1,n2,n3) {
    if ((n1 > n2) && (n1 > n3))
      {
            return n1;  
      }
      else if (n2 > n3)
      {
            return n2;
      }
      else
      {
        return n3;
      }
    
    }

    console.log(mayor3(6,888,32))
  
  function mayor4(n1,n2,n3,n4) {
    if (n1 > n2 && n1 > n3 && n1 > n4)
      {
        return n1;  
      }
      else if (n2 > n3 && n2 > n4)
      {
        return n2;  
      }
      else if (n3 > n4)
      {
        return n3;  
      }
      else
      {
        return n4;  
      }
    
  }
  console.log(mayor4(2,5,666,1))

  function mayor8(n1,n2,n3,n4,n5,n6,n7,n8) 
  {
        return mayor2(mayor4(n1,n2,n3,n4), mayor4(n5,n6,n7,n8))   
  }

  let aNum = [];

  aNum[0]=9;
  aNum[1]=99;
  aNum[2]=999;
  aNum[3]=9999;

  //mayor de este array

  let mayor =  -9999999;
  for (let index = 0; index < aNum.length; index++) 
  {
      if (aNum[index] > mayor)
      {
          mayor=aNum[index];
      }   
  }
  console.log("el mayor es" + mayor);