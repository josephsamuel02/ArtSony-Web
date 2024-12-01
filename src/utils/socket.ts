import { io } from "socket.io-client";

const userId = localStorage.getItem("artsoney_user_id");

const socket = io(`${import.meta.env.VITE_ARTSONY_TEST_API}`, {
  autoConnect: false, // Automatically connect on load
  transports: ["websocket"], // Ensure it uses WebSocket
  query: {
    userId: userId,
  },
});

export default socket;
