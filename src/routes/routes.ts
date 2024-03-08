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
];
export default ROUTES;
