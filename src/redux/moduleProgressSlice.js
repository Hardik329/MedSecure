import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserInfo } from "../dbUtils";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updateModuleProgress = createAsyncThunk(
  "moduleProgress/updateModuleProgress",
  async ({ email, moduleName, progress, data }, { getState }) => {
    const state = getState().moduleProgress;
    const updatedModuleProgress = {
      ...state[moduleName],
      progress,
      ...data,
    };

    const userDocRef = doc(db, "userInfo", email);
    console.log(userDocRef.path);
    try {
      await updateDoc(userDocRef, {
        [`moduleProgress.${moduleName}`]: updatedModuleProgress,
      });
    } catch (err) {
      console.log(err);
    }
    console.log(userDocRef);

    return { moduleName, updatedModuleProgress };
  }
);

export const fetchModuleProgress = createAsyncThunk(
  "moduleProgress/fetchModuleProgress",
  async (email) => {
    try {
      const userDocRef = doc(db, "userInfo", email);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        throw new Error("User not found");
      }

      return userDoc.data().moduleProgress || {};
    } catch (error) {
      console.error("Error fetching module progress:", error);
      throw error;
    }
  }
);

const initialState = {};

const moduleProgressSlice = createSlice({
  name: "moduleProgress",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateModuleProgress.fulfilled, (state, action) => {
      const { moduleName, updatedModuleProgress } = action.payload;
      console.log("Updated module progress:", updatedModuleProgress);
      state[moduleName] = updatedModuleProgress;
    });
    builder.addCase(fetchModuleProgress.fulfilled, (state, action) => {
        console.log(action.payload)
      return action.payload;
    });
  },
});

export default moduleProgressSlice.reducer;
