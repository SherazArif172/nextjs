import React from "react";

const page = ({ post }) => {
  return (
    <div key={post.id}>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default page;
