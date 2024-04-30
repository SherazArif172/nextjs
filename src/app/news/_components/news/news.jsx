import Image from "next/image";
import React from "react";

const news = ({ singlenews }) => {
  return (
    <div>
      {singlenews.map((news) => (
        <div key={news.id}>
          <h1>{news.author}</h1>
          <h2>{news.title}</h2>
          <h3>{news.description}</h3>
          <h4>{news.content}</h4>
          {/* <Image src={news.urlToImage} /> */}
        </div>
      ))}
    </div>
  );
};

export default news;
