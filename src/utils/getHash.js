/**Crearemos una funcion que se encargara de obtener el hash
 * manipularemos la url por medio de esta funcion
 * 
 * el objeto location de js contiene la informacion actual de la url del navegador
 * 
 * location.has: obtiene el ancla de de la url (#) 
 * 
 * slice(1) : corta la url y muestra a partr del primer elemento. en este caso el resultado es 1
 * 
 * toLocaleLowerCase: convierte a minusculas la cadena de texto
 * 
 * split('/') : divide un objeto de tipo string en un array. recibe como primer parametro un separador que especifica el caracter que se usa para la separacion de la cadena
 * 
 * ['/','id',''] ==> [1] extraemos el elemento 1 del split anterior en este caso el id que es lo que necesitamos 
 * 
 * finalmente la exportamos 
 */

const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;