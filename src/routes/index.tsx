import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import AppLayout from "@/components/layouts/AppLayout";
import AppLoading from "@/components/loaders/AppLoading";

const RoutesContainer = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        {ROUTES.map(
          ({ component: Component, path, wrapper: Wrapper }, index) => {
            return (
              <Route
                key={index}
                path={path}
                element={
                  <AppLayout>
                    <Suspense fallback={<AppLoading />}>
                      {Wrapper ? (
                        <Wrapper>
                          <Component />
                        </Wrapper>
                      ) : (
                        <Component />
                      )}
                    </Suspense>
                  </AppLayout>
                }
              />
            );
          }
        )}
      </Routes>
    </Router>
  );
};
export default RoutesContainer;
