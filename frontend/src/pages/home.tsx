import React from 'react';
import { Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Wrench, Car, Home as HomeIcon } from 'lucide-react';

const services = [
  { name: 'Plumbing', icon: <Wrench size={40} />, description: 'Expert plumbing services for your home.' },
  { name: 'Mechanic', icon: <Car size={40} />, description: 'Professional car repair and maintenance.' },
  { name: 'Cleaning', icon: <HomeIcon size={40} />, description: 'Reliable home and office cleaning.' },
];

const Home = () => {
  return (
    <Box className="space-y-8">
      <Box className="text-center py-12 bg-blue-50 rounded-2xl">
        <Typography variant="h3" className="font-extrabold text-blue-900 mb-4">
          Professional Services at Your Doorstep
        </Typography>
        <Typography variant="h6" className="text-blue-700 mb-8 max-w-2xl mx-auto">
          Connecting you with trusted service providers for all your needs.
        </Typography>
        <Button variant="contained" size="large" className="bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
      </Box>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} md={4} key={service.name}>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-none bg-white rounded-xl">
              <CardContent className="text-center p-8">
                <Box className="text-blue-600 mb-4 flex justify-center">{service.icon}</Box>
                <Typography variant="h5" className="font-bold mb-2">{service.name}</Typography>
                <Typography variant="body1" className="text-gray-600 mb-6">{service.description}</Typography>
                <Button variant="outlined" fullWidth>Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
