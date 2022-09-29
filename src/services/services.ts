import axios from "axios";
import { IArticle, IBlog } from "../types";

enum Endpoint {
  ARTICLES = "articles",
  ARTICLES_COUNT = "articles/count",
  ARTICLES_LIMIT = "articles?_limit=12",
  ARTICLES_ID = "articles/",
  BLOGS = "blogs",
  BLOGS_COUNT = "blogs/count",
  BLOGS_LIMIT = "blogs?_limit=12",
  BLOGS_ID = "blogs/",
}

class SpaceFlyAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getArticles() {
    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES_LIMIT);

    return data;
  }

  public async getBlogs() {
    const { data } = await this.API.get<IArticle[]>(Endpoint.BLOGS_LIMIT);

    return data;
  }

  public async getArticleDetailByID(id: any) {
    const { data } = await this.API.get<IArticle>(`${Endpoint.ARTICLES_ID}${id}`);

    return data;
  }

  public async getBlogDetailByID(id: number) {
    const { data } = await this.API.get<IBlog>(`${Endpoint.BLOGS_ID}${id}`);

    return data;
  }

  public async getArticlesByRecommendations(word: string) {
    const { data } = await this.API.get<IArticle>(`${Endpoint.ARTICLES}${word}`);

    return data;
  }
}

export const spaceFlyAPI = new SpaceFlyAPI();
