import { ROUTE } from "../../routes";

import {
  Form,
  StyledFormSignIn,
  EmailInput,
  PasswordInput,
  Button,
  Question,
  Title,
  SignUp,
  Auth,
} from "./styles";

export const FormSignIn = () => {
  return (
    <StyledFormSignIn>
      <Form>
        <Title> Email</Title>
        <EmailInput type="email" placeholder="Your email" />
        <Title>Password</Title>
        <PasswordInput type="password" placeholder="Your password" />
        <Question>Forgot password?</Question>
        <Button type="submit">Sign In</Button>
        <Auth>
          Don’t have an account?{" "}
          <SignUp to={`/${ROUTE.SIGN_UP}`}>Sign Up</SignUp>
        </Auth>
      </Form>
    </StyledFormSignIn>
  );
};
