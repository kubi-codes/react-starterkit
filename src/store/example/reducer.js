import type from "./type";

const defaultState = {
  loading: false,
  result: [],
  options: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case type.GET: {
      return {
        ...state,
        loading: true,
      };
    }
    case type.SET: {
      return {
        ...state,
        loading: false,
      };
    }
    case type.UPDATE: {
      return {
        ...state,
        loading: false,
      };
    }
    case type.DELETE: {
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
