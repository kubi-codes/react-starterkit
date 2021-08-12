import type from "./type";

export const GET_EXAMPLE = (payload) => ({
  type: type.GET,
  payload,
});

export const SET_EXAMPLE = (payload) => ({
  type: type.SET,
  payload,
});

export const UPDATE_EXAMPLE = (payload) => ({
  type: type.UPDATE,
  payload,
});

export const DELETE_EXAMPLE = (payload) => ({
  type: type.DELETE,
  payload,
});
