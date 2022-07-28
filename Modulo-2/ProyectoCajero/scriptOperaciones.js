const cuentas = {
    c1 : { saldo: 357 },
    c2 : { saldo: 741 },
    c3 : { saldo: 125 }
}

let sld = 0;

let cuenta = localStorage.getItem("cuenta");

let Cajero = document.getElementById("Cajero");

let tbSaldo       = document.getElementById('tbSaldo');
let tbMonto       = document.getElementById('tbMonto');

let btnDepositar  = document.getElementById('btnDepositar');
let btnDisponer   = document.getElementById('btnDisponer');
let btnLogOut     = document.getElementById("btnLogOut");

let alert         = document.getElementById("alert");

function fAsignarSaldo() {
    switch (cuenta) {
        case 'c1':

            sld         = localStorage.getItem("sc1") ? localStorage.getItem("sc1") : cuentas.c1.saldo;
    
            break;
        case 'c2':
    
            sld         = localStorage.getItem("sc2") ? localStorage.getItem("sc2") : cuentas.c1.saldo;
    
            break;
        case 'c3':
    
            sld         = localStorage.getItem("sc3") ? localStorage.getItem("sc3") : cuentas.c1.saldo;
    
            break;
    }

    tbSaldo.value = `${sld}`;
    tbMonto.value = '';
}

fAsignarSaldo();

function fValidarRetiro() {
    
    let saldoRestante = Number(tbSaldo.value) - (Number(tbMonto.value));
    
    if ( saldoRestante < 10) {
        return false
    } else {
        return true;
    } 
}

const showErrors = (error) => {
    
    if (error === 'depositoMayor') {
        alert.classList.remove('hide');
        alert.innerHTML = '<h4 class="alert-heading">Deposito mayor al permitido</h4> <p>No puede depositar mas de dos mil pesos</p>'
        
        setTimeout(() => {
            alert.classList.add('hide');
        }, 3000);

    } else if (error ==='retiroMayor') {
        alert.classList.remove('hide');
        alert.innerHTML = '<h4 class="alert-heading">Retiro mayor al permitido</h4> <p>Tu cuenta al menos debe de tener 10 pesos</p>'
        
        setTimeout(() => {
            alert.classList.add('hide');
        }, 3000);
    }

}

btnDepositar.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    let nvoMonto = 0;

    if (tbMonto.value != '' && Number(tbMonto.value) > 0) {
        
        if (Number(tbMonto.value) > 2000) {
           
            showErrors('depositoMayor');
            tbMonto.value = '';

        } else {

            switch (cuenta) {
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
    
            fGuardarNuevoSaldo(nvoMonto)

            tbSaldo.value = `${nvoMonto}`;
            tbMonto.value = '';

        }
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
        else if (!fValidarRetiro()) {

            showErrors('retiroMayor');
            tbMonto.value = '';
        }
        else {

            switch (cuenta) {
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
    
            fGuardarNuevoSaldo(nvoMonto)

            tbSaldo.value = `${nvoMonto}`;
            tbMonto.value = '';
        }
    }

});

function fGuardarNuevoSaldo(nuevoSaldo){
    
    let nombre = 's' + cuenta;
    localStorage.setItem(nombre, nuevoSaldo);

}

btnLogOut.addEventListener("click", function() {
    window.location.href = "./login.html"
});
