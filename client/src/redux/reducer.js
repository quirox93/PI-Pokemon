import { GET_POKEMONS, UPDATE_WIDTH, UPDATE_STICK } from "./actions";

const initalState = {
  filterPokemons: [],
  allPokemons: [],
  createdPokemons: [],
  types: [],
  stick: 0,
  width: 0,
};
const rootReducer = (state = initalState, { type, payload }) => {
  const actions = {
    [GET_POKEMONS]: { ...state, allPokemons: payload },
    [UPDATE_WIDTH]: { ...state, width: payload },
    [UPDATE_STICK]: { ...state, stick: payload },
  };

  return actions[type] ?? { ...state };
};

export default rootReducer;
