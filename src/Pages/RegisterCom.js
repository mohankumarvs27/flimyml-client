import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import CustomDropdown from "../Components/Common/CustomDropdown";

const geners = [
  { name: "Action", value: "28" },
  { name: "Adventure", value: "12" },
  { name: "Animation", value: "16" },
  { name: "Comedy", value: "35" },
  { name: "Crime", value: "80" },
  { name: "Science Fiction", value: "878" },
];

const likes = [
  { name: "Yes", value: "0" },
  { name: "No", value: "1" },
];

const watchType = [
  { name: "Movies", value: "M" },
  { name: "TVSeries", value: "S" },
];

// const watchCategory = [
//   { name: "Hollywood", value: "H" },
//   { name: "Other foreign industries", value: "OT" },
// ];

const RegisterCom = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    genres: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .label("Invalid UserName")
      .required("UserName is  Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address Required"),
    password: Yup.string().required("Password is Required"),
    confirmPassword: Yup.string()
      .label("Confirm Password")
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    genres: Yup.string().required("Required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    termsChecked: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API_URL}/api/user/createuser`,
        values
      );
      // Registration successful, handle the response as needed
      if (response?.data?.message === "Sucessfully Created") {
        alert(response?.data?.message);
        navigate("/login");
      } else {
        alert(response?.data?.message);
      }

      console.log(response.data);
    } catch (error) {
      // Handle error response
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-2.5 lg:h-screen">
      <div className="bg-white w-96 md:w-3/4 xl:w-2/4 p-6 rounded shadow">
        <div className="flex items-center justify-center mb-2">
          <img src="/assets/logo.svg" className="h-32" alt="logo" />
        </div>
        <h1 className="text-center p-4 text-3xl">Register Page</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-rows-4 lg:grid-flow-col gap-2">
                <div className="field w-[325px]">
                  <label htmlFor="userName">User Name</label>
                  <Field
                    name="userName"
                    placeholder="Enter your UserName"
                    className="w-full p-2 bg-gray-100 text-gray-500 outline-none mb-1 rounded"
                  />

                  <div className="error text-red-500">
                    <ErrorMessage name="userName" component="span" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    placeholder="Enter your Email"
                    className="w-full p-2 bg-gray-100 text-gray-500 outline-none mb-1 rounded"
                  />

                  <div className="error text-red-500">
                    <ErrorMessage name="email" component="span" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="password">Password</label>
                  <div className="relative">
                    <Field
                      name="password"
                      placeholder="Password"
                      type="password"
                      className="w-full p-2 bg-gray-100 text-gray-500 outline-none mb-1 rounded"
                    />
                  </div>
                  <div className="error text-red-500">
                    <ErrorMessage name="password" component="span" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="password">Confirm Password</label>
                  <div className="relative">
                    <Field
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      type="password"
                      className="w-full p-2 bg-gray-100 text-gray-500 outline-none mb-1 rounded"
                    />
                  </div>
                  <div className="error text-red-500">
                    <ErrorMessage name="confirmPassword" component="span" />
                  </div>
                </div>

                <div className="field">
                  <Field
                    name="genres"
                    render={({ field, form }) => (
                      <CustomDropdown
                        field={field}
                        form={form}
                        title="What is your favourite genre?"
                        placeholder="Select your favourite genre"
                        options={geners}
                        defaultValue={"Select Geners"}
                      />
                    )}
                  />
                </div>

                <div className="field">
                  <label htmlFor="phoneNumber">Mobile Number</label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter Your 10 Digit Mobile Number"
                    className="w-full p-2 bg-gray-100 text-gray-500 outline-none mb-1 rounded"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    className="text-red-500"
                    component="div"
                  />
                </div>

                <div className="field">
                  <Field
                    name="anime"
                    render={({ field, form }) => (
                      <CustomDropdown
                        field={field}
                        form={form}
                        title="Do you like anime ?"
                        placeholder="Like Anime"
                        options={likes}
                        defaultValue={"Select Option"}
                      />
                    )}
                  />
                </div>

                <div className="field">
                  <Field
                    name="MovieorSeries"
                    render={({ field, form }) => (
                      <CustomDropdown
                        field={field}
                        form={form}
                        title="Do you prefer more movies or TV series?"
                        placeholder="Movie or Series"
                        options={watchType}
                        defaultValue={"Select Option"}
                      />
                    )}
                  />
                </div>
                {/* <div className="field">
                  <Field
                    // name="foreignmovies"
                    render={({ field, form }) => (
                      <CustomDropdown
                        field={field}
                        form={form}
                        title="Do you like foreign movies?"
                        placeholder="Foreign movies"
                        options={watchCategory}
                        defaultValue={"Select Option"}
                      />
                    )}
                  />
                </div> */}
              </div>
              <div className="field">
                <label htmlFor="termsChecked" className="checkbox-label">
                  <Field
                    id="termsChecked"
                    name="termsChecked"
                    type="checkbox"
                    className="mr-2"
                  />
                  I agree to the terms and conditions
                </label>
                <ErrorMessage
                  name="termsChecked"
                  component="div"
                  className="error text-red-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 rounded justify-center bg-[#212b36] hover:bg-[#454f5b] text-white my-2 disabled:cursor-wait"
              >
                {isSubmitting ? "Loading..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center p-4">
          Do you have an account?
          <Link to="/login" className="text-[#00a76f]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterCom;
