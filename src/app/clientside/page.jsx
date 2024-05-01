"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/news");
      const data = await res.json();
      //   console.log(data.data.articles);
      setData(data.data.articles);
      setLoading(false);
    }
    fetchData();
  }, []);
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  // console.log(data);

  return (
    <div>
      {data.map((data) => (
        <h1>{data.title}</h1>
      ))}
    </div>
  );
};

export default page;
