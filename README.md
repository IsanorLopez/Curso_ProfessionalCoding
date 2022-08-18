# Curso_ProfessionalCoding

## Data en html

El atributo **data** asignado a un elemento html nos permite mantener una determinada informacion incrustada en un elemento para consultarlo

~~~html

<div data-informacion = "xxxx" data-mensaje = "yyyy" id = "fomulario">
    .
    .
    .
    .
    .
    .
    .
</div>

~~~

~~~JS
console.log(document.querySelector("#formulario").dataset);

//informacion : xxxx, mensaje : yyyy
~~~
