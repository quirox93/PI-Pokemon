import { GET_POKEMONS, ORDER } from "./actions";

const initalState = {
  filterPokemons: [],
  allPokemons: [],
  createdPokemons: [],
  types: [],
};
const rootReducer = (state = initalState, { type, payload }) => {
  const sortFn = (a, b) => (payload === "A" ? a.id - b.id : b.id - a.id);
  const all = state.allPokemons;

  const actions = {
    [GET_POKEMONS]: { ...state, allPokemons: payload },
    [ORDER]: { ...state, myFavorites: [...all].sort(sortFn) },
  };

  return actions[type] ?? { ...state };
};

export default rootReducer;
