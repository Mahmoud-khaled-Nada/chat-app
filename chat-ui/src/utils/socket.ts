import { io } from "socket.io-client";
import { user_token } from "./api/config";

export const socket = io("http://localhost:5000", {
  auth: {
    access_token: user_token(),
  },
});
