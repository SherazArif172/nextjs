import React from "react";
import Users from "./_components/users/users";

async function getPost() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  // console.log(data);
  return data;
}

const page = async () => {
  const products = await getPost();
  // console.log(products);
  return (
    <div>
      <Users products={products} />
    </div>
  );
};

export default page;
