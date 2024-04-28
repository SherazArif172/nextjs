"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/about");
  };
  return (
    <div>
      <h1>sheraz</h1>
      <button onClick={handleClick}>about page</button>
    </div>
  );
}
