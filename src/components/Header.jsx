import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path to your logo image
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar 
      position="sticky" 
      sx={{
        padding: '15px 0', // Adjusted padding for spacing
        backgroundColor: '#ffffff', // Solid white background for the header
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for better visibility
      }}
    >
      <Toolbar>
        {/* Logo or Title */}
        <Typography 
        variant="h4" 
        sx={{
            
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center',
            
        }}
        >
        <img 
            src={logo} 
            alt="Logo" 
            style={{ width: '70px', height: 'auto', borderRadius: '40px', marginRight: '10px' }} // Adjusted size and added border radius
        />
        </Typography>


        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{
              fontSize: '1.1rem',
              color: '#1e1e1e', // Blue-black color
              '&:hover': {
                color: '#1976d2', // Blue hover color
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about" 
            sx={{
              fontSize: '1.1rem',
              color: '#1e1e1e', // Blue-black color
              '&:hover': {
                color: '#1976d2', // Blue hover color
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }
            }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact" 
            sx={{
              fontSize: '1.1rem',
              color: '#1e1e1e', // Blue-black color
              '&:hover': {
                color: '#1976d2', // Blue hover color
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
