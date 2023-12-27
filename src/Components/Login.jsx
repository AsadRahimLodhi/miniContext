import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="User Name"
      />{" "}
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button onClick={handleLoginSubmit}>Submit</button>
    </div>
  );
}

export default Login;
