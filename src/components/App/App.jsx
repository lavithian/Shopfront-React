import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import useApp from "./hooks/useApp";
import Home from "../Home"
import ShowPage from '../ShowPage';
import LandingPage from '../LandingPage';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/headgear/:id" element={<ShowPage name="Annaki_Beret" price={1000} brand="Annaki" ability="Swim_Speed_Up" type="Headgear" />} />
        <Route path="/clothing/:id" element={<ShowPage />} />
        <Route path="/shoes/:id" element={<ShowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
