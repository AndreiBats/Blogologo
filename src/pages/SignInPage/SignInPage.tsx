import { FormSignIn } from "components";
import { useState } from "react";
import { ROUTE } from "routes";
import { Back, StyledSignInPage, Title } from "./styles";

export const SignInPage = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <StyledSignInPage>
      <Back to={ROUTE.HOME}>Back to home</Back>
      <Title>Sign In</Title>
      <FormSignIn toggleModal={toggleModal} />
    </StyledSignInPage>
  );
};
