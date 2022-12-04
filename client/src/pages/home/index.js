import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../../utils/localStorageHelper";

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => {
        deleteItem("token")
        deleteItem("user")
        navigate('/auth/login')
      }}>Log out</button>
    </div>
  )
}

export default HomePage;