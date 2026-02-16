import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/Layout';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#7c3aed' },
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
