import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'common/theme';
import App from 'components/App';
import './index.css';

if (import.meta.env.DEV) {
  // Note: This does not currently work with react-router-dom Routes, so we can only test after initial page load.
  // See: https://github.com/dequelabs/axe-core-npm/issues/92
  import('@axe-core/react').then(({ default: axe }) => {
    axe(React, ReactDOM, 1e3);
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
