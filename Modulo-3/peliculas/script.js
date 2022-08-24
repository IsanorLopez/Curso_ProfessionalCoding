let peliculas;
let carta;

const obtenerDatos = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=a02e9d58af30f75ad51124ced2a1c3dd&language=es-ES&page=1&region=MX")
    .then(response => response.json()).then((data) => {
    
        peliculas = data.results;    
    
        console.log(peliculas);

        dibujar(peliculas);
    });
}

let buscar = (evt) => {
    let name = document.querySelector("#tbSearch").value.toLowerCase();
    
    let filtrados = peliculas.filter((pelicula)=>{
        return pelicula.title.toLowerCase().includes(name);
    });

    dibujar(filtrados);
} 

const dibujar = (peliculas) => {
    document.querySelector("#resultados").innerHTML="";

    for (const pelicula of peliculas) {
         
        let carta = document.createElement("div");

        carta.classList.add("card","mt-2","mb-2","ms-2")
        carta.setAttribute("style","width: 18rem;");

        let card = `
            <div>
                <img src="https://image.tmdb.org/t/p/original/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col clearfix">
                        <span class="float-left">${pelicula.vote_average}</span>
                        <img src="assets/star.png" class="float-right icono" alt="...">
                    </div>
                </div>
                <h5 class="card-title titulo">${pelicula.title}</h5>
                <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary centrado">Detalles</a>
            </div>               
        `;

        carta.innerHTML = card;
        document.querySelector("#resultados").append(carta);

    }   
}

obtenerDatos();

document.querySelector("#tbSearch").addEventListener("keyup", buscar)
