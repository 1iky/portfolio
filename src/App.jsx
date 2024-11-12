
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Projects from './Projects.jsx';


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    )
}

