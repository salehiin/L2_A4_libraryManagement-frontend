

import { configureStore } from '@reduxjs/toolkit'
// import { bookSlice } from './features/books/bookSlice'
// import bookReducer from './features/book/bookSlice'
import { baseApi } from './api/baseApi'
// ...

export const store = configureStore({
  reducer: {
    // book: bookSlice.reducer,
    // bookManage: bookReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export type AppStore = typeof store
