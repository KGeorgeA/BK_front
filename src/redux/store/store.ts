import { configureStore } from "@reduxjs/toolkit";

// import userReducer, {userSlice} from "../reducers/userSlice";
import { userSlice } from "../slices/userSlice";

// Не готово от слова совсем
// доделать/переделать

export default configureStore({
  reducer: {

  },
});

// export type RootStore = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
