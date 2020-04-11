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
 * importaremos la funcion que contiene el llamado a la api*/

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