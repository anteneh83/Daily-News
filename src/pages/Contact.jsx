import React from 'react';
import { Typography, Container, Paper, TextField, Button, Grid, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Get in touch
        </Typography>
        <Typography variant="body1" paragraph>
          We'd love to hear from you! Whether you have a question, feedback, or suggestion, feel free to reach out to us.
        </Typography>

        {/* Contact Form */}
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Your Name" 
                fullWidth 
                variant="outlined" 
                required 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Your Email" 
                fullWidth 
                variant="outlined" 
                type="email" 
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Your Message" 
                fullWidth 
                variant="outlined" 
                multiline 
                rows={4} 
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                type="submit" 
                fullWidth
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h6" gutterBottom>
          Our Contact Details
        </Typography>
        <Typography>Email: antenehgetnet09@gmial.com</Typography>
        <Typography>Phone: +251 974528148</Typography>
        <Typography>Address: Addis Ababa, AASTU, Ethiopia</Typography>
      </Paper>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Find Us Here
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1910394991164!2d38.7227488!3d9.0224434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b848ef28d0159%3A0x3eac8982f56f5b19!2sAddis%20Ababa%20Science%20and%20Technology%20University!5e0!3m2!1sen!2set!4v1611002307561!5m2!1sen!2set"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Contact;
