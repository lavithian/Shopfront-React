import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { getFont } from "./hooks/useApp";
import styles from "./App.module.css"
import Home from "../Home"
import ShowPage from '../ShowPage';
import LandingPage from '../LandingPage';
import NotFound from '../NotFound';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/headgear/:id" element={<ShowPage />} />
        <Route path="/home/clothing/:id" element={<ShowPage />} />
        <Route path="/home/shoes/:id" element={<ShowPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
