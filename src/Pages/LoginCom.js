import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginCom() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFun = async () => {
    try {
      const { data } = await axios.post(
        "https://filmyml-backend.vercel.app/api/user/checkuser",
        {
          email: email,
          password: password,
        }
      );

      data?.message === "login sucessfull"
        ? navigate("/dashboard/home")
        : alert("login failed");
      console.log(data);

      const myobject = {
        userName: data?.user?.userName,
        imageUrl: data?.user?.imageUrl,
        email: data?.user?.email,
        phoneNumber: data?.user?.phoneNumber,
        geners: data?.user?.genres,
      };
      console.log(myobject?.userName);

      localStorage.setItem(
        "dbdatalocal",
        JSON.stringify(Object.values(myobject))
      );
      console.log(myobject);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-96 md:w-3/4 xl:w-1/3 p-6 rounded shadow">
        <h1 className="text-center p-4">Login Page</h1>

        <div className="flex items-center justify-center mb-4">
          <img src="/assets/logo.svg" className="h-32" alt="logo" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-50 text-gray-500 outline-none mb-4"
            placeholder="Enter your email id"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="w-full p-2 bg-gray-50 text-gray-500 outline-none mb-4"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            loginFun();
          }}
          className="bg-blue-500 w-full py-2 rounded justify-center hover:bg-blue-600 text-white my-2"
        >
          Login
        </button>

        <p className="text-center p-4">
          Don't you have an account?
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginCom;
