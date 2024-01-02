import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles))
    },[category])

  return (
    <div>
      <h2 className="text-center fs-3">Latest<span className="badge text-danger fs-3">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

NewsBoard.propTypes = {
    category: PropTypes.string.isRequired,  // Add prop validation for 'category'
  };

export default NewsBoard
