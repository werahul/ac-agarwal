import React from "react";
import { Home, Product, Pricing, Support, PressCoverage, Bloom, About , Math, Gullak, Xts, LOC } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/product" Component={Product} />
          <Route exact path="/bloom" Component={Bloom} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/math" Component={Math} />
          <Route exact path="/pricing" Component={Pricing} />
          <Route exact path="/gullak" Component={Gullak} />
          <Route exact path="/support" Component={Support} />
          <Route exact path="/xts-api" Component={Xts} />
          <Route exact path="/list-of-charges" Component={LOC} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
