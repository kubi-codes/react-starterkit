import React from "react";

const Routes = [
  // DEFAULT PAGES
  {
    path: "/",
    component: React.lazy(() => import("pages/Home")),
    name: "Home",
    exact: true,
  },
  /*
   ---------------------------------------------
    YOUR URL PAGES
   ---------------------------------------------
  */
  {
    path: "/example",
    component: React.lazy(() => import("pages/Example")),
    name: "Example",
    exact: true,
  },
  /*
    ---------------------------------------------
    ERROR PAGES, PLEASE KEEP PUT IT AT THE BOTTOM
    ---------------------------------------------
  */
  {
    path: "/something-wrong",
    component: React.lazy(() => import("pages/500")),
    name: "SOMETHING WRONG",
    exact: true,
  },
  {
    path: "*",
    component: React.lazy(() => import("pages/404")),
    name: "PAGE NOT FOUND",
    exact: true,
  },
];

export default Routes;
