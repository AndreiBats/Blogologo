import axios from "axios";
import { IArticle } from "../types";

enum Endpoint {
  ARTICLES_COUNT = "articles/count",
  ARTICLES = "articles",
  ARTICLES_ID = "articles/{id}",
  BLOGS_COUNT = "blogs/count",
  BLOGS = "blogs",
  BLOGS_ID = "blogs/{id}",
}

class SpaceFlyAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getArticles() {
    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES);

    return data;
  }

  public async getBlogs() {
    const { data } = await this.API.get<IArticle[]>(Endpoint.BLOGS);

    return data;
  }
}

export const spaceFlyAPI = new SpaceFlyAPI();
