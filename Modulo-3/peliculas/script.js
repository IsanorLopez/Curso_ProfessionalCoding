let peliculas;

const dibujar = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=a02e9d58af30f75ad51124ced2a1c3dd&language=es-ES&page=1&region=MX")
    .then(response => response.json()).then((data) => {
        //console.log(data);
        peliculas = data.results;

        console.log(peliculas);

        document.querySelector("#resultados").innerHTML="";

        for (const pelicula of peliculas) {
         
            let carta = document.createElement("div");

            carta.classList.add("col-2","mb-2")

            let card = `
                <div class="card" style="width: 18rem;">
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
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>                
            `;

            carta.innerHTML = card;
            document.querySelector("#resultados").append(carta);

        }

    });

    
}

dibujar();