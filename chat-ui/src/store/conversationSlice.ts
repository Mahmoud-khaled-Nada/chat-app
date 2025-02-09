import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getConversations } from "../utils/api";
import { ConversationsDetails } from "../utils/types";

export interface ConversationsState {
  conversations: ConversationsDetails[];
  conversationId: number | null;
  loading: boolean;
}

export const fetchConversationsThunk = createAsyncThunk("conversations/fetch", async () => {
  return getConversations();
});

const initialState: ConversationsState = {
  conversations: [],
  conversationId: null,
  loading: false,
};

export const conversationSlice = createSlice({
  name: "conversationSlice",
  initialState,
  reducers: {
    addConversation: (state, action: PayloadAction<ConversationsDetails>) => {
      console.log("addConversation");
      state.conversations.unshift(action.payload);
    },
    updateConversation: (state, action: PayloadAction<number>) => {
      console.log("Inside updateConversation");
      const index = state.conversations.findIndex((c) => c.id === action.payload);
      const conversation = state.conversations[index];
      state.conversations.splice(index, 1);
      state.conversations.unshift(conversation);
    },
    setSelectedConversation: (state, action: PayloadAction<number>) => {
      state.conversationId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversationsThunk.fulfilled, (state, action) => {
        state.conversations = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchConversationsThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchConversationsThunk.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { addConversation, updateConversation, setSelectedConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
