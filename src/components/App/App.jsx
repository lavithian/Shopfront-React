import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
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
        <Route path="/headgear/:id" element={<ShowPage />} />
        <Route path="/clothing/:id" element={<ShowPage />} />
        <Route path="/shoes/:id" element={<ShowPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
