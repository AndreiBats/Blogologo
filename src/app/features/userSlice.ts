import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { FireBaseErrorCode, getFireBaseMessage, FireBaseError } from "utils";

interface IUserState {
  email: string;
  isPendingAuth: boolean;
  error: null | FireBaseError;
  isAuth: boolean;
  creationTime: string;
  theme: "light" | "dark";
}

const initialState: IUserState = {
  email: "",
  isPendingAuth: false,
  error: null,
  isAuth: false,
  creationTime: "",
  theme: "light",
};

export const fetchSignInUser = createAsyncThunk<
  { creationTime: string; userEmail: string },
  { email: string; password: string },
  { rejectValue: FireBaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const creationTime = userCredential.user.metadata.creationTime as string;
    const userEmail = userCredential.user.email as string;

    return { creationTime, userEmail };
  } catch (error) {
    const fireBaseError = error as { code: FireBaseErrorCode };

    return rejectWithValue(getFireBaseMessage(fireBaseError.code));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme(state, { payload }: PayloadAction<"light" | "dark">) {
      state.theme = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.isAuth = true;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });
  },
});

export default userSlice.reducer;

export const { changeTheme } = userSlice.actions;
