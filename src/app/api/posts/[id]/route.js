import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  // console.log(id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return NextResponse.json({ data });
}
