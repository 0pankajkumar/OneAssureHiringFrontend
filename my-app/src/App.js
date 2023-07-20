import { useState } from "react";
import "./App.css";
import Premium from "./Premium";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Premium cartValue={cartValue} setCartValue={setCartValue} />
            }
          />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
