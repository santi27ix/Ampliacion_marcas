

function tontin() {
    


const miboton = document.getElementById("iBu")

miboton.addEventListener ('Click', ()=> {

let miclave = document.getElementById("clave").value;
let mivalor = document.getElementById("valor").value;
localStorage.setItem(miclave, mivalor);

});
};