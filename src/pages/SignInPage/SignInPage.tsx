import { FormSignIn } from "../../components";
import { ROUTE } from "../../routes";
import { Back, StyledSignInPage, Title } from "./styles";

export const SignInPage = () => {
  return (
    <StyledSignInPage>
      <Back to={ROUTE.HOME}>Back to home</Back>
      <Title>Sign In</Title>
      <FormSignIn />
    </StyledSignInPage>
  );
};
