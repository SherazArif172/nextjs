"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div>
      <h1>sheraz</h1>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
