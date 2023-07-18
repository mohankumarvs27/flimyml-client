import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterCom from "./Pages/RegisterCom";
import LoginCom from "./Pages/LoginCom";
import Home from "./Pages/Home";
import Dashboard from "./Layout/Dashboard";
import MovieDetails from "./Pages/MovieDetails";
import CardCom from "./Components/CardCom";
import MoviesDataCom from "./Components/MoviesDataCom";
import TvseriesDataCom from "./Components/TvseriesDataCom";
import ProfileDataCom from "./Components/ProfileDataCom";
import SeriesDetailsCom from "./Pages/SeriesDetails";

function RouterCom() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterCom />} />
        <Route path="/login" element={<LoginCom />} />
        <Route path="/home" element={<Dashboard />}>
          <Route path="" element={<CardCom />} />
          <Route path="moviedetails/:id" element={<MovieDetails />} />
          <Route path="seriesdetails/:id" element={<SeriesDetailsCom />} />
          <Route path="movies" element={<MoviesDataCom />} />
          <Route path="webseries" element={<TvseriesDataCom />} />
          <Route path="profile" element={<ProfileDataCom />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouterCom;
