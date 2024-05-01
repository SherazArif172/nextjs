import React from "react";

const category = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => {
        <div key={article.id}>
          <h1>{article.title}</h1>
          <h1>{article.description}</h1>
        </div>;
      })}
    </div>
  );
};

export default category;
