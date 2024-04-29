import Link from "next/link";
import React from "react";

const page = ({ post }) => {
  return (
    <div key={post.id}>
      <h1>
        {post.id} {post.title}
      </h1>
    </div>
  );
};

export default page;
