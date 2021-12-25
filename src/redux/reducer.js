import { combineReducers } from "redux";

// Reducers
import exampleReducer from "store/example/reducer";

const combinedReducer = combineReducers({
  example: exampleReducer,
});

export default combinedReducer;
