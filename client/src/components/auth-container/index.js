import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../../utils/localStorageHelper";

const AuthContainer = () => {
  const token = getItem("token")

  if (token) {
    return <Navigate to="/home" />
  }

  return <Outlet />
}

export default AuthContainer;