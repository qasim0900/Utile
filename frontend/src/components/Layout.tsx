import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="font-bold">
            Utile Service
          </Typography>
          {isAuthenticated ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
