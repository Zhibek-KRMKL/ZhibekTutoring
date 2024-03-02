import { createSlice } from "@reduxjs/toolkit";

const zhibekReducer = createSlice({
  name: "zhibekReducer",
  initialState: {
    data: [1, 2, 3],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = zhibekReducer.actions;
export default zhibekReducer.reducer;
