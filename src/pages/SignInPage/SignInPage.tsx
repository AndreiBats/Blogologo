import { FormSignIn } from "../../components/FormSignIn/FormSignIn";
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
