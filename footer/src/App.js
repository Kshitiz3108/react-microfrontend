import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/footer" element={<Footer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
