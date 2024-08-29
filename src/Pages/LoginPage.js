import React, { useState } from "react";
import creds from "../Database/users/users";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import Footer from "../Components/Footer";
const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // const response = await fetch(creds);
    // const users = await response.json();
    console.log(creds);
    const user = creds.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate("/home");
      props.setUser(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="loginform">
        <div>
          <h1>Infy Shopping POC</h1>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
