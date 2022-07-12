
let nombre = prompt('Ingresa tu nombre: ') 
let edad = Number(prompt('Ingresa tu edad: '))
let pasoExamenVista = prompt('Pasaste el examen de la vista? ').toUpperCase()

if (pasoExamenVista == 'SI') pasoExamenVista = true
else pasoExamenVista = false

if (edad > 18 && pasoExamenVista) {
    alert(`Felicidades ${nombre} obtuviste tu licencia`);
} else {
    alert('no obtuvo su licencia de conducir')
}

