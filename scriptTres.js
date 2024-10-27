const botonPassword = document.querySelector('.boton'); 

botonPassword.addEventListener('click', function () {
    let passwordUno = document.querySelector('.valorUno').value;
    let passwordDos = document.querySelector('.valorDos').value;
    let passwordTres = document.querySelector('.valorTres').value;
    let mensajePasword = document.querySelector('.mensaje');
   
    let resultado = `${passwordUno}${passwordDos}${passwordTres}`;

    if (resultado === '911') {
        mensajePasword.innerHTML = 'Password 1 correcto';
    } else if (resultado === '714') {
        mensajePasword.innerHTML = 'Password 2 correcto';
    } else {
        mensajePasword.innerHTML = 'password incorrecto';
    };

});
