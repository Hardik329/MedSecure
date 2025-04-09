import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in via popup:", user);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const handleLogout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    console.log("User signed out.");
  } catch (error) {
    console.error("Logout error:", error);
  }
};
