import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "./components";
import { ContentPage, HomePage, NotFoundPage, SearchPage, SignInPage, SignUpPage } from "./pages";

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
