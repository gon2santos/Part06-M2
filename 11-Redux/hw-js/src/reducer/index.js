const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTO:
      return { contador: state.contador + 1 }
      break;

    case DECREMENTO:
      return { contador: state.contador - 1 }
      break;

    case INCREMENTO_IMPAR:
      if((state.contador % 2) === 0)
      return { contador: state.contador + 1 }
      else
      return { contador: state.contador + 2 }

      break;

    default:
      return state;
      break;
  }
}

module.exports = contador;