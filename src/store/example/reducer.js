import types from "./types";

const defaultState = {
  loading: false,
  result: [],
  options: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.SET: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.UPDATE: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.DELETE: {
      return {
        ...state,
        loading: false,
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
};

export default reducer;
