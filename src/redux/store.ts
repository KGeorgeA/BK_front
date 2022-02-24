import { configureStore } from "@reduxjs/toolkit";

import categoryFilterSlice from "./categoryFilter/categoryFilterSlice";
import bookSearchSlice from "./book/bookSearch/bookSearchSlice";
import userAuthSlice from "./user/userAuth/userAuthSlice";
import userDataSlice from "./user/userData/userDataSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    userData: userDataSlice,
    bookData: bookSearchSlice,
    categoryFilterData: categoryFilterSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export default store;
