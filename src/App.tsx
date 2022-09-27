import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequireAuth } from "./components";
import {
  ArticleContentPage,
  BlogContentPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
} from "./pages";
import { SearchPage, SignInPage, SignUpPage } from "./pages";

import { ROUTE } from "./routes";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route element={<RequireAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        </Route>
        <Route path={ROUTE.SING_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.ARTICLE} element={<ArticleContentPage />} />
        <Route path={ROUTE.BLOG} element={<BlogContentPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
