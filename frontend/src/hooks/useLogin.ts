import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

interface LoginInputs {
  username: String;
  password: String;
}


const useLogin = () => {
  const [loading, setLoading] = useState(false);
  //@ts-ignore
  const { setAuthUser } = useAuthContext();

  const login = async (username: String, password: String) => {

    const success = handleInputErrors({
      
      username,
      password,
      
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      //@ts-ignore
       const data = await res.json(); 
      //@ts-ignore
      if (data.error) {
        //@ts-ignore
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;


function handleInputErrors({
  username,
  password,
}: LoginInputs) {
  if ( !username || !password ) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be 6 characters");
    return false
  }
  return true;
}
