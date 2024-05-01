import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://gnews.io/api/v4/search?q=example&apikey=bcb532120f0ae80449d4eb7b8d8ce40f"
  );
  const data = await res.json();
  return NextResponse.json({ data });
}
