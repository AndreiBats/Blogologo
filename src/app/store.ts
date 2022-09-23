import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import articleReducer from "./features/articleSlice";
import blogReducer from "./features/blogSlice";
import articleDetailsReducer from "./features/articleDetailsSlice";
import blogDetailsReducer from "./features/blogDetailsSlice";
import favoritesDetailsReducer from "./features/favoritesSlice";
import storage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  article: articleReducer,
  blog: blogReducer,
  articleDetails: articleDetailsReducer,
  blogDetails: blogDetailsReducer,
  favoritesDetails: favoritesDetailsReducer,
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
