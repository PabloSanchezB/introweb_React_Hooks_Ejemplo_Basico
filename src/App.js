import "./styles.css";
/*Como defino una variable de estado? */
import React, { useState, useEffect, useContext } from "react";
/*Asi importo los diversos Hooks
Dentro de React, los Hooks se exportan asi:
export const useState = ()....;
export const useEffect = ()...;
O sea, multiples export, por eso los hooks se importan dentro de
llaves, asi solo vayamos a importar uno... */

export default function App() {
  /*Y aqui empezamos a llamar al hook. Notese que ya estamos
  DENTRO DE UN COMPONENTE */
  /*const [nombreVariableEstado, modificaNombreVariableEstado] = useState(
    estadoInicial
  );
  Arriba tenemos el prototipo de como se define un hook.
  Se hace con un vector constante. modificaNombreVariableEstado
  es una función encargada de modificar nombreVariableEstado. useState es el hook que estamos
  usando y estadoInicial es la variable que define el estado inicial del componente (lo que
    se muestra cuando este se renderiza por primera vez). Si useState no recibe ningun
    parametro (parentesis vacio), 
    significa que el componente no tiene ningun estado inicial (raro pero posible)*/
  const nameInicial = "Mateo";
  const [nombreGato, cambiarNombreGato] = useState(nameInicial);
  /*Como podemos ver aqui arriba, el nombre (estado) inicial de nombreGato será Mateo.
  OJO!!! La unica forma de cambiar el valor de nombreGato es con la función 
  cambiarNombreGato. Yo no puedo asignarle un valor directamente a nombreGato.
  "nombreGato = valor" NO SE PUEDE.*/

  const accionEscribir = (e) => {
    //Esta función hace lo mismo que lo que esta en la linea 46
    //"e" es el evento (podemos ponerle cualquier nombre)
    let valor = e.target.value; //e.target hace referencia al input
    cambiarNombreGato(valor);
  };

  return (
    <div className="App">
      {/*Ahora si, lo que se va a mostrar en el componente */}
      <h1>{nombreGato}</h1>
      {/*Este h1 mostrará lo que tenga la variable nombreGato en el momento*/}
      <span>Modificar nombre del gato: </span>
      <input
        value={nombreGato}
        /*onChange={(evento) => cambiarNombreGato(evento.target.value)}
        Arriba vemos una forma de hacerlo directamente
        Por que este comentario JS no necesita ir entre llaves?????*/
        onChange={accionEscribir}
        /*O podemos hacer la función afuera y luego pasarsela */
      />
      {/*Cada vez que el input (campo de texto) sufra un cambio (onChange), se llamará a 
      un evento. El evento en cuestión es el cambio en el input. El evento invoca la 
      función cambiarNombreGato, la cual recibe el nuevo valor que tendrá nombreGato.
      Este valor se enecuentra en evento.target.value, que es lo que acabamos de escribir
      en el input. Notese que como no hemos definido un botón o algo parecido, el
      evento se llamará apenas digitemos aunque sea una sola letra. Sin embargo,
      notese lo que ocurre al asignarle {nombreGato} a value: nombreGato (¿O el value,
      mas bien?) empezará a funcionar como un acumulador/concatenador de strings y dará la
      ulisión de que "guarda" las letras. Notese también lo que ocurre al darle a value
      un valor fijo (como "Carlos"). nombreGato siempre tendrá almacenado este valor fijo
      mas UNA SOLA letra extra, que será la ULTIMA escrita en el input. No entiendo
      del todo que es lo que esta pasando ahi, pero en fin...*/}
    </div>
  );
}
