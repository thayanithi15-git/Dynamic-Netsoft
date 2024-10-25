import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import { TotalContext } from "../components/usecontext/usecontext";

export default function Routers() {

  // const Dashboard = withAuth(Dashboard);
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home  />} />
      </Routes>
    </BrowserRouter>
  );
}
