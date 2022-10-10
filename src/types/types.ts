export interface IArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  launches: ILauncher[];
  events: IEvent[];
}

export interface IBlog {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  launches: ILauncher[];
  events: IEvent[];
}

interface ILauncher {
  id: string;
  provider: string;
}

interface IEvent {
  id: string;
  provider: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface IFavorites {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  launches: ILauncher[];
  events: IEvent[];
}

export interface ISortedList {
  _limit: string;
  _start: number;
  _sort: string;
}
