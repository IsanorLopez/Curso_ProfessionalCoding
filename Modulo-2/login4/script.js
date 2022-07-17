// crear un programa   que me hag el login, de los usuarioa que tengo registrados
// EN caso de que las credenciales fallen ,debe repetirse el programa, (pedir nuevamente intentarlo)
// en el caso de ser correcto el login. debe mostrar un mensaje de bienvenida 
// con el nombre de la persona que se logueo. 

// Una vez logueado Mostrar en pantalla los datos 
// de la perosna que se logueo.
// y enlistar las peliculas favoritas  (lo mas legible posible, usando document.write)

//Datos a considerar

// usa funciones 
// ciclos for o while o du while , if if else ... etc
// no usar otra cosa que no hayamos visto en clase
//  Despues de 3 intento Mostrar error de bloqueo)

let usuario1 = ["JOEL",    "LOZANO",    "123",  5527498383, ["Volver al futuro", "Superman","21 black Jack", "spiderman 2"]];
let usuario2 = ["MIGUEL",  "MONTERROSO","123",  554878213,  ["Avenger 2", "Superman","Inseption", "Corazon valiente"]];
let usuario3 = ["PEDRO",   "FERNANDEZ", "123",  24587565,   ["El pianista", "Mas alla de los sueños","La hera de hielo", "spiderman"]];
let usuario4 = ["ELBA",    "LAZO",      "123",  5445642,    ["Nemo", "Superman","Rey leon", "spiderman"]]
let usuario5 = ["AQUILES", "CACHO",     "123",  5445642,    ["Terminator", "UP","Avengers 5", "La brujula dorada"]]
let usuario6 = ["AQUILES2","PICO",      "123",  5445642,    ["El vengador", "Como niños","avengers", "Harry potter"]]
let usuario7 = ["LALO",    "ONGANIZA",  "123",  5445642,    ["Batman", "Superman","Maquina del tiempo", "spiderman"]]
let usuario8 = ["ZOYLA",   "VACA",      "123",  65695992,   ["HITLER", "Superman","Rapido y Fogoso", "American"]]
let usuario9 = ["MONICA",  "GALINDO",   "123",  6527946556, ["Destino final", "hombre de negro","Lluvia de hamburgesas", "Chicas pesadas"]]

let usuarios = [usuario1,usuario2,usuario3,usuario4,usuario5,usuario6,usuario7,usuario8,usuario9];

function impimirInfoUsuario (nombre, apellido, numero, peliculas ) {

    document.write(`<h1>Login correcto</h1>`)

    document.write(`usuario: ${nombre} <br>`)
    document.write(`apellido: ${apellido} <br>`)
    document.write(`numero de telefono: ${numero} <br>`)

    document.write(`<h2>Peliculas</h2>`)
    document.write(`<ol>`)
    for (let index = 0; index < peliculas.length; index++) {

        document.write(`<li> - ${peliculas[index]}</li>`)
        
    }
    document.write(`</ol>`)
}

for (let index = 0; index < usuarios.length; index++) {
    
    let contador = 0;
    let loginCorrecto = false;
    let user = usuarios[index][0];
    let pass = usuarios[index][2];

    while (loginCorrecto == false && contador < 3) {

        let usuario = prompt(`Ingrese el usuario ${index + 1}:`).toUpperCase();
        let contra  = prompt('Ingrese la contrasena: ');

        if (usuario == user && contra == pass) {
            loginCorrecto = true;
            //alert(`Login Correcto ${usuario}`)
        } else {
            contador++;
        }

    }

    if(loginCorrecto)
    {
        impimirInfoUsuario(usuarios[index][0],usuarios[index][1],usuarios[index][3],usuarios[index][4])
    }
    else
    {
        alert("Bloqueo!!!")
        break;
    }

}


