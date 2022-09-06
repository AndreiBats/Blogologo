import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { FormSignIn } from "../FormSignIn/FormSignIn";
import { StyledSignIn, Back, Title } from "./styles";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <Back>
        <Link to={ROUTE.HOME}>Back to home</Link>
      </Back>
      <Title>Sign In</Title>
      <FormSignIn />
    </StyledSignIn>
  );
};
