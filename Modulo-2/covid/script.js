let sintomas = {
    dolorDeCabeza: false,
    dificultadRespirar: false,
    dolorDeCuerpo: false,
    todasLasVacunas: false,
    Temperatura: 0
}

let probabilidad;

const form = document.getElementById('frmCaptura');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    sintomas.dolorDeCabeza      = document.getElementById('rbtnDolorCabeza').checked;
    sintomas.dificultadRespirar = document.getElementById('rbtnDificultadRespirar').checked;
    sintomas.dolorDeCuerpo      = document.getElementById('rbtnDolorCuerpo').checked;
    sintomas.todasLasVacunas    = document.getElementById('rbtnVacunasAplicadas').checked;
    sintomas.Temperatura        = Number(document.getElementById('tbTemperatura').value);

    if (sintomas.dolorDeCabeza && sintomas.dificultadRespirar && sintomas.Temperatura < 37 && sintomas.todasLasVacunas) {
        probabilidad = 30;
    } else if (sintomas.dolorDeCabeza && sintomas.dificultadRespirar && sintomas.Temperatura > 37 && sintomas.todasLasVacunas) {
        probabilidad = 40;
    }else if (sintomas.dolorDeCabeza && sintomas.dificultadRespirar && sintomas.dolorDeCuerpo && sintomas.Temperatura < 37 && sintomas.todasLasVacunas) {
        probabilidad = 35;
    } else if (sintomas.dolorDeCabeza && sintomas.dificultadRespirar && sintomas.dolorDeCuerpo && sintomas.Temperatura > 37 && sintomas.todasLasVacunas) {
        probabilidad = 60;
    } else if (sintomas.dolorDeCabeza && sintomas.dificultadRespirar && sintomas.dolorDeCuerpo && sintomas.Temperatura > 37 && !sintomas.todasLasVacunas) {
        probabilidad = 100;
    }
    
    resultado.innerHTML = `Tienes ${probabilidad}% de probabilidades de tener COVID`;

})
