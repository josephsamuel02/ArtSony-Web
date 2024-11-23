/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Timeout set to 40 seconds (40000 milliseconds)
axios.defaults.timeout = 140000; //2m 2s

export const GetMyProfile = createAsyncThunk("my_profile", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("ASY_A_Token");
    const response = await axios.get(
      `${import.meta.env.VITE_ARTSONY_TEST_API}/users/my_profile`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(rejectWithValue);

    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue("An unexpected error occurred");
    }
  }
});

export const UpdateUserProfile = createAsyncThunk(
  "update_user",
  async (data: any, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ASY_A_Token");
      const response = await axios.put(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/users/update_user`,
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      return response.data;
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

export const GetProfileById = createAsyncThunk(
  "artist_profile",
  async (userId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/users/artist_profile/${userId}`
      );

      return response.data;
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
  my_profile: {},
  artist_profile: {},
  data: {},
  status: "idle",
  error: null,
};

export const User: any = createSlice({
  name: "artwork",
  initialState: initialState,
  reducers: {
    clearUserData: (state) => {
      state.my_profile = {};
      state.artist_profile = {};
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(GetMyProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetMyProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.my_profile = action.payload;
      })
      .addCase(GetMyProfile.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(UpdateUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(UpdateUserProfile.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetProfileById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetProfileById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artist_profile = action.payload;
      })
      .addCase(GetProfileById.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearUserData } = User.actions;

export default User.reducer;
