// Inside Login component
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  getRedirectResult,
//   signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import React from "react";
import { FaLock, FaUser } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      signInWithRedirect(auth, provider);

      const result = await getRedirectResult(auth);
      const user = result.user;
      console.log("Logged in:", user.displayName);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>
        <FaUser /> Login
      </h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>
        <FaLock /> Login
      </button>
    </div>
  );
}
