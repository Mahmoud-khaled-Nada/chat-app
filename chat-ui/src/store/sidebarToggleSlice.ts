import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define valid tab names using a union type
type Tab = "chats" | "friends" | "notification" | "favorite" | "settings"; 

type TabState = {
  sidebarTabs: Tab; // Use the specific Tab type instead of string
};

const initialState: TabState = {
  sidebarTabs: "chats", // Initial tab is "chats"
};

export const sidebarToggleSlice = createSlice({
  name: "sidebarToggleSlice",
  initialState,
  reducers: {
    // Ensure the payload is of type `Tab`
    setActiveTab: (state, action: PayloadAction<Tab>): void => {
      state.sidebarTabs = action.payload;
    },
  },
});

export const { setActiveTab } = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;
