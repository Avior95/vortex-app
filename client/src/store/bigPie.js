import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import genderReducer from "./gender";

const store = configureStore({
  reducer: {
    authSlice: authReducer,
    genderSlice: genderReducer,
  },
});

export default store;
