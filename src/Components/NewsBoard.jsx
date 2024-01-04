import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          // Handle the case when 'articles' is not an array
          console.error('Invalid articles data:', data.articles);
          setArticles([]);
        }
      })
      .catch((error) => {
        // Handle fetch errors
        console.error('Error fetching data:', error);
        setArticles([]);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center fs-3">
        Latest<span className="badge text-danger fs-3">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

NewsBoard.propTypes = {
  category: PropTypes.string.isRequired, // prop validation for 'category'
};

export default NewsBoard;
