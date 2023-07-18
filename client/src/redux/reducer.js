import { GET_POKEMONS, GET_TYPES, UPDATE_WIDTH, FILTER_BY_TYPE, SORT } from "./actions";
import functions from "./utils";

const initalState = {
  filteredPokemons: [],
  allPokemons: [],
  createdPokemons: [],
  types: [],
  width: 0,
  sortMode: (a, b) => a.id - b.id,
  typesOn: [],
};

const rootReducer = (state = initalState, action) => {
  const { type, payload } = action;
  const { filterByType, sortFunction } = functions(state, payload);

  const actions = {
    [GET_POKEMONS]: { allPokemons: payload, filteredPokemons: payload },
    [GET_TYPES]: { types: payload },
    [UPDATE_WIDTH]: { width: payload },
    [FILTER_BY_TYPE]: filterByType,
    [SORT]: sortFunction,
  };

  return {
    ...state,
    ...(typeof actions[type] === "function" ? actions[type]() : actions[type]),
  };
};

export default rootReducer;
