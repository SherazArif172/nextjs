import React from "react";

const users = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default users;
