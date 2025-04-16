const API_KEY = '1bf070ae2ef24c1791e58ed0cfa14fa0';

export const fetchNews = async ({ keyword = '', country = '', category = '' }) => {
  const url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&q=${keyword}&country=${country}&category=${category}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();

    // Check if there are articles in the response
    if (data.status === 'ok' && data.articles) {
      return data;
    } else {
      console.error('No articles found or error in the response:', data);
      return { articles: [] };  // Return empty array if no articles
    }
  } catch (err) {
    console.error('Error fetching news:', err);
    return { articles: [] };  // Return empty array on error
  }
};
