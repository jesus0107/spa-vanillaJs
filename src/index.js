/**para que todo nuestro codigo se renderice tneemos que importar el router que es quien contiene las importaciones de todas nuestras paginas y plantillas
 * 
 * por medio del objeto window sabemos si estamos en el contexto de la aplicacion
 * manejaremos un manejador de eventos que escuchara si la carga de lapagina a sucedido,entonces cuando todo este cargado ejecutaremos el codigo
 */

import router from '../src/routes'

//primer parametro evento load, despues le pasaremos nuestra importacion que contiene todo nuestro codigo
window.addEventListener('load', router);