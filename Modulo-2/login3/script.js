// crear un programa que me hag el login, de los usuarios que tengo registrados
// EN caso de que las credenciales fallen ,debe repetirse el programa, (pedir nuevamente intentarlo)
// en el caso de ser correcto el login. debe mostrar un mensaje de bienvenida 
// con el nombre de la persona que se logueo.

const usuarios = [ ['usuario1', 123], ['usuario2', 456], ['usuario3', 789] ];

for (let index = 0; index < usuarios.length; index++) {
    
    let loginCorrecto = false;
    let user = usuarios[index][0];
    let pass = usuarios[index][1];

    while (loginCorrecto == false) {

        let usuario = prompt(`Ingrese el usuario ${index + 1}:`);
        let contra  = Number(prompt('Ingrese la contrasena: '));

        if (usuario == user && contra == pass) {
            loginCorrecto = true;
            alert(`Login Correcto ${usuario}`)
        }

    }
}
