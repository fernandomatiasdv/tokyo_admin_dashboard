import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { NavBarProvider } from './contexts/NavBarContext.js'
import { theme } from './styles/theme.ts';
import NavigationBar from './layouts/NavigationBar.tsx';
import Router from './components/Routes.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <NavBarProvider>
          <NavigationBar>
            <Router />
          </NavigationBar>
        </NavBarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
