import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { theme } from './styles/theme.ts';
import NavigationBar from './layouts/NavigationBar.tsx';
import Router from './components/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <NavigationBar>
          <Router />
        </NavigationBar>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
