import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
const SubmainApp = React.lazy(() => import("submain/App"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          exact
          path="app/footer"
          element={
            <Suspense fallback={"...loading"}>
              <SubmainApp />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
