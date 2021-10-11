import React, { Suspense } from "react";
import Routes from "./routes";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// @custome component
import MainBackdrop from "components/backdrop";

function App() {
  return (
    <Suspense fallback={<MainBackdrop open />}>
      <Router>
        {/* 
          A <Switch> looks through its children <Route> and
          renders the first one that matches the current URL. 
        */}
        <Switch>
          {Routes.map((val, key) => {
            const Components = val.component;
            return (
              <Route
                key={key}
                path={val.path}
                exact={val.exact}
                render={(props) => {
                  return (
                    <>
                      <Helmet>
                        <title>{val?.name} - Your App</title>
                      </Helmet>
                      <Components {...props} pageParam={val} />
                    </>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
