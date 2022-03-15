import { configureStore } from "@reduxjs/toolkit";

import categoryFilterSlice from "./categoryFilter/categoryFilterSlice";
import bookSearchSlice from "./book/bookSearch/bookSearchSlice";
import userAuthSlice from "./user/userAuth/userAuthSlice";
import userDataSlice from "./user/userData/userDataSlice";
import bookSelectedSlice from "./book/bookSelected/bookSelectedSlice";
import commentsSlice from "./comments/commentSlice";
import searchFiltersSlice from "./user/userFilters/userFiltersSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    userData: userDataSlice,
    booksData: bookSearchSlice,
    bookData: bookSelectedSlice,
    categoryFilterData: categoryFilterSlice,
    searchFiltersData: searchFiltersSlice,
    commentsData: commentsSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export default store;
