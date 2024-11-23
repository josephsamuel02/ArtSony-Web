/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Timeout set to 40 seconds (40000 milliseconds)
axios.defaults.timeout = 140000; //2m 2s

export const Artworks = createAsyncThunk("get_artworks", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_ARTSONY_TEST_API}/artwork`);

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

export const GetMyArtworks = createAsyncThunk(
  "get_my_artworks",
  async (userId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/get_my_artworks/${userId}`
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

export const GetArtOfTheWeek = createAsyncThunk(
  "art_of_the_week",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/art_of_the_week`
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

export const TopArtwork = createAsyncThunk("top_art", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/top_art`
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

export const TrendingArtworks = createAsyncThunk(
  "trending_artwork",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/trending_artwork`
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
  "top_shops_artworks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/top_shops_artworks`
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

export const getArtworkByNewbies = createAsyncThunk(
  "newbies_artwork",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/newbies_artwork`
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

export const JustForYou = createAsyncThunk(
  "artwork_interests",
  async (userId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/artwork_interests/${userId}`
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

export const getArtworksByArtField = createAsyncThunk(
  "art_field",
  async (artField: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/art_field`,
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

export const ArtworkByFollowing = createAsyncThunk(
  "artwork_by_following",
  async (userId: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/artwork_by_following/${userId}`
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
  "artwork_search",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ARTSONY_TEST_API}/artwork/search`,
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
  artworks: {},
  my_artworks: {},
  get_my_shop_artworks: {},
  artwork_of_the_week: {},
  trending_artwork: {},
  artwork_just_for_you: {},
  artwork_field: {},
  top_artwork: {},
  top_shops_artworks: {},
  newbies_artworks: {},
  artwork_by_following: {},
  artwork_search: {},
  data: {},
  status: "idle",
  error: null,
};

export const FetchArtwork: any = createSlice({
  name: "artwork",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(Artworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(Artworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artworks = action.payload;
      })
      .addCase(Artworks.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetMyArtworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetMyArtworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.my_artworks = action.payload;
      })
      .addCase(GetMyArtworks.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetArtOfTheWeek.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetArtOfTheWeek.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artwork_of_the_week = action.payload;
      })
      .addCase(GetArtOfTheWeek.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(JustForYou.pending, (state) => {
        state.status = "loading";
      })
      .addCase(JustForYou.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artwork_just_for_you = action.payload;
      })
      .addCase(JustForYou.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(TopArtwork.pending, (state) => {
        state.status = "loading";
      })
      .addCase(TopArtwork.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.top_artwork = action.payload;
      })
      .addCase(TopArtwork.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(TrendingArtworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(TrendingArtworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trending_artwork = action.payload;
      })
      .addCase(TrendingArtworks.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(TopShopsArtworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(TopShopsArtworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.top_shops_artworks = action.payload;
      })
      .addCase(TopShopsArtworks.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(getArtworkByNewbies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArtworkByNewbies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newbies_artworks = action.payload;
      })
      .addCase(getArtworkByNewbies.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(ArtworkByFollowing.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ArtworkByFollowing.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artwork_by_following = action.payload;
      })
      .addCase(ArtworkByFollowing.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(getArtworksByArtField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArtworksByArtField.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artwork_field = action.payload;
      })
      .addCase(getArtworksByArtField.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(ArtSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ArtSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artwork_search = action.payload;
      })
      .addCase(ArtSearch.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default FetchArtwork.reducer;
