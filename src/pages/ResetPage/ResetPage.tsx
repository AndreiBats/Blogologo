import { ResetPassword } from "components";
import { useState } from "react";
import { ROUTE } from "routes";
import { Back, StyledResetPage, Title } from "./styles";

export const ResetPage = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <StyledResetPage>
      <Back to={ROUTE.HOME}>Back to home</Back>
      <Title>Reset Password</Title>
      <ResetPassword toggleModal={toggleModal} />
    </StyledResetPage>
  );
};
