import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.svg";

function Home() {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex justify-end gap-3 p-5 text-white">
          <Link
            to="/login"
            className="btn bg-[#00a76f] hover:bg-[#007867] font-bold rounded p-2"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn bg-[#212b36] hover:bg-[#454f5b] font-bold rounded p-2"
          >
            Register
          </Link>
        </div>
        <div className="flex flex-col items-center pt-16">
          <img src="/assets/logo.svg" className="w-[10%]" alt="logo" />
          <img src="/assets/logo-text.svg" alt="logo_text" />
          <p className="w-[34rem] pt-[21.5rem] text-center text-lg text-zinc-50">
            Filmyml is the website recommend movies to user based on Popular,
            Favourite Movie. Find Movie and Webseries that may like you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
