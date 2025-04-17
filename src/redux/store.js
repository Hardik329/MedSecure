import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moduleProgressReducer from "./moduleProgressSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    moduleProgress: moduleProgressReducer,
  },
});

export default store;