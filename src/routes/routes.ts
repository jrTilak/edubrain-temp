import { LazyExoticComponent, lazy } from "react";

interface IRoute {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
}

const ROUTES: IRoute[] = [
  {
    path: "/",
    component: lazy(() => import("@/pages/Home")),
  },
  {
    path: "/dashboard",
    component: lazy(() => import("@/pages/Dashboard")),
  },
];
export default ROUTES;
