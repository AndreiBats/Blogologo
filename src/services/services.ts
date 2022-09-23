import axios from "axios";
import { IArticle, IBlog } from "../types";

enum Endpoint {
  ARTICLES_COUNT = "articles/count",
  ARTICLES = "articles?_limit=12",
  ARTICLES_ID = "articles/",
  BLOGS_COUNT = "blogs/count",
  BLOGS = "blogs?_limit=12",
  BLOGS_ID = "blogs/",
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

  public async getArticleDetailByID(id: any) {
    const { data } = await this.API.get<IArticle>(`articles/${id}`);

    return data;
  }

  public async getBlogDetailByID(id: number) {
    const { data } = await this.API.get<IBlog>(`blog/${id}`);

    return data;
  }
}

export const spaceFlyAPI = new SpaceFlyAPI();
