localStorage.setItem('nombre','Móvil de Raúl');

localStorage.setItem('nombre2','Álbum de Brito');

//alert(localStorage.getItem('nombre2'));

let aFrutas = ['Kiwi',' Móvil de Raúl',' Fruta del dragón'];

localStorage.setItem('arrayFrutas',aFrutas);

let otrasFrutas =JSON.parse(localStorage.setItem('arrayFrutas'));

console.log(otrasFrutas);