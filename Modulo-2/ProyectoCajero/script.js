const cuentas = {
    c1 : { usuario: 'ALEX',   contra: '123', saldo: 357 },
    c2 : { usuario: 'OSIRIS', contra: '123', saldo: 741 },
    c3 : { usuario: 'NORMA',  contra: '123', saldo: 125 }
}

let usuario, contrasena, sld;

let Login         = document.getElementById("Login");
let Cajero        = document.getElementById("Cajero");

let cmbCuenta     = document.getElementById("cbCuentas");
let tbUser        = document.getElementById('tbUser');
let tbPassword    = document.getElementById('tbPassword');

let errorUser     = document.getElementById('errorUser');
let errorPassword = document.getElementById('errorPassword');

let tbSaldo       = document.getElementById('tbSaldo');
let tbMonto       = document.getElementById('tbMonto');

let btnDepositar  = document.getElementById('btnDepositar');
let btnDisponer   = document.getElementById('btnDisponer');

cmbCuenta.addEventListener("change", function() {

    switch (cmbCuenta.value) {
        case 'c1':

            usuario     = cuentas.c1.usuario;
            contrasena  = cuentas.c1.contra;
            sld         = cuentas.c1.saldo;

            break;
        case 'c2':

            usuario     = cuentas.c2.usuario;
            contrasena  = cuentas.c2.contra;
            sld         = cuentas.c2.saldo;

            break;
        case 'c3':

            usuario     = cuentas.c3.usuario;
            contrasena  = cuentas.c3.contra;
            sld         = cuentas.c3.saldo;

            break;
    }

});

const showErrors = (error) => {
    
    if (error === 'user') {
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
    
    if (user !== usuario) {
        showErrors('user');
    
    } else if( password !== contrasena) {
        showErrors('password');
    }
    else {

        Login.classList.remove('show');
        Login.classList.add('hide');

        Cajero.classList.remove('hide');
        Cajero.classList.add('show');

        tbSaldo.value = `${sld}`;
        tbMonto.value = '';
    }
}

frmLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    validarLogin(tbUser.value.toUpperCase(), tbPassword.value.toUpperCase())
});

btnDepositar.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    let nvoMonto = 0;

    if (tbMonto.value != '' && tbMonto.value > 0) {
        
        switch (cmbCuenta.value) {
            case 'c1':
            
                nvoMonto = Number(cuentas.c1.saldo) + Number(tbMonto.value);

                cuentas.c1.saldo = nvoMonto;

                break;
            
            case 'c2':
            
                nvoMonto = Number(cuentas.c2.saldo) + Number(tbMonto.value);

                cuentas.c2.saldo = nvoMonto;

                break;
            
            case 'c3':
            
                nvoMonto = Number(cuentas.c3.saldo) + Number(tbMonto.value);

                cuentas.c3.saldo = nvoMonto;

                break;
        }

        tbSaldo.value = `${nvoMonto}`;
        tbMonto.value = '';

    }

})

btnDisponer.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    let nvoMonto = 0;

    if (tbMonto.value != '' && tbMonto.value > 0) {
        
        if ( Number(tbMonto.value) > Number(tbSaldo.value)) {
            
            errorMonto.classList.remove('hide');
            errorMonto.classList.add('show');

            tbMonto.classList.add('is-invalid');
        
            tbMonto.value = '';

            setTimeout(() => {
                errorMonto.classList.remove('show');
                errorMonto.classList.add('hide');
    
                tbMonto.classList.remove('is-invalid');
            }, 3000);

        }
        else {

            switch (cmbCuenta.value) {
                case 'c1':
                
                    nvoMonto = Number(cuentas.c1.saldo) - Number(tbMonto.value);
    
                    cuentas.c1.saldo = nvoMonto;
    
                    break;
                
                case 'c2':
                
                    nvoMonto = Number(cuentas.c2.saldo) - Number(tbMonto.value);
    
                    cuentas.c2.saldo = nvoMonto;
    
                    break;
                
                case 'c3':
                
                    nvoMonto = Number(cuentas.c3.saldo) - Number(tbMonto.value);
    
                    cuentas.c3.saldo = nvoMonto;
    
                    break;
            }
    
            tbSaldo.value = `${nvoMonto}`;
            tbMonto.value = '';
        }
    }

});
