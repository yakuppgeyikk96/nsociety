
import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import AppWrapper from '../components/app-wrapper';
import RouterTemplate from '../components/router-template';
import { AlertProvider } from '../context/alertContext';

const App = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      }
    }
  });

  return (
    <AlertProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          <RouterTemplate />
        </AppWrapper>
      </ThemeProvider>
    </AlertProvider >
  )
}

export default App