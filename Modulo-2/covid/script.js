let sintomas = {
    dolorDeCabeza: false,
    dificultadRespirar: false,
    dolorDeCuerpo: false,
    todasLasVacunas: false,
    Temperatura: 0
}

function convertirBool(sRespuesta) {
    if (sRespuesta == 'SI') {
        return true;
    } else {
        return false;
    }
}

sintomas.dolorDeCabeza = convertirBool(prompt('tienes dolor de cabeza? si/no').toUpperCase()) 
sintomas.dificultadRespirar = convertirBool(prompt('tienes dificultad para respirar? si/no').toUpperCase())
sintomas.dolorDeCuerpo = convertirBool(prompt('tienes dolor de cuerpo? si/no').toUpperCase())
sintomas.todasLasVacunas = convertirBool(prompt('tienes todas las vacunas aplicadas? si/no').toUpperCase())
sintomas.Temperatura = Number(prompt('Cual es tu temperatura'))

if (sintomas.dolorDeCabeza && sintomas.dificultadRespirar && sintomas.Temperatura >= 37 && !sintomas.todasLasVacunas){
    alert(`Tienes 70% de probabilidades de tener COVID`);
} else if (sintomas.dolorDeCabeza && sintomas.dificultadRespirar && sintomas.Temperatura >= 37 && sintomas.todasLasVacunas) {
    alert(`Tienes 40% de probabilidades de tener COVID`);
} else if (sintomas.dolorDeCabeza && sintomas.dificultadRespirar && sintomas.Temperatura >= 37 && sintomas.dolorDeCuerpo) {
    alert(`Tienes 100% de probabilidades de tener COVID`);
}

