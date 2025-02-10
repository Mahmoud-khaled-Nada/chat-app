import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getConversations } from "../utils/api";
import { ConversationsDetails } from "../utils/types";
import { RootState } from ".";

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
    updateConversation: (state, action: PayloadAction<ConversationsDetails>) => {
      console.log("Inside updateConversation");
      const conversation = action.payload;
      const index = state.conversations.findIndex((c) => c.id === conversation.id);
      state.conversations[index] = conversation;
      state.conversations.splice(index, 1);
      state.conversations.unshift(conversation);
    },
    setSelectedConversation: (state, action: PayloadAction<number>) => {
      state.conversationId = action.payload;
    },
    clearConversations: (state) => {
      state.conversations = [];
      state.conversationId = null;
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

const selectConversations = (state: RootState) => state.conversation.conversations;
const selectConversationId = (state: RootState, id: number) => id;

export const selectConversationById = createSelector(
  [selectConversations, selectConversationId],
  (conversations, conversationId) => conversations.find((c) => c.id === conversationId)
);

export const { addConversation, updateConversation, setSelectedConversation, clearConversations } = conversationSlice.actions;
export default conversationSlice.reducer;
