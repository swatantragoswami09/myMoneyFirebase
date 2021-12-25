import React, { useState } from "react";
import styles from "./Forget.module.css";
import { useForget } from "../hooks/useForget";

function Forget() {
  const [email, setemail] = useState("");
  const { forget, error, isPending } = useForget();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    forget(email);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Forget</h2>
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

export default Forget;
