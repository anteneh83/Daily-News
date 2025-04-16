import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/api';
import NewsCard from '../components/NewsCard';
import Filters from '../components/Filters';
import { Grid, Typography } from '@mui/material';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('technology');

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchNews({ keyword, country, category }).then((data) => setArticles(data.articles));
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
    </>
  );
};

export default Home;
