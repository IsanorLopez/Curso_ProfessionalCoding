
let tbNumero = document.querySelector("#numero");
let btnVerificar = document.querySelector("#btnVerificar");
let btnReiniciar = document.querySelector("#btnReiniciar");
let resultados = document.querySelector("#resultados");
let alerta = document.getElementById("alert");

function verificar(){

    numero = parseInt(tbNumero.value);
    
    if (numero >= 2) {
        
        for(let i = 2; i <= numero; i++){

            if(i < numero){
                
                if (numero % i == 0) {
                    resultados.innerHTML += '<div class="alert alert-danger">'+numero+' El numero no es primo</div>';
                    break;
                }
                
            }else{
                resultados.innerHTML += '<div class="alert alert-success">'+numero+' El numero es primo</div>';
            }
        
        }

    }
    else {
        alerta.classList.remove('hide');
        alerta.innerHTML = '<h4 class="alert-heading">Error de captura</h4> <p> para validar correctamente se requiere un numero mayor a 1</p>'

        setTimeout(() => {
            alerta.classList.add('hide');
        }, 3000);
    }
}

function reiniciar(){
    resultados.innerHTML = "";
    tbNumero.value = "";
    return true;
}

btnVerificar.addEventListener("click",verificar)
btnReiniciar.addEventListener("click",reiniciar);