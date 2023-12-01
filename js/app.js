// setTimeout ejecuta una funcion pasado cierto tiempo en milisegundos
function saludar() {
    document.write('<p>Hola Mundo 🌎</p>');
    if(contador === 5) {
        clearInterval(idSetInterval);
    }
    contador++;
}

// window.setTimeout(saludar, 5000);

// setTimeout(()=>{
//     document.write('<p>Hola Mundo nuevo 🌎</p>');
// }, 3000);

let contador = 1;
const idSetInterval = setInterval(saludar, 2000); // su objetivo es ejecutar una funcion en determinado tiempo
console.log(idSetInterval)

const fecha = new Date();
console.log(fecha);
console.log(fecha.getMonth);
