import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterCom from "./Pages/RegisterCom";
import LoginCom from "./Pages/LoginCom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
//import PoppupComProfile from "./Components/PoppupComProfile";
import MobileNavbar from "./Components/MobileNavbar";
import MobileView from "./Pages/MobileView";

function RouterCom() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<RegisterCom />} />
        <Route path="login" element={<LoginCom />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="poppup" element={<MobileNavbar />} />
        <Route path="mobile" element={<MobileView />} />
      </Routes>
    </>
  );
}

export default RouterCom;
