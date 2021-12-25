import types from "./types";

export const GET_EXAMPLE = (payload) => ({
  type: types.GET,
  payload,
});

export const SET_EXAMPLE = (payload) => ({
  type: types.SET,
  payload,
});

export const UPDATE_EXAMPLE = (payload) => ({
  type: types.UPDATE,
  payload,
});

export const DELETE_EXAMPLE = (payload) => ({
  type: types.DELETE,
  payload,
});
