import Link from "next/link";
import React from "react";

const post = ({ posts }) => {
  return (
    <div>
      <h1 className="text-center text-3xl text-bold">posts list</h1>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`}>
          <div key={post.id} className="border-b border-black">
            <h1>
              {post.id} {post.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default post;
