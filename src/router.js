import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterCom from "./Pages/RegisterCom";
import LoginCom from "./Pages/LoginCom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
//import PoppupComProfile from "./Components/PoppupComProfile";
// import MobileNavbar from "./Components/MobileNavbar";
// import MobileView from "./Pages/MobileView";
import MovieDetails from "./Pages/MovieDetails";
import CardCom from "./Components/CardCom";
import MoviesDataCom from "./Components/MoviesDataCom";
import TvseriesDataCom from "./Components/TvseriesDataCom";
import ProfileDataCom from "./Components/ProfileDataCom";

function RouterCom() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterCom />} />
        <Route path="/login" element={<LoginCom />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<CardCom />} />
          <Route path="moviedetails/:id" element={<MovieDetails />} />
          <Route path="movies" element={<MoviesDataCom />} />
          <Route path="tvseries" element={<TvseriesDataCom />} />
          <Route path="profile" element={<ProfileDataCom />} />
        </Route>
        {/* <Route path="/poppup" element={<MobileNavbar />} />
        <Route path="/mobile" element={<MobileView />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} /> */}
      </Routes>
    </>
  );
}

export default RouterCom;
