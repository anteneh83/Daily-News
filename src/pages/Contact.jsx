import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6">Get in touch</Typography>
        <Typography>Email: contact@myproject.com</Typography>
        <Typography>Phone: (123) 456-7890</Typography>
      </Paper>
    </Container>
  );
};

export default Contact;
