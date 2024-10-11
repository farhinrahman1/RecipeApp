import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-black font-bold text-2xl items-center flex">Welcome to Farhin's Recipe App</h1>
      <Link href="/recipes" className="border border-black "> View Recipes</Link>
    </div>
  );
}
