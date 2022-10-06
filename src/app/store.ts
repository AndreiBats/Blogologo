import { configureStore, combineReducers } from "@reduxjs/toolkit";
import articlesSearchSlice from "./features/articlesSearchSlice";
import storage from "redux-persist/es/storage";
import {
  articleReducer,
  blogReducer,
  articleDetailsReducer,
  blogDetailsReducer,
  favoritesDetailsReducer,
  userReducer,
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
  whitelist: ["favoritesDetails"],
};

const rootReducer = combineReducers({
  article: articleReducer,
  blog: blogReducer,
  articleDetails: articleDetailsReducer,
  blogDetails: blogDetailsReducer,
  favoritesDetails: favoritesDetailsReducer,
  user: userReducer,
  searchArticles: articlesSearchSlice,
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
