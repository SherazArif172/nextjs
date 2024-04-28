const { NextResponse } = require("next/server");

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return NextResponse.json({ data });
}
