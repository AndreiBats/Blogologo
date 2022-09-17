import { Controller } from "react-hook-form";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  control: any;
  name: string;
  rules: {
    required: string;
    pattern?: any;
    minLength?: {
      value: number;
      message: string;
    };
  };
}

export const Input = ({ placeholder, type, control, name, rules }: IProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => <StyledInput type={type} placeholder={placeholder} {...field} />}
    />
  );
};
