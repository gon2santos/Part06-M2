import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  const newState = {count: 0}
  switch (action.type) {
    case INCREMENT:
    // completa para este caso
    newState = {count: (state.count + 1)}
    return newState;
    case DECREMENT:
    // Fill para este otro
    newState = {count: (state.count - 1)}
    return newState;
    default:
      return state;
  }
};