import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element= {<Home />}></Route>
          <Route path = "/home" element = {<Home />}></Route>
          <Route path = "/about" element = {<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

