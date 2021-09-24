const fila = document.querySelector('.contenedor-carousel');
const peliculas =document.querySelectorAll('.pelicula');

const flechaIsquierda =document.getElementById('flecha-izq');
const flechaDerecha =document.getElementById('flecha-der');

// Event listener para flecha derecha
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const idicadorActivo = document.querySelector('.indicadores .activo');
    if (idicadorActivo.nextSibling) {
        idicadorActivo.nextSibling.classList.add('activo');
        idicadorActivo.classList.remove('activo')
    }

});
// Event listener para flecha izquierda
flechaIsquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const idicadorActivo = document.querySelector('.indicadores .activo');
    if (idicadorActivo.previousSibling) {
        idicadorActivo.previousSibling.classList.add('activo');
        idicadorActivo.classList.remove('activo')
    }


});

//paginacion
const numeroPaginas = peliculas.length / 5;
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores') .appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}
//hover de peliculas
peliculas.forEach((pelicula)=>{
    pelicula.addEventListener('mouseenter', (e) =>{
        const elemento = e.currentTarget;
        setTimeout(()=> {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        },300);
    });
});
fila.addEventListener('mouseleave', ()=> {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});