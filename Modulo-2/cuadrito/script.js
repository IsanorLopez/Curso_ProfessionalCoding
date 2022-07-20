const divPadre = document.getElementById('render');
const form = document.getElementById('form');

form.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    let divHijo = document.createElement('div')
    divHijo.classList.add('center')

    divPadre.appendChild(divHijo)

})
