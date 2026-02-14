import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card, Button, Loader } from '../components/index'
import { ROUTES } from '../constants/index'
import { Box, Container, Typography, Grid } from '@mui/material'

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    { id: '1', title: 'House Cleaning', category: 'Cleaning', price: 49.99, rating: 4.8 },
    { id: '2', title: 'Office Cleaning', category: 'Cleaning', price: 59.99, rating: 4.7 },
    { id: '3', title: 'Garden Design', category: 'Gardening', price: 75.0, rating: 4.9 },
    { id: '4', title: 'Lawn Maintenance', category: 'Gardening', price: 45.0, rating: 4.6 },
    { id: '5', title: 'Pipe Repair', category: 'Plumbing', price: 85.0, rating: 4.8 },
    { id: '6', title: 'Installation', category: 'Plumbing', price: 95.0, rating: 4.7 },
  ]

  const filteredServices =
    selectedCategory === 'all' ? services : services.filter((s) => s.category === selectedCategory)

  const categories = ['all', 'Cleaning', 'Gardening', 'Plumbing']

  return (
    <Box sx={{ minHeight: '100vh', pt: 12, pb: 8, bgcolor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 4, color: 'black' }}>
            Services
          </Typography>
        </motion.div>

        <Box
          component={motion.div}
          sx={{ mb: 6, display: 'flex', gap: 2, flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              variant={selectedCategory === cat ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '12px',
                fontWeight: 700,
                textTransform: 'none',
                px: 3,
                py: 1,
                bgcolor: selectedCategory === cat ? '#4ADEDE' : 'white',
                color: 'black',
                borderColor: '#eee',
                '&:hover': {
                  bgcolor: selectedCategory === cat ? '#3ccccccc' : '#f5f5f5',
                  borderColor: '#4ADEDE',
                },
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Button>
          ))}
        </Box>

        <Grid container spacing={4}>
          {isLoading ? (
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <Loader variant="spinner" size="lg" />
            </Grid>
          ) : (
            filteredServices.map((service, i) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Card hoverable sx={{ height: '100%', borderRadius: '32px', border: '1px solid #eee' }}>
                    <Box sx={{ p: 4 }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 900, color: 'black' }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 0.5 }}>
                          {service.category}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                        <Typography variant="h3" sx={{ fontWeight: 900, color: '#4ADEDE' }}>
                          ${service.price}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#ffb400', fontWeight: 700 }}>
                          ★ {service.rating}
                        </Typography>
                      </Box>

                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ 
                          borderRadius: '12px', 
                          py: 1.5, 
                          fontWeight: 800,
                          bgcolor: 'black',
                          color: 'white',
                          '&:hover': { bgcolor: '#333' }
                        }}
                        onClick={() => navigate(ROUTES.SERVICE_DETAIL(service.id))}
                      >
                        View Details
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  )
}
