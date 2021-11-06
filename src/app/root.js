import React from "react";
import App from "./app";
import Theme from "style/material.theme";
import { ThemeProvider } from "@mui/material/styles";

// Use Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Imports: Redux Persist Persister
import { store, persistor } from "redux/store"; // Import redux store

// customer components
import ErrorPages from "pages/500";

// Error Handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPages />;
    }

    return this.props.children;
  }
}

// Root
export default function Root() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
