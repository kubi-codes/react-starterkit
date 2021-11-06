import logger from "redux-logger";
import thunk from "redux-thunk";

// dev middleware
const DEV_MIDDLEWARE = [logger];

// main middleware
let MAIN_MIDDLEWARE = [thunk];

// export all middleware
if (process.env.NODE_ENV === "development") {
  MAIN_MIDDLEWARE = [...MAIN_MIDDLEWARE, ...DEV_MIDDLEWARE];
}

export default MAIN_MIDDLEWARE;
