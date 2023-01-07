 import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Details from "../pages/Details";
import Pokedex from "../pages/pokedex/Pokedex";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="*" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

// <Route path="*" element={<NotFoundPage />} />
