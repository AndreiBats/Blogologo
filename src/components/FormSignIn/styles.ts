import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledFormSignUp = styled.div`
  max-width: 624px;
  margin: 0 auto 152px;
  padding: 40px;
  border-radius: 16px;
  background-color: ${Color.White};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EmailInput = styled.input`
  margin-bottom: 40px;
  padding: 18px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: 1px solid ${Color.Light};
  color: ${Color.Medium};
`;

const PasswordInput = styled.input`
  margin-bottom: 16px;
  padding: 18px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: 1px solid ${Color.Light};
  color: ${Color.Medium};
`;

const Button = styled.button`
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  background: ${Color.Primary};
  color: ${Color.White};
`;

const Question = styled.p`
  margin-bottom: 48px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${Color.Secondary};
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${Color.Secondary};
`;

const SignUp = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Primary};
`;

const Auth = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Light};
`;

const Message = styled.p`
  margin-bottom: 26px;
  color: ${Color.Red};
`;

const ErrorMessage = styled.p``;

const ResetPassword = styled.h3`
  margin-bottom: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Light};
`;

const Reset = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Primary};
`;

export {
  StyledFormSignUp,
  Form,
  EmailInput,
  PasswordInput,
  Button,
  Question,
  Title,
  SignUp,
  Auth,
  Message,
  ErrorMessage,
  Reset,
  ResetPassword,
};
