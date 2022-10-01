import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

export interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

export const Input = ({ placeholder, type, onChange, value }: IProps) => {
  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} value={value} />;
};
