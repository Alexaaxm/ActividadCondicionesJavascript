//Actividad 1
const bordeImagen = document.querySelector('.imagenBorde');

bordeImagen.addEventListener('click', function () {

    if (bordeImagen.style.border) {
        bordeImagen.style.border = ''; // Quita el borde
    } else {
        bordeImagen.style.border = '2px solid red'; // Agrega el borde
    }

});

