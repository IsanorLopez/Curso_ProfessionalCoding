
const usuario  = 'usuario1'
const password = 123

let usuarioCapturado = prompt('Usuario: ').toUpperCase() 
let passwordCapturado = prompt('Password: ')

if (usuario == usuarioCapturado && password === Number(passwordCapturado)) console.log("Bienvenido a tu cuenta")
else console.log("Tus datos son incorrectos")

