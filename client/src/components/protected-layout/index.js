import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../../utils/localStorageHelper";

const ProtectedLayout = () => {
  const token = getItem('token')

  if (!token) {
    return <Navigate to="/auth/login" />
  }

  return <Outlet />
}

export default ProtectedLayout;