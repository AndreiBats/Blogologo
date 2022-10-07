import Select, { SingleValue } from "react-select";
import { fetchSortedArticles } from "app/features/articleSlice";
import { useAppDispatch } from "app/hooks";
import { IOption } from "types";
import { CustomStyles } from "./styled";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
];

export const CustomSelectArticle = () => {
  const dispatch = useAppDispatch();

  const handleSort = (option: SingleValue<IOption>): void => {
    if (option) dispatch(fetchSortedArticles(option.value));
  };

  return (
    <Select options={options} styles={CustomStyles} onChange={handleSort} isSearchable={false} />
  );
};
