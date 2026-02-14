import React from 'react'
import { Form, FormField, Alert } from '../components/index'
import { useState } from 'react'
import { Box, Typography, Button, Paper, Link as MuiLink } from '@mui/material'

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    setIsLoading(true)
    try {
      // API call would go here
      setTimeout(() => {
        console.log('Login:', { email, password })
        setIsLoading(false)
      }, 1000)
    } catch (err) {
      setError('Login failed. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f9fafb', py: 12, px: 4 }}>
      <Paper elevation={0} sx={{ width: '100%', maxWidth: 450, p: { xs: 4, md: 6 }, borderRadius: '32px', border: '1px solid #eee' }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 900, color: 'black', mb: 6 }}>
          Login
        </Typography>

        {error && <Alert variant="error" message={error} isDismissible />}

        <Form onSubmit={handleSubmit}>
          <FormField
            name="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
            required
          />

          <Box sx={{ mt: 3 }}>
            <FormField
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              required
            />
          </Box>

          <Button
            type="submit"
            disabled={isLoading}
            variant="contained"
            fullWidth
            sx={{ 
              mt: 6, 
              py: 2, 
              borderRadius: '12px', 
              fontWeight: 800, 
              bgcolor: 'black',
              color: 'white',
              '&:hover': { bgcolor: '#333' }
            }}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </Form>

        <Typography align="center" sx={{ color: 'text.secondary', mt: 4 }}>
          Don't have an account?{' '}
          <MuiLink href="/register" sx={{ color: 'black', textDecoration: 'none', fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
            Sign up
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  )
}
