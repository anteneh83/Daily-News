import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6">
          Learn more about this project.
        </Typography>
        <Typography>
          This project is built to showcase my skills with React, Material UI, and routing.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
