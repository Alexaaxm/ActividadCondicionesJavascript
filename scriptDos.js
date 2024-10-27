//actividad 2
const botonSuma = document.querySelector('.boton');


botonSuma.addEventListener('click', function () {
    let stickersPrimero = document.querySelector('.primerStickers').value;
    let stickersSegundo = document.querySelector('.segundoStickers').value;
    let stickersTercero = document.querySelector('.tercerStickers').value;
    let mensaje = document.querySelector('.mensaje');
    let resultado = Number(stickersPrimero) + Number(stickersSegundo) + Number(stickersTercero);

    if (resultado < 0) {
        mensaje.innerHTML = 'Ingresa un valor correcto'
    }
    else if (resultado <= 10) {
     mensaje.innerHTML = 'Llevas '+ resultado + ' stickers.'
    }
    else{
        mensaje.innerHTML = 'Llevas demasiados stickers'
    }
    
})