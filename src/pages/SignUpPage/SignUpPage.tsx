import { useState } from "react";
import { FormSignUp, Modal } from "../../components";
import { ROUTE } from "../../routes";
import { Back, StyledSignUpPage, Title } from "./styles";

export const SignUpPage = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <StyledSignUpPage>
      <Back to={ROUTE.HOME}>Back to home</Back>
      <Title>Sign Up</Title>
      <FormSignUp toggleModal={toggleModal} />
      {isOpen && <Modal toggleModal={toggleModal} />}
    </StyledSignUpPage>
  );
};
