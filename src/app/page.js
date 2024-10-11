import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-black font-bold mb-6 text-2xl items-center flex">Welcome to Farhin's Recipe App</h1>
      <Link href="/recipes" className="border border-black p-1 bg-slate-200 hover:bg-gray-300"> View Recipes</Link>
    </div>
  );
}
