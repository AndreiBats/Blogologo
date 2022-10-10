import { resetPassword } from "app/features/userSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors";
import { Input, Spinner } from "components";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { Auth, Button, ErrorMessage, Form, Message, SignUp, StyledReset, Title } from "./styles";

type SignInValues = {
  userEmail: string;
};

const validateRules = {
  email: {
    required: "Email is required !",
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Please enter a valid email",
    },
  },
};

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const ResetPassword = ({ toggleModal }: IProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInValues>({
    defaultValues: { userEmail: "" },
  });

  const onSubmit: SubmitHandler<SignInValues> = (userEmail) => {
    dispatch(resetPassword(userEmail))
      .then(() => {
        toggleModal(true);
        navigate("/");
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <StyledReset>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title> Email</Title>
        <Controller
          control={control}
          name="userEmail"
          rules={validateRules.email}
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Your email" type="text" />
          )}
        />
        {errors.userEmail && <Message>{errors.userEmail.message}</Message>}

        <Button type="submit">
          Reset Password
          {isPendingAuth && <Spinner />}
        </Button>

        <Auth>
          Don't have an account? <SignUp to={`/${ROUTE.SIGN_UP}`}>Sign Up</SignUp>
        </Auth>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </StyledReset>
  );
};
