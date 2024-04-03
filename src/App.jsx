import React from "react";
import { Home, Pricing, Support, PressCoverage } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
