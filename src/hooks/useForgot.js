import React, { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useForgot = () => {
  const [isCanclled, setIsCanclled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const forgot = async (email) => {
    setError(null);
    setIsPending(true);
    // sign the user out
    try {
      const res = await projectAuth.sendPasswordResetEmail(email);

      //   dispatch logout action
      // dispatch({ type: "LOGIN", payload: res.user });
      // update state
      if (!isCanclled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCanclled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCanclled(true);
  }, []);

  return { forgot, error, isPending };
};
