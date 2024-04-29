import Post from "./_components/post";

export async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data.data;
  //   console.log(data);
}

const page = async () => {
  const posts = await getPosts();
  return (
    <div>
      <Post posts={posts} />
    </div>
  );
};

export default page;
