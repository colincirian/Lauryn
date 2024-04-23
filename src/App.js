import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element= {<Home />}></Route>
          <Route path = "/home" element = {<Home />}></Route>
          <Route path = "/about" element = {<About />}></Route>
          <Route path = "/contact" element = {<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

