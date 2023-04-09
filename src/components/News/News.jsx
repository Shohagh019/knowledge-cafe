import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";

const News = ({ handleReadTime, handleBookMark}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("article.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div>
      <div>
        {articles.map((article) => (
          <Blog handleBookMark={handleBookMark} handleReadTime={handleReadTime} article={article}></Blog>
        ))}
      </div>
      {/* <div> <p> order summary: {cart.length}</p></div> */}
    </div>
  );
};

export default News;
