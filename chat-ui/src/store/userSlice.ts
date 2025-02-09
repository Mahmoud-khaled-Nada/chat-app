import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfileDetails } from "./../utils/types";

type UserType = {
  user: UserProfileDetails | null;
};

const initialState: UserType = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfileDetails>): void => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
