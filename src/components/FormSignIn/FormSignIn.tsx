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

const validateRules = {
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must have 6 symbols",
    },
  },
  email: {
    requared: "Email is requared !",
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Please enter a valid email",
    },
  },
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
  } = useForm<SignInValues>();

  const onSubmit: SubmitHandler<SignInValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(getFireBaseMessage(err.code));
      })
      .finally(() => {
        setIsLoading(false);
      });
    reset();
  };

  return (
    <StyledFormSignUp>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title> Email</Title>
        <Controller
          control={control}
          name="email"
          rules={validateRules.email}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Your email" type="text" />
          )}
        />
        {errors.email && <Message>{errors.email.message}</Message>}
        <Title>Password</Title>
        <Controller
          control={control}
          name="password"
          rules={validateRules.password}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Your password" type="password" />
          )}
        />
        {errors.password && <Message>{errors.password.message}</Message>}

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
