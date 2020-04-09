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
 * */

const Home = () => {
    const view = /*html*/`
        <div class="Characters">
            <article class="Character-item">
                <a href="#/1/">
                    <img src="image" alt="name">
                    <h2>name</h2>
                </a>
            </article>
        </div>
    `;
    return view;
}

export default Home;