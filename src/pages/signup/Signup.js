import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";

function Signup() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
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
      <label>
        <span>dispaly name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="password"
          value={displayName}
        />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && (
        <buttton className="btn" disabled>
          Loading
        </buttton>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Signup;
