import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FireBaseErrorCode, getFireBaseMessage, FireBaseError } from "utils";

interface IUserState {
  email: string;
  isPendingAuth: boolean;
  error: null | FireBaseError;
  isAuth: boolean;
  creationTime: string;
  theme: "light" | "dark";
  name: string;
}

const initialState: IUserState = {
  email: "",
  isPendingAuth: false,
  error: null,
  isAuth: false,
  creationTime: "",
  theme: "light",
  name: "",
};

export const fetchSignUpUser = createAsyncThunk<
  { creationTime: string; userEmail: string },
  { email: string; password: string },
  { rejectValue: FireBaseError }
>("user/fetchSignUpUser", async ({ email, password }, { rejectWithValue }) => {
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

export const fetchSignInUser = createAsyncThunk<
  { signInEmail: string; userSignInName: string },
  { userEmailSignIn: string; userPasswordSignIn: string; userSignInName: string },
  { rejectValue: FireBaseError }
>(
  "user/fetchSignInUser",
  async ({ userEmailSignIn, userPasswordSignIn, userSignInName }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmailSignIn,
        userPasswordSignIn,
      );
      const signInEmail = userCredential.user.email as string;

      return { signInEmail, userSignInName };
    } catch (error) {
      const fireBaseError = error as { code: FireBaseErrorCode };

      return rejectWithValue(getFireBaseMessage(fireBaseError.code));
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme(state, { payload }: PayloadAction<"light" | "dark">) {
      state.theme = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.isAuth = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.isAuth = true;
      state.error = null;
      state.email = payload.signInEmail;
      state.name = payload.userSignInName;
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
