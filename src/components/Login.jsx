import React, { useState } from "react";
import { login, register } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Please enter username and password");

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target[0].value;
      const password = event.target[1].value;
      const registeredUser = await login(username, password);
      const token = registeredUser.token;
      const loginUser = registeredUser.user.username;
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.setItem("token", token);
      localStorage.setItem("username", loginUser);

      if (token) {
        console.log("success");
        navigate("/");
      } else {
        setMessage("Username or password is incorrect");
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="registerPage">
        <div>Welcome Back to Fitness Tracker, Log In Here!</div>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="Enter username here" required></input>
          <label htmlFor="password">Password:</label>
          <input type="text" placeholder="Enter password here" required></input>
          <button type="submit" className="button">
            Login
          </button>
        </form>
        <div className="message">{message}</div>
      </div>
    </>
  );
};

export default Login;
