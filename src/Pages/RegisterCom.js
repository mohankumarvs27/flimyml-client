import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RegisterCom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const registerFun = async () => {
    try {
      const { data } = await axios.post(
        "https://filmyml-backend.vercel.app/api/user/createuser",
        {
          email: email,
          userName: email.split("@")[0],
          password: password,
          confirmPassword: confirmPassword,
          phoneNumber: phoneNumber,
        }
      );

      data?.message === "Sucessfully Created"
        ? navigate("/login")
        : alert("Register failed");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white w-96 md:w-3/4 xl:w-1/3 p-6 rounded shadow">
          <>
            <div className="flex items-center justify-center mb-4">
              <img src="/assets/logo.svg" className="h-32" alt="logo" />
            </div>
            <h1 className="text-center p-4 text-xl">Register Page</h1>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 bg-gray-50 text-gray-500 outline-none mb-4"
                placeholder="Enter your email id"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 bg-gray-50 text-gray-500 outline-none mb-4"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="password">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-2 bg-gray-50 text-gray-500 outline-none mb-4"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="password">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                className="w-full p-2 bg-gray-50 text-gray-500 outline-none mb-4"
                placeholder="Enter your Phone Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                required
              ></input>
            </div>
            <div>
              <input type="checkbox" id="terms" className="" required />
              <label
                htmlFor="terms"
                className="pl-2 font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <span className="font-medium text-blue-600 hover:underline dark:text-primary-500">
                  Terms and Conditions
                </span>
              </label>
            </div>
            <button
              className="bg-blue-500 w-full py-2 rounded justify-center hover:bg-blue-600 text-white my-2"
              onClick={() => {
                registerFun();
                // loginFormik()
              }}
            >
              Register
            </button>
          </>
          <p className="text-center p-4">
            Do you have an account?
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterCom;
