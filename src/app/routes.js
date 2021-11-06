import { lazy } from "react";

const Routes = [
  // DEFAULT PAGES
  {
    path: "/",
    component: lazy(() => import("pages/Home")),
    name: "Home",
  },
  /*
   ---------------------------------------------
    YOUR URL PAGES
   ---------------------------------------------
  */
  {
    path: "/example",
    component: lazy(() => import("pages/Example")),
    name: "Example",
  },
  /*
    ---------------------------------------------
    PLEASE KEEP PUT IT AT THE BOTTOM
    ---------------------------------------------
  */
  {
    path: "*",
    component: lazy(() => import("pages/404")),
    name: "Page not found",
  },
];

export default Routes;
