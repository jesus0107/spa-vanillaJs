/**TEMPLATE DE HOME 
 * Estructuracion de template home 
 * 
 * creamos funcion que retorna la vista que necesitamos
 * dentro creamos una constante que contendra un template literal en donde generaremos el template html que utilizaremos 
 * dentro del template va a ir la estructura de los personajes que vamos a presentar en la web
 * 
 * retornaremos view
 * 
 * exportaremos este archivo para identificar si este archivo puede reutilizado en otros archvos js
 * importaremos la funcion que contiene el llamado a la api
 * 
 * creamos una constante que almacenra la funcion que obtiene la data. le pasamos el await para esperar todo este llamado
 * 
 * como esta seccion es nuestro home no pasaremos un id sino que haremos el llamado a todos los personajes
 * 
 * crearemos una logica dentro de nuestro dv padre en el que llaamremos a character que contiene el llamado a la api. como analizamos con anterioridad la api sabemos que tenemos que acceder a results que es donde se encuentran las propiedades que necesitmos mostrar
 * 
 *  
 * despues a results le aplicamos el metodo map para poder iterar sobre todos lo elementos, aqui pasamos por parametro  el personaje que retornaremos que contiene la data a iterar y despues generamos un template que sera el que iteraremos por cada personaje
 * 
 * map nos va a retornar un nuevo arreglo con la estructura que le pasaremos que en este caso sera el template pero con los valores que vamos a iterar
 * 
 * dentro del template accederemos ala s variables de cada persona haciendolo de forma dinamica
 * 
 * metodo join('') une todos los elementos de un array formando una cadena y separandolos con aquel argumentos que definmos o bien que pasamoss por parametro
 * 
 * generaremos un bloque que genera un arreglo que debemos unir para esto agregamos un join y le decimos que no utilice ninguna forma de separarlo
 * con esto retornamos un bloque de html que sea mostrado en nuestra aplicacion 
 * */

import getData from '../utils/getData';


const Home = async () => {

    const character = await getData();

    const view = /*html*/`
        <div class="Characters">
            ${character.results.map((character) =>
                `<article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>`
            ).join('')}
        </div>
    `;
    return view;
}

export default Home;