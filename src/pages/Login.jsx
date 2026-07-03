import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [currentState, setCurrentState] = useState("Sign Up");

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (currentState === "Sign Up" && !form.username.trim()) {
      err.username = "Username is required";
    }

    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email";
    }

    if (!form.password) {
      err.password = "Password is required";
    } else if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    if (currentState === "Sign Up") {
      if (!form.confirmPassword) {
        err.confirmPassword = "Confirm your password";
      } else if (form.password !== form.confirmPassword) {
        err.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (currentState === "Sign Up") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        })
      );

      alert("Registered Successfully!");

      setCurrentState("Login");
      setForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
       const user = JSON.parse(localStorage.getItem("user"));

      
        
    if (
          user &&
          user.email === form.email &&
          user.password === form.password
        ) {
  // Store logged-in user
         localStorage.setItem("currentUser", JSON.stringify(user));

            alert("Login Successful!");
            navigate("/profile"); // Redirect to profile page
      } else {
        alert("Invalid Email or Password");
      }
          
          }
        };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === "Sign Up" && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={form.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-800"
            />
            {errors.username && (
              <p className="text-red-500 text-sm w-full">
                {errors.username}
              </p>
            )}
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-800"
        />
        {errors.email && (
          <p className="text-red-500 text-sm w-full">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-800"
        />
        {errors.password && (
          <p className="text-red-500 text-sm w-full">{errors.password}</p>
        )}

        {currentState === "Sign Up" && (
          <>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-800"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm w-full">
                {errors.confirmPassword}
              </p>
            )}
          </>
        )}

        <div className="w-full flex justify-between text-sm">
          <p className="cursor-pointer">Forgot your password?</p>

          {currentState === "Login" ? (
            <p
              onClick={() => {
                setCurrentState("Sign Up");
                setErrors({});
              }}
              className="cursor-pointer"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => {
                setCurrentState("Login");
                setErrors({});
              }}
              className="cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>

        <button className="bg-black text-white px-8 py-2 mt-4">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;