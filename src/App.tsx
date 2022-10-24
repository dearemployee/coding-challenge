import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView, ResultsView } from './views';

import './App.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F1733',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/search-results" element={<ResultsView />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
