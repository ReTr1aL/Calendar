import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { ROUTES } from "./routes";

function App() {
  const routes = ROUTES.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        name={route.name}
        element={route.element}
      />
    );
  });
  return (
    <Suspense>
      <Routes>{routes}</Routes>
    </Suspense>
  );
}

export default App;
