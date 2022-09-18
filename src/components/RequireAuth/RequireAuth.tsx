import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { ROUTE } from "../../routes";

export const RequireAuth = () => {
  const isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SING_IN} />;
};
