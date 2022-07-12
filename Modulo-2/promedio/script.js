// Crear archivo HTML y conectarlo con nuestro archivo JS
// Crear 5 prompts que cada uno reciba una calificacion +  un total de 5 calificaciones
// convertir los prompts a tipo number 
// Crear una funcion que reciba por parametro las 5 calificaciones y 
// Calcule el promedio de esas notas.
// Cuando tengamos el promedio vamos a validar lo siguiente:
// Si el promedio es igual a 10 vamos a retonar un mensaje para felicitar al alumno
// si el promedio es mayor que 8 vamos a retornar un mensaje que diga "Casi, casi"
// Si el promedio es mayor que 6 pero menor que 8, retornamos mensaje que diga "Hay que ponerle mas ganas"
// Si el resultado es menor que 6 retornamos mensaje que diga "No pasaste el grado"

let c1 = Number(prompt('C1: ')) 
let c2 = Number(prompt('C2: ')) 
let c3 = Number(prompt('C3: ')) 
let c4 = Number(prompt('C4: ')) 
let c5 = Number(prompt('C5: ')) 

const promedio = (c1,c2,c3,c4,c5) => (c1 + c2 + c3 + c4 + c5) / 5;

let p = promedio(c1,c2,c3,c4,c5);

console.log(p)

if (p == 10) {
    alert('Felicidades!!!');
}else if (p > 8) {
    alert('Casi,casi');
}else if (p > 6 && p < 8) {
    alert('Hay que ponerle mas ganas');
}else if (p < 6) {
    alert('No pasaste el grado');
}
