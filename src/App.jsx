import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" align="center" color="primary" gutterBottom>
          📰 Latest Tech News
        </Typography>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>

      {/* Footer Component */}
      <Footer />
    </Router>
  );
};

export default App;
