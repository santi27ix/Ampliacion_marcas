function Eldoble(nn) 
{
    return nn + nn;

}
function incrementa3(n){
    return n + 3;
}
function incrementarN(a,b) {  
    return a + b;
}
for (let index = 0; index < 1; index++) 
    {
        
        console.log(Eldoble(16));
        let num2 = incrementa3(3);
        console.log(num2);
        let num3 = incrementa3(incrementa3(1));
        console.log(num3);
        console.log(incrementarN(13,16));    
    }

