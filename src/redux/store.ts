import { configureStore } from "@reduxjs/toolkit";

import categoryFilterSlice from "./categoryFilter/categoryFilterSlice";
import bookSearchSlice from "./book/bookSearch/bookSearchSlice";
import userAuthSlice from "./user/userAuth/userAuthSlice";
import userDataSlice from "./user/userData/userDataSlice";
import searchFiltersSlice from "./user/userFilters/userFiltersSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    userData: userDataSlice,
    bookData: bookSearchSlice,
    categoryFilterData: categoryFilterSlice,
    searchFiltersData: searchFiltersSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export default store;
