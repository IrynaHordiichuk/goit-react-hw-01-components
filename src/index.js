import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);