const titulo = document.getElementById('titulo');

console.log(titulo)

titulo.innerHTML = 'Hola desde JS'

const formulario = document.getElementById('formulario');

console.log(formulario);

const showErrors = (error) => {
    let errorUser = document.getElementById('errorUser');
    let errorPassword = document.getElementById('errorPassword');
    let errorBtn = document.getElementById('errorBtn');

    if (error === 'user') {
        errorUser.classList.remove('hide');
        errorUser.classList.add('error');
        
        setTimeout(() => {
            errorUser.classList.remove('error');
            errorUser.classList.add('hide');
        }, 3000);

    } else if (error === 'password') {
        errorPassword.classList.remove('hide');
        errorPassword.classList.add('error');
        
        setTimeout(() => {
            errorPassword.classList.remove('error');
            errorPassword.classList.add('hide');
        }, 3000);

    } else if ( error === 'datos') {
        errorBtn.classList.remove('hide');
        errorBtn.classList.add('errorBtn');
        
        setTimeout(() => {
            errorBtn.classList.remove('errorBtn');
            errorBtn.classList.add('hide');
        }, 3000);
    }

}

const validar = (user, password) => {
    let usuario = 'User';
    let psw = '1230';
    
    if (user === '' || password === '') {
        showErrors('datos');
    }
    else if (user !== usuario) {
        showErrors('user');
    } else if( password !== psw) {
        showErrors('password');
    }
    else {
        showErrors();
        console.log('bienvenido')
    }
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    
    validar(user, password)
});
