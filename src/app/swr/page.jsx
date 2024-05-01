"use client";

import { useSWR } from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  return data.data.articles;
};

const page = () => {
  const { data, error } = useSWR(fetcher);

  return <div>page</div>;
};

export default page;
