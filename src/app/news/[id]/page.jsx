import Category from "./_components/category";

async function category(title) {
  try {
    const res = await fetch(`http://localhost:3000/api/news?title=${title}`);
    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }
    const data = await res.json();
    return data.data.articles;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of error
  }
}

const page = async (params) => {
  const title = params;
  const articles = await category(title);
  return (
    <div>
      <Category articles={articles} />
    </div>
  );
};

export default page;
