import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="text-black font-bold mb-6 text-2xl items-center flex">
      <h1>Loading...</h1>
        <Skeleton className="h-4 w-1/2" />
    </div>
  );
}