import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    // Action
    setLoggedIn: (state) => {
      state.loggedIn = true;
    },
    setLoggedOut: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;
