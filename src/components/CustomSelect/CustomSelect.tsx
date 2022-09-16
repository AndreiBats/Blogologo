import Select from "react-select";
import { CustomStyles } from "./styled";

export const CustomSelect = () => {
  const options = [
    { value: "", label: "Title (A-Z)" },
    { value: "", label: "Title (Z-A)" },
  ];

  return <Select options={options} styles={CustomStyles} />;
};
