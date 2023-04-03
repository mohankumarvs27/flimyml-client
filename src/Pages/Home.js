import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login" className="text-blue-500">
        Login
      </Link>
      <Link to="/register" className="text-blue-500">
        Register
      </Link>
    </div>
  );
}

export default Home;
