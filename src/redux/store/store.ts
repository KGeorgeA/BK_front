import { configureStore } from "@reduxjs/toolkit";

// import userReducer, {userSlice} from "../reducers/userSlice";
import userAuthSlice from "../features/User/userSlice";

// Не готово от слова совсем
// доделать/переделать

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
  },  
});

export type RootStore = ReturnType<typeof store.getState>;

export default store
