import axios from "axios";
import { IArticle, IBlog } from "types";
import { ISearchList, ISortedList } from "types/types";

enum Endpoint {
  ARTICLES = "articles",
  BLOGS = "blogs",
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

  public async getArticlesByPage(sortedValues: ISortedList) {
    const params = {
      ...sortedValues,
    };

    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getBlogsByPage(sortedValues: ISortedList) {
    const params = {
      ...sortedValues,
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

  public async getSearchArticles(sortedValues: ISearchList) {
    const params = {
      ...sortedValues,
    };

    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getBlogs() {
    const params = {
      _limit: 12,
    };

    const { data } = await this.API.get<IBlog[]>(Endpoint.BLOGS, { params });

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
    const params = {
      _title_contains: keyWord,
    };

    const { data } = await this.API.get<IArticle>(Endpoint.ARTICLES, { params });

    return data;
  }

  public async getBlogsByKeyWord(keyWord: string) {
    const params = {
      _title_contains: keyWord,
    };

    const { data } = await this.API.get<IBlog>(Endpoint.BLOGS, { params });

    return data;
  }

  public async getArticlesBySearch(word: string) {
    const params = {
      _limit: 12,
      _title_contains: word,
    };

    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES, { params });

    return data;
  }
}

export const spaceFlyAPI = new SpaceFlyAPI();
