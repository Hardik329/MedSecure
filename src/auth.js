import { signInWithPopup, signOut } from "firebase/auth";
import { auth, db, provider } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in via popup:", user);
    localStorage.setItem("user", JSON.stringify(user));

    const userDocRef = doc(db, "userInfo", user.email);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        email: user.email,
        displayName: user.displayName,
        moduleProgress: {},
      });
      console.log("New user created in Firestore");
    } else {
      console.log("User already exists in Firestore");
    }
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
