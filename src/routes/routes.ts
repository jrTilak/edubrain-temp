//@ts-nocheck
import { LazyExoticComponent, lazy } from "react";

interface IRoute {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
  wrapper?: LazyExoticComponent<({ children }) => JSX.Element>;
}

const ROUTES: IRoute[] = [
  {
    path: "/",
    component: lazy(() => import("@/pages/Home")),
  },
  {
    path: "/dashboard/myCourse",
    wrapper: lazy(
      () => import("@/pages/Dashboard/DashboardLayout/DashboardLayout")
    ),
    component: lazy(() => import("@/pages/Dashboard/DashboardPages/MyCourse")),
  },
  {
    path: "/dashboard/myAssignment",
    wrapper: lazy(
      () => import("@/pages/Dashboard/DashboardLayout/DashboardLayout")
    ),
    component: lazy(() => import("@/pages/Dashboard/DashboardPages/MyCourse")),
  },
];
export default ROUTES;
