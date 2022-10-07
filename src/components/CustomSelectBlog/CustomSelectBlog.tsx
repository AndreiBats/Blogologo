import Select, { SingleValue } from "react-select";
import { fetchSortedBlogs } from "app/features/blogSlice";
import { useAppDispatch } from "app/hooks";
import { IOption } from "types";
import { CustomStyles } from "./styles";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
];

export const CustomSelectBlog = () => {
  const dispatch = useAppDispatch();

  const handleSort = (option: SingleValue<IOption>): void => {
    if (option) dispatch(fetchSortedBlogs(option.value));
  };

  return (
    <Select options={options} styles={CustomStyles} onChange={handleSort} isSearchable={false} />
  );
};
