/**CREACION DE HEADER
 * un template son secciones que no son una pagino pero que son parte de todas las paginas 
 * el header es un elemento que sera visible en todas la paginas
 */

const Header = () => {
    const view = /*html*/
    `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        100tifi.co
                    </a>
                </h1>
            </div>
        </div>

        <div class="Header-nav">
            <a href="#/about">
                About
            </a>        
        </div>
    `
    return view;
}

export default Header;