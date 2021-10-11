import React, { Suspense } from "react";
import Routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// @custome component
import MainBackdrop from "components/backdrop";

function App() {
  return (
    <Suspense fallback={<MainBackdrop open />}>
      <Router>
        {/* 
          A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. 
        */}
        <Switch>
          {Routes.map((val, key) => (
            <Route
              key={key}
              component={val.component}
              path={val.path}
              exact={val.exact}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
