import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/home';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
