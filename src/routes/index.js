import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

/**
 * vamos a empezar a trabajar lo que necesita nuestra aplicacion para manejar las rutas
 *  - importaremos los templates y las paginas que creamos para manejaralas y hacer el render de cada una de ellas 
 * 
 * vamos a crear las rutas que manejaremos creando un objeto dentro de una constante
 * la primer ruta sera el slash que indicara que estamos en el home
 * el id sera un valor dinamico depende del valor que contiene el personaje
 * despues de definir la ruta enseguida escribimos el template o page que queremos renderizar
 * 
 * despues crearemos el manejador en este caso el router
 * el cual se encargara de mostrar los elementos segun la logica a establecer
 * aqui tambien obtendremos valores del navegador 
 * 
 * la constante router la manejaremos por medio de funcion async await
 * 
 * estableceremos los templates que tenemos para mostrarlos en algun elemento del dom
 * para esto almacenaremos en constantes los elementos sobre los que se hara el render de los templates.
 * 
 * despues por medio del metodo innerHTML le añadiremos al elemento header que seleccionamos la plantilla Header que importamos
 * 
 * 
 * implementaremos las utilidades
 * 
 * almacenaremos en variables las utilidades en este caso la uncionde getHash y la de resolveroutes en la que haremos usu del await por que pasaremos por parametro el getHash y no sabemos cuanto se puede demorar en devolver la ruta
 * 
 * cremos una variable llamada render que contendra el valor de las ruta y en la que haremos una vaidacion y compararemos las rutas contenidas en routes con las rutas almacenadas en route 
 * si es igual decimos que se muestre este contenido almacenado en routes[route]
 * y si no que nos devuelva el template del error 404
 * 
 * finalmente esto lo tenemos que renderizar en el html en la seccion con el id de content
 * para esto hacemos innehtml a content y le pasamos render 
 */
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header =null || document.getElementById('header')
    const content =null || document.getElementById('content')

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router;