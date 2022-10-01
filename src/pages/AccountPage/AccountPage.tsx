import React from "react";
import { useAppSelector } from "../../app/hooks";
import { getUserInfo } from "../../app/selectors/userSelectors";
import { Email, RegistrationDate, StyledAccountPage } from "./styles";

export const AccountPage = () => {
  const { email, creationTime } = useAppSelector(getUserInfo);

  return (
    <StyledAccountPage>
      <Email>Your Email: {email}</Email>
      <RegistrationDate>
        Your registration date: {new Date(creationTime).toLocaleDateString()}
      </RegistrationDate>
    </StyledAccountPage>
  );
};
