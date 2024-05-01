import News from "./_components/news/news";

export async function newsData() {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  // console.log();
  return data.data.articles;
}

const page = async () => {
  const singlenews = await newsData();
  // console.log(singlenews);
  return <div>{<News singlenews={singlenews} />}</div>;
};

export default page;
