import Image from "next/image";
import React from "react";

const news = ({ singlenews }) => {
  return (
    <div>
      {singlenews.map((news) => (
        <div key={news.id}>
          <h2>{news.title}</h2>
          {/* <h3>{news.description}</h3> */}

          {/* <Image src={news.urlToImage} /> */}
        </div>
      ))}
    </div>
  );
};

export default news;
