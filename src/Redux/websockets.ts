/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import socket from "../utils/socket";

export const getAllMessages = createAsyncThunk(
  "get_all_chat_messages",
  async (_, { rejectWithValue }) => {
    try {
      const userId = localStorage.getItem("artsoney_user_id");
      let data = "";
      new Promise((resolve) => {
        socket.emit("get_all_user_messages", { userId });

        socket.on("get_all_user_messages", (response: any) => {
          // console.log("Received response:", response);

          if (response) {
            resolve(response);
            data = response;
          }
          data = response;
        });

        // Timeout handling
        // setTimeout(() => {
        //   reject(rejectWithValue("Request timed out"));
        // }, 5000);
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
