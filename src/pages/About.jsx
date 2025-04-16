import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Our Story
        </Typography>
        <Typography paragraph>
          Our platform delivers daily news from different countries around the world. We aim to keep you informed about the latest developments in various regions, giving you a global perspective on current events. Whether it’s politics, economy, technology, or culture, we bring you the most relevant and up-to-date stories from diverse sources.
        </Typography>
        <Typography paragraph>
          We are committed to providing accurate, unbiased, and timely news to help you stay connected with the world. This project is built using React, Material UI, and routing, showcasing my skills in modern web development while delivering valuable content to users.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
