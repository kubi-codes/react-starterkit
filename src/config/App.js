import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
