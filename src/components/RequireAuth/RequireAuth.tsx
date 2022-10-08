import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { ROUTE } from "routes";
import { getUserInfo } from "app/selectors";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SING_IN} />;
};
