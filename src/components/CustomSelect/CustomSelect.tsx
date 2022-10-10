import Select, { SingleValue } from "react-select";
import { useAppDispatch } from "app/hooks";
import { IOption } from "types";
import { CustomStyles } from "./styles";
import { fetchSortedBlogs, fetchSortedArticles } from "app/features";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
  { value: "", label: "Reset" },
];

interface IProps {
  setValue: (value: string) => void;
}

export const CustomSelect = ({ setValue }: IProps) => {
  const dispatch = useAppDispatch();

  const handleSort = (option: SingleValue<IOption>): void => {
    if (option) dispatch(fetchSortedBlogs(option.value));
    if (option) dispatch(fetchSortedArticles(option.value));
    if (option) setValue(option.value);
  };

  return (
    <Select options={options} styles={CustomStyles} onChange={handleSort} isSearchable={false} />
  );
};
