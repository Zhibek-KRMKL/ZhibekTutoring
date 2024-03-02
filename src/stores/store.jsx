import { configureStore } from "@reduxjs/toolkit";
import zhibekReducer from "../reducers/reducer";
import loginSlice from "../reducers/LoginReducer";
import notificationSlice from "../reducers/NotificationReducer";
import listSlice from "../reducers/ListReducer";

const store = configureStore({
  reducer: {
    zhibekReducer: zhibekReducer,
    auth: loginSlice,
    data: notificationSlice,
    list: listSlice,
  },
});

export default store;
