import { Box, Button, Paper, useTheme } from "@mui/material";
import React from "react";
import LoginForm from "../../components/login-form";
import { responsiveStyles, staticStyles } from "./styles";

const LoginPage = () => {
  const theme = useTheme();

  return (
    <Box sx={staticStyles.loginPage} component="div">
      <Box component="div" sx={responsiveStyles(theme).boxStyle}>
        <Paper style={staticStyles.loginPagePaper} elevation={2}>
          <LoginForm />
          <Box component="div" sx={responsiveStyles(theme).loginFormFooter}>
            <Box sx={{ textAlign: 'center' }}>
              <Button size="small" sx={{ textTransform: 'none' }}>Forgot Password?</Button>
            </Box>
            <Box component="div">
              <span>Don't you have an account?</span>
              <Button size="medium" sx={{ textTransform: 'none' }}>Sign up</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;