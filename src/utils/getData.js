/**crearemos la logica para  obtener los datos que necesitamos del API
 * 
 * crearemos una constante que almacenara a ruta de la api a consumir 
 * 
 * ahora si crearemos la funcion que cnotendra la logica de nuestro llamada
 * esta sera una funcion asyn que recibira por parametro un id 
 * creamos una constante con un condicional ternario en el que establecemos que si recibimos un id cargaremos la url de la api mas el id
 * caso contrario renderizaremos con todos los personajes de la api.
 * es decir cuando estemos en home recibiremos la ruta de la api y al entrar a las especificaiones de un personaje se modificara la url entrando a la condicion y permitiendo mostrar los detalles del id seleccionado
 * 
 * 
 * haremos el llamado al fetch de estos elementos encapsulandolos en un try catch
 * 
 * crearemos una constante response que hara el llamado a fetch . le pasamos await para que espere y le pasamos por parametro apiURL
 * luego convertiremos nuestra respues a un objeto json para que pueda ser iterable por medio del metodo.json(). Creamos esta logica dentro de una constante llamada data
 * finalmente mandamos el error en catch 
 * 
 * exportamos esta logica
 *  
 */

const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Fetch Error', error)
    }
}

export default getData;