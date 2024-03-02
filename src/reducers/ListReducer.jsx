import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    items: [],
  },
  reducers: {
    setAddItems: (state, action) => {
      state.items.push(action.payload);
    },
    setRemoveItems: (state, action) => {
      state.items.pop(action.payload);
    },
  },
});

export const { setAddItems, setRemoveItems } = listSlice.actions;
export default listSlice.reducer;
