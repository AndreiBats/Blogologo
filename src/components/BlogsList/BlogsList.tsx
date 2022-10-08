import { useEffect } from "react";
import { BlogsItem, Spinner } from "../index";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { StyledBlogsList } from "./styles";
import { Link } from "react-router-dom";
import { fetchBlogs } from "app/features";
import { getBlogs } from "app/selectors";

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
    <StyledBlogsList>
      {blogs.map((blog) => {
        return (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <BlogsItem blog={blog} />
          </Link>
        );
      })}
    </StyledBlogsList>
  );
};
