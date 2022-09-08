import { ROUTE } from "../../routes";
import { FormSignIn } from "../FormSignIn/FormSignIn";
import { StyledSignIn, Back, Title } from "./styles";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <Back to={ROUTE.HOME}>Back to home</Back>
      <Title>Sign In</Title>
      <FormSignIn />
    </StyledSignIn>
  );
};
