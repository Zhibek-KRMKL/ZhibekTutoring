import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "data",
  initialState: {
    generation: "",
    dataApi: "",
    loading: true,
  },
  reducers: {
    setGeneration: (state, action) => {
      state.generation = action.payload;
    },
    setDataApi: (state, action) => {
      state.dataApi = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setGeneration, setDataApi, setLoading } =
  notificationSlice.actions;
export default notificationSlice.reducer;
