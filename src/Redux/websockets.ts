/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import socket from "../utils/socket";

export const getAllMessages = createAsyncThunk(
  "get_all_chat_messages",
  async (_, { rejectWithValue }) => {
    try {
      let data = [""];
      socket.on("connected", (response) => {
        console.log("Connected response:", response);

        if (response.status === 200) {
          console.log("Chat history:", response.chatHistory);
        } else {
          console.error("Connection error:", response.message);
        }
        data = response;
      });
      return data;
    } catch (error: any) {
      console.error(rejectWithValue);

      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

const initialState = {
  allMessages: {},
  data: {},
  status: "idle",
  error: null,
};

export const FetchChatMessages: any = createSlice({
  name: "artwork",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allMessages = action.payload;
      })
      .addCase(getAllMessages.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default FetchChatMessages.reducer;
