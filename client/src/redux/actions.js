export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const UPDATE_WIDTH = "UPDATE_WIDTH";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const SORT = "SORT";

import axios from "axios";
const URL = import.meta.env.VITE_BACKEND_URL;

export const getAllPokemons = () => {
  const endpoint = URL + "/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTypes = () => {
  const endpoint = URL + "/types";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_TYPES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateWidth = (payload) => {
  return { type: UPDATE_WIDTH, payload };
};

export const sortPokemons = (payload) => {
  return { type: SORT, payload };
};

export const filterByType = (payload) => {
  return { type: FILTER_BY_TYPE, payload };
};
export const filterByOrigin = (payload) => {
  return { type: FILTER_BY_ORIGIN, payload };
};

export default {
  getAllPokemons,
  updateWidth,
  sortPokemons,
  filterByType,
};
