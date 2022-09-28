import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input, Spinner } from "../index";
import { ROUTE } from "../../routes";
import {
  Form,
  StyledFormSignUp,
  Button,
  Title,
  SignIn,
  Auth,
  Message,
  ErrorMessage,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUserInfo } from "../../app/selectors/userSelectors";
import { fetchSignInUser } from "../../app/features/userSlice";

type SignUpValues = {
  email: string;
  password: string;
  confirmPassword: string;
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
  confirmPassword: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must have 6 symbols",
    },
  },
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

        <Title>Confirm Password</Title>
        <Controller
          control={control}
          name="confirmPassword"
          rules={validateRules.confirmPassword}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              placeholder="Confirm Your password"
              type="password"
            />
          )}
        />
        {errors.confirmPassword && <Message>{errors.confirmPassword.message}</Message>}

        <Button type="submit">
          Sign Up
          {isPendingAuth && <Spinner />}
        </Button>
        <Auth>
          Already have an account? <SignIn to={`/${ROUTE.SING_IN}`}>Sign In</SignIn>
        </Auth>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </StyledFormSignUp>
  );
};
