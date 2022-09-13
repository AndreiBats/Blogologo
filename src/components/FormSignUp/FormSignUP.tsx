import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "../../routes";
import { Input } from "../Input/Input";

import {
  Form,
  StyledFormSignUp,
  Button,
  Question,
  Title,
  SignIn,
  Auth,
  Message,
} from "./styles";

type SignUpValues = {
  email: string;
  password: string;
};

export const FormSignUp = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>();

  const onSubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {
    console.log(email);
    console.log(password);
    reset();
  };

  return (
    <StyledFormSignUp>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title> Email</Title>
        <Input
          control={control}
          type="text"
          placeholder="Your email"
          name="email"
          rules={{
            required: "Email is required",
            pattern:
              /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
          }}
        />
        {errors.email && <Message>{errors.email.message}</Message>}
        <Title>Password</Title>
        <Input
          control={control}
          type="password"
          placeholder="Your password"
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have 6 symbols",
            },
          }}
        />
        {errors.password && <Message>{errors.password.message}</Message>}
        <Question>Forgot password?</Question>
        <Button type="submit">Sign Up</Button>
        <Auth>
          Already have an account?{" "}
          <SignIn to={`/${ROUTE.SING_IN}`}>Sign In</SignIn>
        </Auth>
      </Form>
    </StyledFormSignUp>
  );
};
