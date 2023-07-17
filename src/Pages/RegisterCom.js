import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import ListboxCom from "../Components/ListBoxCom";

function RegisterCom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerFun = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/user/createuser`,
        {
          email: email,
          userName: email.split("@")[0],
          password: password,
          confirmPassword: confirmPassword,
          phoneNumber: phoneNumber,
          selectedValue: selectedValue,
        }
      );

      data?.message === "Sucessfully Created"
        ? navigate("/login")
        : alert(data?.message);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  function handleChange(event) {
    setSelectedValue(event.target.value, () => {
      console.log(selectedValue);
    });
  }

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 py-10 px-2 overflow-x-hidden lg:h-screen">
        <div className="bg-white w-96 md:w-3/4 xl:w-1/2 h-full p-2 md:p-4 rounded shadow ">
          <>
            <div className="flex items-center justify-center mb-4">
              <img src="/assets/logo.svg" className="h-32" alt="logo" />
            </div>
            <h1 className="text-center p-4 text-3xl">Register Page</h1>
            <div className="grid grid-rows-4 lg:grid-flow-col gap-4">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 bg-gray-200 rounded text-gray-500 outline-none mb-2"
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
                  className="w-full p-2 bg-gray-200 rounded text-gray-500 outline-none mb-2"
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
                  className="w-full p-2 bg-gray-200 rounded text-gray-500 outline-none mb-2"
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
                  className="w-full p-2 bg-gray-200 rounded text-gray-500 outline-none mb-2"
                  placeholder="Enter your Phone Number"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="cars">What is your favourite genre?</label>
                <br />
                <select
                  name="cars"
                  id="cars"
                  className="bg-gray-200 rounded  text-gray-500 outline-none w-full py-2 px-1 mb-2"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  <option value="28">Action</option>
                  <option value="12">Adventure</option>
                  <option value="16">Animation</option>
                  <option value="35">Comedy</option>
                  <option value="80">Crime</option>
                  <option value="878">Science Fiction</option>
                </select>
              </div>
              <div>
                <label htmlFor="cars">Do you like anime ?</label>
                <br />
                <select
                  name="anime"
                  className="bg-gray-200 rounded  text-gray-500 outline-none w-full py-2 px-1 mb-2"
                >
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              </div>
              <div>
                <label htmlFor="cars">
                  Do you prefer more movies or TV series?
                </label>
                <br />
                <select
                  name="anime"
                  className="bg-gray-200 rounded  text-gray-500 outline-none w-full py-2 px-1 mb-2"
                >
                  <option value="M">Movies</option>
                  <option value="TV">TV series</option>
                </select>
              </div>
              <div>
                <label htmlFor="cars">Do you like foreign movies?</label>
                <br />
                <select
                  name="anime"
                  className="bg-gray-200 rounded  text-gray-500 outline-none w-full py-2 px-1 mb-2"
                >
                  <option value="H">Hollywood</option>
                  <option value="OI">Other foreign industries</option>
                </select>
              </div>
            </div>
            <div>
              <input type="checkbox" id="terms" className="" required />
              <label
                htmlFor="terms"
                className="pl-2 font-light text-[#637381] "
              >
                I accept the{" "}
                <span className="font-medium text-[#212b36] hover:underline">
                  Terms and Conditions
                </span>
              </label>
            </div>
            <button
              className="w-full py-2 rounded justify-center bg-[#212b36] hover:bg-[#454f5b] text-white my-2 disabled:cursor-wait"
              onClick={() => {
                registerFun();
                // loginFormik()
              }}
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </>
          <p className="text-center p-4">
            Do you have an account?
            <Link to="/login" className="text-[#00a76f]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterCom;
