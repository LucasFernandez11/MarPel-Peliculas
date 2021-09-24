const fila = document.querySelector('.contenedor-carousel');
const peliculas =document.querySelectorAll('.pelicula');

const flechaIsquierda =document.getElementById('flecha-izq');
const flechaDerecha =document.getElementById('flecha-der');

// Event listener para flecha derecha
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});
// Event listener para flecha izquierda
flechaIsquierda.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});