import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f1f1f1', marginTop: 2 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; 2025 My Project. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
