import { FormSignUp } from "../../components";
import { ROUTE } from "../../routes";
import { Back, StyledSignUpPage, Title } from "./styles";

export const SignUpPage = () => {
  return (
    <StyledSignUpPage>
      <Back to={ROUTE.HOME}>Back to home</Back>
      <Title>Sign Up</Title>
      <FormSignUp />
    </StyledSignUpPage>
  );
};
