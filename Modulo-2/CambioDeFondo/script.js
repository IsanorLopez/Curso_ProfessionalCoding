const colores = ['#EBB562', '#70E905', '#05E9C7', '#3547D8', '#E02DE8', '#EF87BB', '#F31828', "#9605C1", '#C65996', '#AEA7AB']

const numeroAleatorio = () =>{
  return Math.floor(Math.random() * 10);
}

const boton  = document.getElementById('boton')
const fondo  = document.getElementById('fondo')

boton.addEventListener('click', (evento) =>{
  
  evento.preventDefault();
  fondo.style.backgroundColor = colores[numeroAleatorio()]

})
