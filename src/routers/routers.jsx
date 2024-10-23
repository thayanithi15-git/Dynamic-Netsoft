import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import { TotalProvider } from "../components/usecontext/usecontext";

export default function Routers() {
  return (
    <TotalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TotalProvider>
  );
}
