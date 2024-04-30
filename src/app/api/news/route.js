import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2024-03-30&sortBy=publishedAt&apiKey=9a39099f7556463b89cd55a0792a6e2b"
  );
  const data = await res.json();
  return NextResponse.json({ data });
}
