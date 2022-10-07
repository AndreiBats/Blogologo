import { configureStore, combineReducers } from "@reduxjs/toolkit";
import articlesSearchSlice from "./features/articlesSearchSlice";
import storage from "redux-persist/es/storage";
import {
  blogReducer,
  articleDetailsReducer,
  blogDetailsReducer,
  favoritesReducer,
  userReducer,
  articleReducer,
  favoritesBlogReducer,
} from "app/index";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoritesDetails", "user"],
};

const rootReducer = combineReducers({
  article: articleReducer,
  blog: blogReducer,
  articleDetails: articleDetailsReducer,
  blogDetails: blogDetailsReducer,
  favorites: favoritesReducer,
  user: userReducer,
  searchArticles: articlesSearchSlice,
  favoritesBlog: favoritesBlogReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
