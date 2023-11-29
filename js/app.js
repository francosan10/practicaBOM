// setTimeout ejecuta una funcion pasado cierto tiempo en milisegundos
function saludar() {
    document.write('<p>Hola Mundo 🌎</p>');
}

window.setTimeout(saludar, 5000);

setTimeout(()=>{
    document.write('<p>Hola Mundo nuevo 🌎</p>');
}, 3000);

// setInterval