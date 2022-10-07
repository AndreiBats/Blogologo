import axios from "axios";
import { IArticle, IBlog } from "types";

enum Endpoint {
  ARTICLES = "articles",
  ARTICLES_COUNT = "articles/count",
  ARTICLES_SEARCH = "articles?title_contains=",
  BLOGS = "blogs",
  BLOGS_COUNT = "blogs/count",
  BLOGS_SEARCH = "blogs?title_contains=",
}

class SpaceFlyAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getArticles() {
    const params = {
      _limit: 12,
    };

    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES, { params });
    return data;
  }

  public async getArticlesByPage(page: number) {
    const params = {
      _start: page,
      _limit: 12,
    };

    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getBlogsByPage(page: number) {
    const params = {
      _start: page,
      _limit: 12,
    };

    const { data } = await this.API.get<IBlog[]>(Endpoint.BLOGS, { params });

    return data;
  }

  public async getSortedArticles(value: string) {
    const params = {
      _sort: value,
      _limit: 12,
    };

    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getBlogs() {
    const params = {
      _limit: 12,
    };

    const { data } = await this.API.get<IArticle[]>(Endpoint.BLOGS, { params });

    return data;
  }

  public async getSortedBlogs(value: string) {
    const params = {
      _sort: value,
      _limit: 12,
    };

    const { data } = await this.API.get<IBlog[]>(Endpoint.BLOGS, { params });

    return data;
  }

  public async getArticleDetailByID(id: any) {
    const { data } = await this.API.get<IArticle>(`${Endpoint.ARTICLES}/${id}`);

    return data;
  }

  public async getBlogDetailByID(id: number) {
    const { data } = await this.API.get<IBlog>(`${Endpoint.BLOGS}/${id}`);

    return data;
  }

  public async getArticlesByKeyWord(keyWord: string) {
    const { data } = await this.API.get<IArticle>(`${Endpoint.ARTICLES_SEARCH}${keyWord}`);

    return data;
  }

  public async getBlogsByKeyWord(keyWord: string) {
    const { data } = await this.API.get<IBlog>(`${Endpoint.BLOGS_SEARCH}${keyWord}`);

    return data;
  }

  public async getArticlesBySearch(word: string) {
    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES + `?title_contains=${word}`);

    return data;
  }
}

export const spaceFlyAPI = new SpaceFlyAPI();
