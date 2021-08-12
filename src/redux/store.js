import { createStore, applyMiddleware } from "redux"; // Redux
import { persistStore, persistReducer } from "redux-persist"; // Redux Persist
import rootReducer from "./reducer";
import middleware from "./middleware";
import persistConfig from "./persist";

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
