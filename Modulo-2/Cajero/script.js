const cuentas = {
    c1 : { usuario: 'ALEX',   contra: '123', saldo: 357 },
    c2 : { usuario: 'OSIRIS', contra: '123', saldo: 741 },
    c3 : { usuario: 'NORMA',  contra: '123', saldo: 125 }
}

let user, pass, sld;

let errorUser = document.getElementById('errorUser');
let errorPassword = document.getElementById('errorPassword');
let errorBtn = document.getElementById('errorBtn');
let usuario = document.getElementById('user');
let contrasena = document.getElementById('password');
let frmCajero = document.getElementById("frmCajero");
let frmLogin = document.getElementById("frmLogin");
let contenedor = document.getElementById("contenedor");
let saldo = document.getElementById("saldo");

const showErrors = (error) => {
    
    if (error === 'user') {
        errorUser.classList.remove('hide');
        errorUser.classList.add('error');
        
        setTimeout(() => {
            errorUser.classList.remove('error');
            errorUser.classList.add('hide');
        }, 3000);

    } else if (error === 'password') {
        errorPassword.classList.remove('hide');
        errorPassword.classList.add('error');
        
        setTimeout(() => {
            errorPassword.classList.remove('error');
            errorPassword.classList.add('hide');
        }, 3000);

    } else if ( error === 'datos') {
        errorBtn.classList.remove('hide');
        errorBtn.classList.add('errorBtn');
        
        setTimeout(() => {
            errorBtn.classList.remove('errorBtn');
            errorBtn.classList.add('hide');
        }, 3000);
    }

}

const validarLogin = (usuario, contrasena) => {
    
    if (usuario === '' || contrasena === '') {
        showErrors('datos');
    }
    else if (usuario !== user) {
        showErrors('user');
    } else if( contrasena !== pass) {
        showErrors('password');
    }
    else {
        frmCajero.classList.remove('hide');
        frmCajero.classList.add('mostrar');

        frmLogin.classList.remove('mostrar');
        frmLogin.classList.add('hide');

        saldo.innerHTML = `Saldo: ${sld}`;
    }
}

var cmbCuenta = document.getElementById("cmbCuenta");
cmbCuenta.addEventListener("change", function() {

    switch (cmbCuenta.value) {
        case 'c1':
        
            user = cuentas.c1.usuario;
            pass = cuentas.c1.contra;
            sld  = cuentas.c1.saldo;

            break;
        case 'c2':
        
            user = cuentas.c2.usuario;
            pass = cuentas.c2.contra;
            sld  = cuentas.c2.saldo;

            break;
        case 'c3':
        
            user = cuentas.c3.usuario;
            pass = cuentas.c3.contra;
            sld  = cuentas.c3.saldo;

            break;
    }

});


frmLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    validarLogin(usuario.value.toUpperCase(), contrasena.value.toUpperCase())
});
