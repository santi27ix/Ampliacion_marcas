let NumerosDePie = [12,35,47,48];

//console.log(NumerosDePie(0));

//console.log(NumerosDePie(2));

for (let index = 0; index < NumerosDePie.length; index++) {
    
   console.log(NumerosDePie[index]);
}

NumerosDePie.push(38);

console.log("DESPUES");

NumerosDePie.pop();

console.log("DESPUES DE DESPUES")

NumerosDePie.forEach((valor,indice) =>
{
        console.log(indice +":"+ valor);
});

const personas = ["Jose","Chema","Pepe","Juan","Roscachapa"]
personas[0] = 'Josito';
personas.forEach((valor,indice) =>
{
        console.log(indice +":"+ valor);
});
//intercambiar el valor de la posición 2 y 3, independientemente de los valores

let aux;
aux = personas[2];
personas[2]=personas[3];
personas[3] = aux;

personas.forEach((valor, indice) =>
{
        console.log(indice+":"+ valor);
});

personas.sort();

console.log(personas);

let numerospotencia2= [32, 64, 128, 16, 8, 4, 2, ];

numerospotencia2.sort();

console.log(numerospotencia2);

numerospotencia2.sort((a, b) => a - b);

console.log(numerospotencia2);

let fila1 = [1,2];
let fila2 = [5,7];

let matriz1 = [fila1,fila2];

let matriz2 = [[1,2],[5,7]];

console.log(matriz1)
console.log(matriz2)


for (let index = 0; index < matriz2.length; index++) {
        const fila = matriz2[index];
        for (let i = 0; i < fila.length; i++) 
        {
                fila[i]++     
        }
        
}

// incrementar en 2 cada elemento

function ImprimirMatriz() {
        
}