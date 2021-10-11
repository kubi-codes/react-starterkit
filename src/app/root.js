import React from "react";
import App from "./app";
import Theme from "style/material.theme";
import { ThemeProvider } from "@mui/material/styles";

// Use Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Imports: Redux Persist Persister
import { store, persistor } from "redux/store"; // Import redux store

function Root() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default Root;
