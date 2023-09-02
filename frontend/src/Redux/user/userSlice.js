import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (sate, action) => {
      sate.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
