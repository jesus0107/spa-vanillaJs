import { Header } from '../templates/Header';
import { Home } from '../pages/Home';
import { Character } from '../pages/Character';
import { Error404 } from '../pages/Error404';

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
 */
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

debugger
const router = async () => {
    const header =null || document.getElementById('header')
    const content =null || document.getElementById('content')

    header.innerHTML = await Header();
}

export default router;