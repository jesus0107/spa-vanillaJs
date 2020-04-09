/**Necesitamos crear un elemento que se encargue de que template es el que se va a renderizar 
 * 
 * creamos la funcion en la que pasasremos route por parametro que es la funcion creada anteriormente
 * 
 * crearemos un if para validar la ruta: sabemos que la ruta nos devuelve un numero de items no mayor a 1000, entonces hacemos esta validacion en donde si el valor que nos devuelve la ruta conttiene menos de 3 numero pasara algo
 *      creamos una variable en donde decimos que si la ruta es igual a el hash nos devolvera la ruta ya sea home o abaout o ruta dentro del hash
 *      en caso de que no esto quiere decir que estamos recibiendo un id y tenemos que renderizar el template del personaje al que corresponde el id
 * 
 * retornamos validRoute
 *      si nom cumplimos con esta validacion y entramos a la seccion de about about es mayor a 3
 *      y no es parte de la logica principal entonces debemos retornar este elemento segun la
 *      seccion para despues comprarlo en la seccion de rutas    
 * 
 * finalmente exportamos esta funcion
*/

const resolveRoutes = (route) => {
    if(route.length <= 3) {
        let validRoute = route === '/'
        ? route
        : '/:id'

        return validRoute;
    }

    return `/${route}`;
}


export default resolveRoutes;