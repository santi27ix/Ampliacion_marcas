function menor2(a,b) 
{
    if (a<b) return a;    
    else return b;
}
function menor4(a,b,c,d) 
{
    let m1 = menor2(a,b)
    let m2 = menor2(c,d)

    return menor2(m1,m2)

    //return menor2(menor2(a,b),menor2(c,d));
}
function menor16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) 
{
    let m1 = menor4(a,b,c,d)
    let m2 = menor4(e,f,g,h)
    let m3 = menor4(i,j,k,l)
    let m4 = menor4(m,n,o,m3)
    return menor4(m1,m2,m3,m4)
}

console.log(menor16(1,2,-333,4,5,6,7,8,9,10,11,12,13,14,15,16));


const aPersonas = ["Jose","Chema","Pepe","Bartolito","Begoña"]
let aux = aPersonas[1]  
aPersonas[1] = aPersonas[2];

aPersonas[2] = aux;

console.log(aPersonas)