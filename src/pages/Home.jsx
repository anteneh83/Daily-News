import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/api';
import NewsCard from '../components/NewsCard';
import Filters from '../components/Filters';
import { Grid, Typography, CircularProgress } from '@mui/material';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('us'); // Default country is US
  const [category, setCategory] = useState('technology');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      console.log('Fetching news with parameters:', { keyword, country, category }); // Log current parameters
      fetchNews({ keyword, country, category })
        .then((data) => {
          console.log('Fetched articles:', data.articles); // Log fetched articles
          setArticles(data.articles);
          setLoading(false);
        })
        .catch(() => {
          setArticles([]);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword, country, category]);

  return (
    <>
      <Filters
        keyword={keyword}
        setKeyword={setKeyword}
        category={category}
        setCategory={setCategory}
        country={country}
        setCountry={setCountry}
      />

      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: 4 }} />
      ) : (
        <Grid container spacing={3}>
          {articles.length > 0 ? (
            articles.map((article, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <NewsCard article={article} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="body1" align="center" color="textSecondary">
                No news found.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};

export default Home;
