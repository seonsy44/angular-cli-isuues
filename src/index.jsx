import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.js';
import { IssuesProvider } from './contexts/issuesContext.js';
import App from './App';
import colors from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={colors}>
      <IssuesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IssuesProvider>
    </ThemeProvider>
  </>
);
