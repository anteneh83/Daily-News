import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

const NewsCard = ({ article }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {article.urlToImage && (
        <CardMedia
          component="img"
          height="180"
          image={article.urlToImage}
          alt={article.title}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description || 'No description available.'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </Button>
        {article.source?.name && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ marginLeft: 'auto', fontStyle: 'italic' }}
          >
            {article.source.name}
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};

export default NewsCard;
