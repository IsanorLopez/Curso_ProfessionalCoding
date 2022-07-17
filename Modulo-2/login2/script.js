const usuario = 'user123';
const password = 123456;

let loginCorrecto = false;

while (loginCorrecto == false) {
    
    let user = prompt('Ingresa el usuario: ');
    let psw = Number(prompt('Ingresa el password: '));

    if (user == usuario && psw == password) {
        loginCorrecto = true;
    }
    else{
        alert('Login incorrecto')
    }
}
