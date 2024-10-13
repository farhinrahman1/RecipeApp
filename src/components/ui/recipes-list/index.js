import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function RecipeList({ recipes }) {
    console.log(recipes);
    return (
    <div>
        <div className="p-4 mx-auto lg:max-w-6 md:max-w-4xl sm:max-w-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lag:grid-cols-3 gap-8">

            </div>
            </div>
        </div>
    )
}