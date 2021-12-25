import React, { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCanclled, setIsCanclled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    // sign the user out
    try {
      await projectAuth.signOut();
      // dispatch logout action
      dispatch({ type: "LOGOUT" });
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

  return { logout, error, isPending };
};
