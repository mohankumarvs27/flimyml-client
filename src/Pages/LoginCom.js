import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginCom = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Make API request
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/user/checkuser`,
        values
      );

      // console.log(response);
      response?.data?.message === "login sucessfull"
        ? navigate("/home/")
        : alert(response?.data?.message);
      console.log(response.data);

      const myobject = {
        userName: response?.data?.user?.userName,
        imageUrl: response?.data?.user?.imageUrl,
        email: response?.data?.user?.email,
        phoneNumber: response?.data?.user?.phoneNumber,
        geners: response?.data?.user?.genres,
      };
      // console.log(myobject?.userName);

      localStorage.setItem(
        "dbdatalocal",
        JSON.stringify(Object.values(myobject))
      );
      // console.log(myobject);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-96 md:w-3/4 xl:w-1/3 p-6 rounded shadow">
        <h1 className="text-center p-4 text-3xl">Login Page</h1>
        <div className="flex items-center justify-center mb-4">
          <img src="/assets/logo.svg" className="h-32" alt="logo" />
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="w-full p-2 bg-gray-50 text-gray-500 outline-none mb-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 bg-gray-50 text-gray-500 outline-none mb-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 rounded justify-center bg-[#212b36] hover:bg-[#454f5b] text-white my-2 disabled:cursor-wait disabled:bg-[#454f5b]"
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center p-4">
          Don't you have an account?
          <Link to="/register" className="text-[#00a76f]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginCom;
