import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { getUserInfo } from "app/selectors/userSelectors";
import { ROUTE } from "routes";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SING_IN} />;
};
