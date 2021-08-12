import React from "react";

const Routes = [
  {
    path: "/",
    component: React.lazy(() => import("pages/Home")),
    name: "Home",
    exact: true,
  },
];

export default Routes;
