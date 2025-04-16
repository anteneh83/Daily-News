const API_KEY = '1bf070ae2ef24c1791e58ed0cfa14fa0'
export const fetchNews = async ({ keyword = '', country = '', category = '' }) => {
  const url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&q=${keyword}&country=${country}&category=${category}`

  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (err) {
    console.error('Error fetching news:', err)
    return { articles: [] }
  }
}
