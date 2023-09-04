import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMen: true,
};
const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    changeGender(state) {
      state.isMen = !state.isMen;
    },
  },
});

export const genderActions = genderSlice.actions;

export default genderSlice.reducer;
