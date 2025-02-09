import { configureStore } from "@reduxjs/toolkit";

import sidebarToggleSlice from "./sidebarToggleSlice";
import userSlice from "./userSlice";
import conversationSlice from "./conversationSlice";

export const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    user: userSlice,
    conversation: conversationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
