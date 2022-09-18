import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input, Spinner } from "../index";
import { ROUTE } from "../../routes";
import {
  Form,
  StyledFormSignUp,
  Button,
  Question,
  Title,
  SignUp,
  Auth,
  Message,
  ErrorMessage,
} from "./styles";
import { useState } from "react";
import { getFireBaseMessage } from "../../utils/firebaseErrors";
import { useNavigate } from "react-router-dom";

type SignInValues = {
  email: string;
  password: string;
};

export const FormSignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInValues>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<SignInValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(getFireBaseMessage(err.code));
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <StyledFormSignUp>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title> Email</Title>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
          }}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Your email" type="text" />
          )}
        />
        {errors.email && <Message>{errors.email.message}</Message>}
        <Title>Password</Title>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have 6 symbols",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Your password" type="password" />
          )}
        />
        {errors.password && <Message>{errors.password.message}</Message>}
        <Question>Forgot password?</Question>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">
          Sign In
          {isLoading && <Spinner />}
        </Button>
        <Auth>
          Don't have an account? <SignUp to={`/${ROUTE.SIGN_UP}`}>Sign Up</SignUp>
        </Auth>
      </Form>
    </StyledFormSignUp>
  );
};
