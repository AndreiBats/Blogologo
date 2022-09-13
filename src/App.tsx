import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate/MainTemplate";
import { ContentPage } from "./pages/ContentPage/ContentPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";

import { ROUTE } from "./routes";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.SING_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.CONTENT} element={<ContentPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
