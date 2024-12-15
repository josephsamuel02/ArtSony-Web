/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Timeout set to 40 seconds (40000 milliseconds)
axios.defaults.timeout = 140000; //2m 2s

export const GetUserCart = createAsyncThunk(
  "get_cart",
  async (data: object, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ASY_A_Token");

      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/cart/my_cart`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue(error.response.data));

      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export const AddToCart = createAsyncThunk(
  "add_to_cart",
  async (data: any, { rejectWithValue }) => {
    try {
      console.log(data);
      const token = localStorage.getItem("ASY_A_Token");
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/cart/add`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //   console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue(error.response));

      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export const UpdateCartItem = createAsyncThunk(
  "update_cart_items",
  async (data: object, { rejectWithValue }) => {
    const token = localStorage.getItem("ASY_A_Token");

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/cart/update`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue(error.response.data));

      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export const DeleteCartItem = createAsyncThunk(
  "delete_cart_item",
  async (data: object, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("ASY_A_Token");

      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/cart/delete`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error(rejectWithValue(error.response.data));

      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

const initialState = {
  cart: {},
  data: {},
  status: "idle",
  error: null,
};

export const Cart: any = createSlice({
  name: "artwork",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUserCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetUserCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(GetUserCart.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(AddToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AddToCart.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(UpdateCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(UpdateCartItem.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(DeleteCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(DeleteCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(DeleteCartItem.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default Cart.reducer;
