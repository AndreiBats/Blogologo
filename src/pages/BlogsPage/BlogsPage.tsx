import React from "react";
import { ArticlesBlogs } from "../../components/ArticlesBlogs/ArticlesBlogs";
import { BlogsList } from "../../components/BlogsList/BlogsList";
import { CustomSelect } from "../../components/CustomSelect/CustomSelect";
import { StyledBlogsList } from "./style";

export const BlogsPage = () => {
  return (
    <StyledBlogsList>
      <ArticlesBlogs />
      <CustomSelect />
      <BlogsList />
    </StyledBlogsList>
  );
};
