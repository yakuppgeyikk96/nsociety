import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../../utils/localStorageHelper";
import Box from "@mui/material/Box";
import Topbar from "../topbar";
import SideBar from "../sidebar";
import DrawerHeader from "../styled-components/DrawerHeader";

const ProtectedLayout = () => {
  const token = getItem('token')

  if (!token) {
    return <Navigate to="/auth/login" />
  }

  return (
    <Box>
      <Topbar />
      <Box sx={{ display: 'flex' }}>
        <SideBar
          open
        />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <DrawerHeader />
          <Box>
            <Outlet />
          </Box>
        </Box>

        {/* This will be trends section of the page */}
        <Box component="div" sx={{
          width: '25rem',
          background: 'gray'
        }}>
          TRENDS
        </Box>
      </Box>
    </Box>
  )
}

export default ProtectedLayout;