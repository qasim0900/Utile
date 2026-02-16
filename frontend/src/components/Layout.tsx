import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Badge, Grid, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { logout } from '../store/slices/authSlice';
import { ShoppingCart, Menu, Zap } from 'lucide-react';

const NavButton: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
  <Button component={Link} to={to} color="inherit" className="font-semibold mx-1 hover:text-blue-200 transition-colors">
    {children}
  </Button>
);

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Box className="flex flex-col min-h-screen bg-slate-50">
      <AppBar position="sticky" elevation={0} className="bg-white text-slate-800 border-b border-slate-200">
        <Container maxWidth="lg">
          <Toolbar className="px-0 py-2">
            <Typography 
              variant="h4" 
              component={Link} 
              to="/" 
              className="flex-grow font-black text-slate-900 no-underline tracking-tighter flex items-center space-x-2"
            >
              <Box className="bg-blue-600 text-white p-1.5 rounded-xl">
                <Zap size={24} className="fill-current" />
              </Box>
              <span>UTILE</span>
            </Typography>

            <Box className="hidden md:flex items-center space-x-2">
              <NavButton to="/">Home</NavButton>
              <NavButton to="/services">Services</NavButton>
              
              <Box className="h-6 w-px bg-slate-200 mx-4" />

              <IconButton color="inherit" className="hover:bg-slate-100">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCart size={22} />
                </Badge>
              </IconButton>

              {isAuthenticated ? (
                <Box className="flex items-center ml-4 space-x-3">
                  <Avatar className="bg-blue-600 w-9 h-9 font-bold text-sm">UQ</Avatar>
                  <Button 
                    variant="text" 
                    onClick={handleLogout}
                    className="text-slate-500 hover:text-red-600 capitalize font-bold text-sm"
                  >
                    Logout
                  </Button>
                </Box>
              ) : (
                <Box className="flex space-x-2 ml-4">
                  <Button 
                    component={Link} 
                    to="/login"
                    className="capitalize font-bold text-slate-600"
                  >
                    Sign In
                  </Button>
                  <Button 
                    component={Link} 
                    to="/register"
                    variant="contained" 
                    className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-100 capitalize font-bold rounded-lg"
                  >
                    Join
                  </Button>
                </Box>
              )}
            </Box>

            <IconButton className="md:hidden ml-2 text-slate-600">
              <Menu size={24} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Container component="main" className="flex-grow py-6">
        <Outlet />
      </Container>

      <Box component="footer" className="bg-white border-t border-slate-200 py-12 mt-auto">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" className="font-black text-blue-600 mb-4 tracking-tighter">UTILE</Typography>
              <Typography variant="body2" className="text-slate-500 leading-relaxed">
                The premium marketplace for professional services. Connecting quality providers with customers who value excellence.
              </Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography variant="subtitle2" className="font-bold mb-4 uppercase text-slate-400 text-xs">Company</Typography>
              <Box className="flex flex-col space-y-2">
                <Link to="/about" className="text-slate-600 no-underline text-sm hover:text-blue-600">About Us</Link>
                <Link to="/careers" className="text-slate-600 no-underline text-sm hover:text-blue-600">Careers</Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography variant="subtitle2" className="font-bold mb-4 uppercase text-slate-400 text-xs">Support</Typography>
              <Box className="flex flex-col space-y-2">
                <Link to="/help" className="text-slate-600 no-underline text-sm hover:text-blue-600">Help Center</Link>
                <Link to="/contact" className="text-slate-600 no-underline text-sm hover:text-blue-600">Contact</Link>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" className="font-bold mb-4 uppercase text-slate-400 text-xs">Newsletter</Typography>
              <Box className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm flex-grow outline-none focus:border-blue-500 transition-colors"
                />
                <Button variant="contained" className="bg-slate-900 hover:bg-black shadow-none capitalize font-bold rounded-lg px-6">
                  Join
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center text-slate-400 text-xs">
            <Typography variant="inherit">© 2026 UTILE Marketplace. All rights reserved.</Typography>
            <Box className="flex space-x-6">
              <Link to="/privacy" className="hover:text-slate-600">Privacy</Link>
              <Link to="/terms" className="hover:text-slate-600">Terms</Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
