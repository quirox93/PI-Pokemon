import {
  GET_POKEMONS,
  GET_TYPES,
  UPDATE_WIDTH,
  FILTER_BY_TYPE,
  SORT,
  FILTER_BY_ORIGIN,
} from "./actions";
import functions from "./utils";

const initalState = {
  filteredPokemons: [],
  allPokemons: [],
  types: [],
  width: 0,
  sortOn: "id",
  typesOn: [],
  originOn: "all",
};

const rootReducer = (state = initalState, action) => {
  const { type, payload } = action;
  const { filterByOrigin, filterByType, sortFunction } = functions(state, payload);

  const actions = {
    [GET_POKEMONS]: { allPokemons: payload, filteredPokemons: payload },
    [GET_TYPES]: { types: payload },
    [UPDATE_WIDTH]: { width: payload },
    [FILTER_BY_ORIGIN]: filterByOrigin,
    [FILTER_BY_TYPE]: filterByType,
    [SORT]: sortFunction,
  };

  return {
    ...state,
    ...(typeof actions[type] === "function" ? actions[type]() : actions[type]),
  };
};

export default rootReducer;
