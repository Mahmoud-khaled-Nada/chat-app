import axiosClient from "./config";
import {
  ConversationDetails,
  ConversationsDetails,
  CreateConversationParams,
  LoginParams,
  MessageParams,
  MessagesResponse,
  RegisterParams,
} from "../types";

export const postRegister = (params: RegisterParams) => axiosClient.post("/users/register", params);
export const postLogin = (params: LoginParams) => axiosClient.post("/auth/login", params);

export const getAuthUser = (config = {}) => axiosClient.get("/users/profile", config);

export const postUpdateUserProfile = (params: FormData) =>
  axiosClient.post("/users/profile/update", params, { headers: { "Content-Type": "multipart/form-data" } });

export const postCreateConversation = (params: CreateConversationParams) =>
  axiosClient.post("/conversations", params);

export const getConversations = () => axiosClient.get<ConversationsDetails[]>("/conversations");

export const getConversationById = (id: number) =>
  axiosClient.get<ConversationDetails>(`/conversations/${id}`);

export const getMessagesById = (conversationId: number) =>
  axiosClient.get<MessagesResponse>(`messages/${conversationId}`);

export const postMessage = (params: FormData) => axiosClient.post("messages", params);
