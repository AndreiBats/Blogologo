import { ChangeEvent } from "react";
import { StyledSearch, Input } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ value, onChange }: IProps) => {
  return (
    <StyledSearch>
      <Input value={value} onChange={onChange} type="text" placeholder="search..." />
    </StyledSearch>
  );
};
