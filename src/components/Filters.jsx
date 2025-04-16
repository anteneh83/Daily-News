import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from '@mui/material';

const Filters = ({ keyword, setKeyword, category, setCategory, country, setCountry }) => {
  return (
    <Box sx={{ mb: 4, mt: 4 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        {/* Search input - more width */}
        <Grid item xs={12} md={7}>
          <TextField
            fullWidth
            label="Search News"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            variant="outlined"
          />
        </Grid>

        {/* Country */}
        <Grid item xs={6} md={2}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="Country"
            >
              <MenuItem value="us">US</MenuItem>
              <MenuItem value="gb">UK</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
              <MenuItem value="in">India</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Category */}
        <Grid item xs={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="technology">💻 Technology</MenuItem>
              <MenuItem value="business">💼 Business</MenuItem>
              <MenuItem value="sports">🏅 Sports</MenuItem>
              <MenuItem value="health">🧬 Health</MenuItem>
              <MenuItem value="science">🔬 Science</MenuItem>
              <MenuItem value="entertainment">🎬 Entertainment</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
