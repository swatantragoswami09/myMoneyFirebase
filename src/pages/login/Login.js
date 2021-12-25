import React, { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          loading..
        </button>
      )}
      {error && <p>{error}</p>}
      <Link to="/forget" style={{ marginLeft: "10px" }}>
        forget password
      </Link>
    </form>
  );
}

export default Login;
