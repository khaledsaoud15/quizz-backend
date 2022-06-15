import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
