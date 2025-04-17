import { db } from "./firebase.js"


// const email = JSON.parse(localStorage.getItem("user")).email;
export const updateModuleProgress = async ({ email, moduleName, progress, data }) => {
  try {
    const userQuery = await db.collection("userInfo").where("email", "==", email).get();

    if (userQuery.empty) {
      throw new Error("User not found");
    }

    const userDocId = userQuery.docs[0].id;

    const updateData = {
      [`moduleProgress.${moduleName}.progress`]: progress,
      ...Object.entries(data || {}).reduce((acc, [key, value]) => {
        acc[`moduleProgress.${moduleName}.${key}`] = value;
        return acc;
      }, {}),
    };

    await db.collection("userInfo").doc(userDocId).update(updateData);

    console.log("Module progress updated successfully");
  } catch (error) {
    console.error("Error updating module progress:", error);
  }
};

import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";

export const updateUserInfo = async ({ email, updateData }) => {
  try {
    // Query the user document by email
    const userQuery = query(collection(db, "userInfo"), where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      throw new Error("User not found");
    }

    // Get the document ID of the user
    const userDocId = querySnapshot.docs[0].id;

    // Update Firestore document
    const userDocRef = doc(db, "userInfo", userDocId);
    await updateDoc(userDocRef, updateData);

    console.log("User info updated successfully");
  } catch (error) {
    console.error("Error updating user info:", error);
  }
};