"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  };
  return (
    <div>
      <h1>sheraz</h1>
      <button onClick={handleClick}>products</button>
    </div>
  );
}
