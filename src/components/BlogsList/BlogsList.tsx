import { useEffect } from "react";
import { fetchBlogs } from "../../app/feautures/blogSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getBlogs } from "../../app/selectors/blogSelectors";
import { ArticlesItem } from "../ArticlesItem/ArticlesItem";
import { Spinner } from "../Spinner/Spinner";
import { StyledArticlesList } from "./styles";

type InputValues = {
  title: string;
  imageUrl: number;
  publishedAt: string;
};

export const BlogsList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, blogs } = useAppSelector(getBlogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <StyledArticlesList>
      {blogs.map(({ title, imageUrl, publishedAt }: InputValues) => {
        return (
          <ArticlesItem
            title={title}
            imageUrl={imageUrl}
            publishedAt={publishedAt}
          />
        );
      })}
    </StyledArticlesList>
  );
};
