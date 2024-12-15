import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import postArtworkSlice from "./PostArtwork";
import FetchArtwork from "./FetchArtwork";
import Engagement from "./Engagement";
import ShopArtworks from "./ShopArtworks";
import User from "./User";
import FetchChatMessages from "./websockets";
import Cart from "./Cart";

const reducers = combineReducers({
  Auth: authSlice,
  User: User,
  FetchArtwork: FetchArtwork,
  ShopArtworks: ShopArtworks,
  Engagement: Engagement,
  PostArtwork: postArtworkSlice,
  FetchChatMessages: FetchChatMessages,
  Cart: Cart,
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // ignore specific paths in the state
        // ignoredPaths: ["postArtwork.draft.images"],
      },
    }),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store its_elf
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
