# Proyecto final

[link](https://breakingsaul.netlify.app)

Para el proyecto me decidi a concentrar mas mis esfuerzos en aprender la funcionalidad de la libreria que del diseño o la complejidad del sitio

## Basico

Cree una pagina informaiva acerca de los personajes de breaking bad

Genere el distribuible y la desplege en netlify

El login tiene una funcionalidad donde maneja un poco el logout para no regresar una vez que se salio de la pagina, aun que mas haya de eso no hace mucho es un if

Tengo basicamente dos grandes consultas donde se muestran los personajes de los dos universos, breaking bad y better call saul

Ya trabajando con el API me di cuenta de que no maneja muy buen unos cuantos resultados como las images faltantes y ademas la informacion no es congruente con el hasta ahora argumento de la serie.  

Tengo una pestana de busqueda para traer filtrado por nombre los personajes

Puedo ver mas detalles de los mismos en otro componente

Tengo una funcionalidad de mantener la busqueda al regresar

## Tecnico

Trate de mantener un orden con respecto a la estructura de directorios

Dos principales carpetas para mantener a las dos entidades que en este caso son las series y el auth/login

Implemente dos manejos de rutas, una general y otra a detalle dentro de las series

Con respecto al login, implemente algunas propiedades bajo el hook useState para manejar mis inputs y un mensaje de error para las credenciales

Con respecto a las series en pages tengo las 4 pantallas de la pagina

En cada uno de los directorios donde lo consiede implemente barrelFiles para facilitar las importaciones/exportaciones

como rutas internas de las series defini cada una de las que iba a necesitar con el reactRouterDom y los componentes que nos da

Aqui de manera global para que todas las pantallas ya logueado tuviesen acceso a la navbar la defini en este punto

En el navbar implemente el uso del navlink para seguirle el rastro a la opcion seleccionada y haciendo uso del replace limpio el arbol de componentes para una vez fuera no regresar a la pantalla anterior

Los componentes que me son reutilizables los defini en components para centralizarlos

En los modulos donde recibo props implemente los proptypes para asegurar el estandar a la hora de desarrollo

### Hooks

Con respecto a los hooks que maneje para las pantallas principales, me encarge de hacerlos personalizados donde me expongan dos propiedades, si esta cargando y el resultado que espero obtener el API

Siguiendo el estandar de los hooks lo nombre useFetchPersonajes

Dentro de este hook personalizado tengo el uso de dos hooks por default de React, useState para el manejo de las propiedades y haciendo uso de la ejecucion a la hora de cargar el modulo del useEffect para utilizar mi servicio y consumir el endpoint del API 

Los servicios que al menos en este caso fue solo uno lo tengo en services

Este servicio no tiene mucho mas haya de un consumo con axios de los 3 endpoints que requeri

condicionalmente dentro del comonente muestro el mensaje de cargando y una vez resuelto con el arreglo que obtuve lo mapeo para generar una a una las tarjetas generales

Al tener este componente centralizado puede hacer uso de el desde las dos pantallas de consulta general y me ahorro el codigo

Para la funcionlidad de consulta detallada por personaje implemente lo mismo solo que bajo su propio hook personalizado

