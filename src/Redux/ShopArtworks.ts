/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Timeout set to 40 seconds (40000 milliseconds)
axios.defaults.timeout = 140000; //2m 2s

export const ShopsArtworks = createAsyncThunk(
  "shop_artworks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork_shop/shop_artworks`
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

export const TopShopsArtworks = createAsyncThunk(
  "top_shop_artworks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork_shop/top_shop_artworks`
      );

      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        console.error(rejectWithValue);

        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export const GetMyShopArtworks = createAsyncThunk(
  "my_shop_artwork",
  async (userId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork_shop/my_shop_artwork/${userId}`
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

export const getNewbiesShopArtwork = createAsyncThunk(
  "newbies_shop_artwork",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork_shop/newbies_shop_artwork`
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

export const ShopArtworkJustForYou = createAsyncThunk(
  "shop_artwork_for_you",
  async (userId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork_shop/shop_artwork_for_you/${userId}`
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

export const getShopArtworksByArtField = createAsyncThunk(
  "shop_artwork_by_field",
  async (artField: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork_shop/shop_artwork_by_field`,
        artField
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

export const ArtSearch = createAsyncThunk(
  "shop_search",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork_shop/shop_search`,
        data
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
  shop_artworks: {},
  top_shop_artworks: {},
  newbies_shop_artwork: {},
  my_shop_artwork: {},
  shop_artwork_for_you: {},
  shop_artwork_by_field: {},
  shop_search: {},
  data: {},
  status: "idle",
  error: null,
};

export const ShopArtworks: any = createSlice({
  name: "artwork",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(ShopsArtworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ShopsArtworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shop_artworks = action.payload;
      })
      .addCase(ShopsArtworks.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(TopShopsArtworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(TopShopsArtworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.top_shop_artworks = action.payload;
      })
      .addCase(TopShopsArtworks.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetMyShopArtworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetMyShopArtworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.my_shop_artwork = action.payload;
      })
      .addCase(GetMyShopArtworks.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(getNewbiesShopArtwork.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNewbiesShopArtwork.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newbies_shop_artwork = action.payload;
      })
      .addCase(getNewbiesShopArtwork.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(ShopArtworkJustForYou.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ShopArtworkJustForYou.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shop_artwork_for_you = action.payload;
      })
      .addCase(ShopArtworkJustForYou.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(getShopArtworksByArtField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getShopArtworksByArtField.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shop_artwork_by_field = action.payload;
      })
      .addCase(getShopArtworksByArtField.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default ShopArtworks.reducer;
