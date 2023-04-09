import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";

const Blog = ({ article, handleReadTime, handleBookMark }) => {
  const {
    blogCoverImage,
    authorImage,
    authorName,
    readTime,
    publishDate,
    blogTitle,
  } = article;

  return (
    <div className=" bg-zinc-200 p-5 m-3 rounded-lg">
      <img className="w-full h-450" src={blogCoverImage} alt="" />
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-4">
          <img className="rounded-full w-20 h-20" src={authorImage} alt="" />
          <div>
            <p>{authorName}</p>
            <p>{publishDate}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p>{readTime} min read</p>
          <button onClick={()=>handleBookMark(article)}>
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <h1 className="font-bold text-3xl my-5">{blogTitle}</h1>
      <button onClick={()=>handleReadTime(readTime)} className="underline">
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
