import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input, Spinner } from "../index";
import { ROUTE } from "routes";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "app/selectors";
import { fetchSignInUser } from "app/features";
import {
  Form,
  StyledFormSignUp,
  Button,
  Title,
  SignUp,
  Auth,
  Message,
  ErrorMessage,
  ResetPassword,
  Reset,
} from "./styles";

type SignInValues = {
  userEmailSignIn: string;
  userPasswordSignIn: string;
  userSignInName: string;
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
    required: "Email is required !",
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Please enter a valid email",
    },
  },
};

export const FormSignIn = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInValues>({
    defaultValues: { userEmailSignIn: "", userPasswordSignIn: "" },
  });

  const onSubmit: SubmitHandler<SignInValues> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo))
      .then(() => {
        navigate("/");
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
          name="userEmailSignIn"
          rules={validateRules.email}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Your email" type="text" />
          )}
        />
        {errors.userEmailSignIn && <Message>{errors.userEmailSignIn.message}</Message>}
        <Title>Password</Title>
        <Controller
          control={control}
          name="userPasswordSignIn"
          rules={validateRules.password}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Your password" type="password" />
          )}
        />
        {errors.userPasswordSignIn && <Message>{errors.userPasswordSignIn.message}</Message>}

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">
          Sign In
          {isPendingAuth && <Spinner />}
        </Button>
        <ResetPassword>
          Forgot your password? <Reset to={`/${ROUTE.RESET}`}>Reset Password</Reset>
        </ResetPassword>

        <Auth>
          Don't have an account? <SignUp to={`/${ROUTE.SIGN_UP}`}>Sign Up</SignUp>
        </Auth>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </StyledFormSignUp>
  );
};
