import logger from "redux-logger";

// dev middleware
const DEV_MIDDLEWARE = [logger];

// main middleware
let MAIN_MIDDLEWARE = [];

// export all middleware
if (process.env.NODE_ENV === "development") {
  MAIN_MIDDLEWARE = [...MAIN_MIDDLEWARE, ...DEV_MIDDLEWARE];
}

export default MAIN_MIDDLEWARE;
