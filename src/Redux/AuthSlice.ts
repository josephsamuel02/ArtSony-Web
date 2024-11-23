/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UserSignup = createAsyncThunk(
  "register-user",
  async (data: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/auth/signup`,
        data
      );

      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue);

      return error.response.data;
    }
  }
);

export const LoginUser = createAsyncThunk(
  "login-user",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/auth/login`,
        data
      );

      if (response.data.access_token) {
        localStorage.setItem("ASY_A_Token", response.data.access_token);
      }

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const Logout = createAsyncThunk(
  "logout-user",
  async (data: object, { rejectWithValue }) => {
    const token = localStorage.getItem("G_A_token");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/users/logout-user`,
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const SendCode = createAsyncThunk(
  "send-code",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/users/send-code`,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const VerifyPhone = createAsyncThunk(
  "verify-phone",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/users/verify-phone`,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const initialState = {
  user: {},
  status: "idle",
  error: null,
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearAuthData: (state) => {
      state.user = {};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(UserSignup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UserSignup.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(UserSignup.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(LoginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as any;
      });
  },
});

export const { clearAuthData } = authSlice.actions;
export default authSlice.reducer;
