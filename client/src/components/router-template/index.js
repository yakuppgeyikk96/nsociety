import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import AuthContainer from "../auth-container";
import ProtectedLayout from "../protected-layout";

const RouterTemplate = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthContainer />}>
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path="/" element={<ProtectedLayout />}>
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default RouterTemplate;