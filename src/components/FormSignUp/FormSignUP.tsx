import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../index";
import { ROUTE } from "../../routes";
import { Form, StyledFormSignUp, Button, Question, Title, SignIn, Auth, Message } from "./styles";

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
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential);
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
        <Button type="submit">Sign Up</Button>
        <Auth>
          Already have an account? <SignIn to={`/${ROUTE.SING_IN}`}>Sign In</SignIn>
        </Auth>
      </Form>
    </StyledFormSignUp>
  );
};
