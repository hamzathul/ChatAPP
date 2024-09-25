import React, { useState } from "react";
import toast from "react-hot-toast";

interface SignupInputs {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }: SignupInputs) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("api/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);

    } catch (error:any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}: SignupInputs) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be 6 characters");
  }
  return true;
}
