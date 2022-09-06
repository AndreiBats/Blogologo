import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

import {
  Form,
  StyledFormSignIn,
  EmailInput,
  PasswordInput,
  Button,
  Question,
  Title,
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
        <Button type="submit">Sign IN</Button>
        <p>
          Don’t have an account? <Link to={`/${ROUTE.SIGN_UP}`}>Sign Up</Link>
        </p>
      </Form>
    </StyledFormSignIn>
  );
};
