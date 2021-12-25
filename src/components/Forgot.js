import React, { useState } from "react";
import styles from "./Forgot.module.css";
import { useForgot } from "../hooks/useForgot";

function Forgot() {
  const [email, setemail] = useState("");
  const { forgot, error, isPending } = useForgot();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    forgot(email);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Forgot</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
          value={email}
        />
      </label>

      {!isPending && <button className="btn">send</button>}
      {isPending && (
        <button className="btn" disabled>
          loading..
        </button>
      ) ? (
        <div
          style={{
            color: "darkgreen",
            alignItems: "center",
            textShadowRadius: 10,
          }}
        >
          Check you mail
        </div>
      ) : (
        ""
      )}

      {error && <p>{error}</p>}
    </form>
  );
}

export default Forgot;
