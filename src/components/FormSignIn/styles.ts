import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui";

const StyledFormSignUp = styled.div`
  background-color: ${Color.White};
  border-radius: 16px;
  margin: 0 auto;
  margin-bottom: 152px;
  padding: 40px;
  width: 624px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EmailInput = styled.input`
  border: 1px solid ${Color.Light};
  border-radius: 4px;
  color: ${Color.Medium};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 40px;
  padding: 18px;
`;

const PasswordInput = styled.input`
  border: 1px solid ${Color.Light};
  border-radius: 4px;
  color: ${Color.Medium};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;
  padding: 18px;
`;

const Button = styled.button`
  background: ${Color.Primary};
  border: none;
  border-radius: 4px;
  color: ${Color.White};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 24px;
  padding: 16px;
`;

const Question = styled.p`
  color: ${Color.Secondary};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 48px;
`;

const Title = styled.h3`
  color: ${Color.Secondary};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
`;

const SignUp = styled(Link)`
  color: ${Color.Primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const Auth = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Light};
`;

const Message = styled.p`
  color: ${Color.Red};
  margin-bottom: 26px;
`;

const ErrorMessage = styled.p``;

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
};
