import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';

import { theme } from './theme';

import { Home } from './pages/Home';
import { Hotel } from './pages/Hotel';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Home path="/" />
        <Hotel path="/hotel/:hotelId/:hotelSlug" />
      </Router>
    </ThemeProvider>
  );
};

export default App;
