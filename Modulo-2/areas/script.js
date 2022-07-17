// Realizar un programa que calcule el area de Circulo tomando en cuenta radio 5
// el area Cuadrado con un lado 25
// minimo Deben de tener 3 funciones (circulo, cuadrado , resultado)

const pi = 3.1416;

const AreaCuadrado = () => {
    let area = 25 * 25;
    Mostrar(area);
}

const AreaCirculo = () => {
    let area = pi * Math.pow(5,2);
    Mostrar(area);
}

function Mostrar(area) {
    console.log(area)
}

AreaCuadrado();
AreaCirculo();
