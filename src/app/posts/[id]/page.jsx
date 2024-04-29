import Post from "./_components/post/page";
async function getPost(id) {
  //   console.log(id);
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const data = await res.json();
  //   console.log(data.data);
  return data.data;
}

const page = async ({ params }) => {
  const { id } = params;
  const singlePost = await getPost(id);
  return (
    <div>
      <h1>single post</h1>
      <Post post={singlePost} />
    </div>
  );
};

export default page;
