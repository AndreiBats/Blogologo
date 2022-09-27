import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input, Spinner } from "../index";
import { ROUTE } from "../../routes";
import {
  Form,
  StyledFormSignUp,
  Button,
  Question,
  Title,
  SignIn,
  Auth,
  Message,
  ErrorMessage,
} from "./styles";
import { useState } from "react";
import { getFireBaseMessage } from "../../utils/firebaseErrors";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUserInfo } from "../../app/selectors/userSelectors";
import { fetchSignInUser } from "../../app/features/userSlice";

type SignUpValues = {
  email: string;
  password: string;
};

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const FormSignUp = ({ toggleModal }: IProps) => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<SignUpValues> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo))
      .then(() => {
        toggleModal(true);
      })
      .finally(() => {
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

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">
          Sign Up
          {isPendingAuth && <Spinner />}
        </Button>
        <Auth>
          Already have an account? <SignIn to={`/${ROUTE.SING_IN}`}>Sign In</SignIn>
        </Auth>
      </Form>
    </StyledFormSignUp>
  );
};
