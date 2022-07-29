const cuentas = {
    c1 : { usuario: 'ALEX',   contra: '123' },
    c2 : { usuario: 'OSIRIS', contra: '123' },
    c3 : { usuario: 'NORMA',  contra: '123' }
}

let usuario, contrasena;

let Login         = document.getElementById("Login");

let cmbCuenta     = document.getElementById("cbCuentas");
let tbUser        = document.getElementById('tbUser');
let tbPassword    = document.getElementById('tbPassword');

let errorCuenta   = document.getElementById('errorCuenta');
let errorUser     = document.getElementById('errorUser');
let errorPassword = document.getElementById('errorPassword');

let alert         = document.getElementById("alert");

function fLimpiarLogin () {
    cmbCuenta.value  = "";
    tbUser.value     = "";
    tbPassword.value = "";
}

fLimpiarLogin()

cmbCuenta.addEventListener("change", function() {

    switch (cmbCuenta.value) {
        case 'c1':

            usuario     = cuentas.c1.usuario;
            contrasena  = cuentas.c1.contra;

            break;
        case 'c2':

            usuario     = cuentas.c2.usuario;
            contrasena  = cuentas.c2.contra;

            break;
        case 'c3':

            usuario     = cuentas.c3.usuario;
            contrasena  = cuentas.c3.contra;

            break;
    }

    tbUser.value = '';
    tbPassword.value = '';

});

const showErrors = (error) => {
    
    if (error === 'datos') {
        alert.classList.remove('hide');
        alert.innerHTML = '<h4 class="alert-heading">Faltan datos</h4> <p>Tanto usuario como contrase&ntilde;a son obligatorios</p>'
        
        setTimeout(() => {
            alert.classList.add('hide');
        }, 3000);
    
    } else if (error === 'cuenta') {
        errorCuenta.classList.remove('hide');
        errorCuenta.classList.add('show');
        
        cmbCuenta.classList.add('is-invalid');

        setTimeout(() => {
            errorCuenta.classList.remove('show');
            errorCuenta.classList.add('hide');

            cmbCuenta.classList.remove('is-invalid');
        }, 3000);

    }
    else if (error === 'user') {
        errorUser.classList.remove('hide');
        errorUser.classList.add('show');
        
        tbUser.classList.add('is-invalid');

        setTimeout(() => {
            errorUser.classList.remove('show');
            errorUser.classList.add('hide');

            tbUser.classList.remove('is-invalid');
        }, 3000);

    } else if (error === 'password') {
        errorPassword.classList.remove('hide');
        errorPassword.classList.add('show');
        
        tbPassword.classList.add('is-invalid');

        setTimeout(() => {
            errorPassword.classList.remove('show');
            errorPassword.classList.add('hide');

            tbPassword.classList.remove('is-invalid');
        }, 3000);

    }

}

const validarLogin = (user , password) => {
    
    if (cmbCuenta.value === '') {
        showErrors('cuenta')
    }else if (user.trim() == '' || password == '') {
        showErrors('datos')
    } else if (user.trim() !== usuario) {
        showErrors('user');
    
    } else if( password !== contrasena) {
        showErrors('password');
    } else {

        localStorage.setItem("cuenta", cmbCuenta.value);
        window.location.href = "./operaciones.html"
    }
}

frmLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    validarLogin(tbUser.value.toUpperCase(), tbPassword.value.toUpperCase())
});

