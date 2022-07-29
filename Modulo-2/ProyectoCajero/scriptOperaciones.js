let sld = 0;

let cuenta = localStorage.getItem("cuenta");

let Cajero = document.getElementById("Cajero");

let tbSaldo        = document.getElementById('tbSaldo');
let tbMonto        = document.getElementById('tbMonto');

let btnDepositar   = document.getElementById('btnDepositar');
let btnDisponer    = document.getElementById('btnDisponer');
let btnLogOut      = document.getElementById("btnLogOut");

let alert          = document.getElementById("alert");

let errorMonto     = document.getElementById("errorMonto");
let errorNegativos = document.getElementById("errorNegativos");

function fAsignarSaldo() {
    switch (cuenta) {
        case 'c1':

            sld         = localStorage.getItem("sc1") ? Number(localStorage.getItem("sc1")) : 0
    
            break;
        case 'c2':
    
            sld         = localStorage.getItem("sc2") ? Number(localStorage.getItem("sc2")) : 0
    
            break;
        case 'c3':
    
            sld         = localStorage.getItem("sc3") ? Number(localStorage.getItem("sc3")) : 0
    
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

function fGuardarNuevoSaldo(nuevoSaldo){
    
    let nombre = 's' + cuenta;
    localStorage.setItem(nombre, nuevoSaldo);

}

function fMostrarErrorNegativo() {
    tbMonto.value = '';

    Number(tbMonto.value)
    errorNegativos.classList.remove('hide');
    errorNegativos.classList.add('show');

    setTimeout(() => {
        errorNegativos.classList.remove('show');
        errorNegativos.classList.add('hide');

        tbMonto.classList.remove('is-invalid');
    }, 3000);
}

function fDisponer() {
    let nvoMonto = 0;
    let saldoActual = 0;

    if (tbMonto.value != '' && Number(tbMonto.value) > 0) {
        
        if (Number(tbMonto.value) > 2000) {
           
            showErrors('depositoMayor');
            tbMonto.value = '';

        } else {

            switch (cuenta) {
                case 'c1':
                
                    saldoActual = localStorage.getItem("sc1") ? Number(localStorage.getItem("sc1")) : 0;

                    nvoMonto = saldoActual + Number(tbMonto.value);
                    
                    break;
                
                case 'c2':
                
                    saldoActual = localStorage.getItem("sc2") ? Number(localStorage.getItem("sc2")) : 0;

                    nvoMonto = saldoActual + Number(tbMonto.value);
    
                    break;
                
                case 'c3':
                
                    saldoActual = localStorage.getItem("sc3") ? Number(localStorage.getItem("sc3")) : 0;

                    nvoMonto = saldoActual + Number(tbMonto.value);
    
                    break;
            }
    
            fGuardarNuevoSaldo(nvoMonto)

            tbSaldo.value = `${nvoMonto}`;
            tbMonto.value = '';

        }
    }
    else if (Number(tbMonto.value) < 0) {
        fMostrarErrorNegativo();
    }
}

function fDepositar() {
    let nvoMonto = 0;
    let saldoActual = 0;

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
                
                    saldoActual = localStorage.getItem("sc1") ? Number(localStorage.getItem("sc1")) : 0;
                    
                    nvoMonto = saldoActual - Number(tbMonto.value);

                    break;
                
                case 'c2':
                
                    saldoActual = localStorage.getItem("sc2") ? Number(localStorage.getItem("sc2")) : 0;
    
                    nvoMonto = saldoActual - Number(tbMonto.value);
    
                    break;
                
                case 'c3':
                
                    saldoActual = localStorage.getItem("sc3") ? Number(localStorage.getItem("sc3")) : 0;
                    
    
                    nvoMonto = saldoActual - Number(tbMonto.value);
    
                    break;
            }
    
            fGuardarNuevoSaldo(nvoMonto)

            tbSaldo.value = `${nvoMonto}`;
            tbMonto.value = '';
        }
    } else if (Number(tbMonto.value) < 0) {
        fMostrarErrorNegativo();
    }
}

btnDepositar.addEventListener('click', (evento) => {
    evento.preventDefault();

    fDisponer();

})

btnDisponer.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    fDepositar();

});

btnLogOut.addEventListener("click", function() {
    window.location.href = "./login.html"
});
