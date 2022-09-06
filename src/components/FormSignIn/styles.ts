import styled from "styled-components";
import { Color } from "../../ui";

const StyledFormSignIn = styled.div`
  width: 624px;
  background-color: ${Color.White};
  border-radius: 16px;
  padding: 40px;
  margin: 0 auto;
  margin-bottom: 152px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EmailInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Medium};
  border: 1px solid ${Color.Light};
  border-radius: 4px;
  margin-bottom: 40px;
  padding: 18px;
`;

const PasswordInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Medium};
  border: 1px solid ${Color.Light};
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 18px;
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${Color.White};
  background: ${Color.Primary};
  border-radius: 4px;
  border: none;
  margin-bottom: 24px;
  padding: 16px;
`;

const Question = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Secondary};
  margin-bottom: 48px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Secondary};
  margin-bottom: 8px;
`;

export {
  StyledFormSignIn,
  Form,
  EmailInput,
  PasswordInput,
  Button,
  Question,
  Title,
};
