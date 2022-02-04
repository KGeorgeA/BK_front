import { configureStore } from "@reduxjs/toolkit";

import userAuthSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export default store;
