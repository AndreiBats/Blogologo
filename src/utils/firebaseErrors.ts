export type FireBaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/wrong-password"
  | "auth/user-not-found";

export enum FireBaseError {
  EMAIL_ALREADY_IN_USE = "This email already in use",
  WRONG_PASSWORD = "Invalid password",
  USER_NOT_FOUND = "Incorrect email",
  UNKNOWN_ERROR = "unknown error",
}

const getFireBaseMessage = (code: FireBaseErrorCode): FireBaseError => {
  switch (code) {
    case "auth/email-already-in-use":
      return FireBaseError.EMAIL_ALREADY_IN_USE;
    case "auth/wrong-password":
      return FireBaseError.WRONG_PASSWORD;
    case "auth/user-not-found":
      return FireBaseError.USER_NOT_FOUND;
    default:
      return FireBaseError.UNKNOWN_ERROR;
  }
};

export { getFireBaseMessage };
