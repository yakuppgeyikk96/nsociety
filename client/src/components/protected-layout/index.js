import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../../utils/localStorageHelper";
import Box from "@mui/material/Box";
import Topbar from "../topbar";
import SideBar from "../sidebar";
import DrawerHeader from "../styled-components/DrawerHeader";

const ProtectedLayout = () => {
  const token = getItem('token')
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!token) {
    return <Navigate to="/auth/login" />
  }

  return (
    <Box>
      <Topbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Box sx={{ display: 'flex' }}>
        <SideBar
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default ProtectedLayout;