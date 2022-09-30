import { useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { fetchArticles } from "../../app/features/articleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getArticles } from "../../app/selectors/articleSelectors";
import { IOption } from "../../types";
import { CustomStyles } from "./styled";

const options: IOption[] = [
  { value: "?_sort=title", label: "Title" },
  { value: "?_sort=publishedAt", label: "Date" },
];

export const CustomSelect = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, articles } = useAppSelector(getArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleSort = (option: any) => {};

  return <Select options={options} styles={CustomStyles} onChange={handleSort} />;
};
