import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


export default function RecipeList({ recipes }) {
    return (
        <div>
            <div className="p-4 mx-auto lg:max-w-full md:max-w-4xl sm:max-w-full">
                <div className="flex justify-between items-center mb-12">
                     <h2 className="text-4xl font-bold text-gray-800">Recipes</h2>
                    <Link href={"/"} className="mx-4 px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition-all text-lg font-medium">Go Home</Link>
               </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes && recipes.length > 0 ?
                        recipes.map(recipe =>(
                            <Link href={`/recipes/${recipe.id}`}>
                                <Card>
                                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                            <img src={recipe.image} alt={recipe.name} className="w-full h-full object-top" />
                                        </div>  
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                                        </div>
                                        <div className="mt-4 flex items-center flex-wrap gap-2">
                                            <p className="text-md text-slate-800 font-semibold">Rating: {recipe.rating}</p>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="text-slate-700 text-sm font-medium">{recipe.cuisine}</p>
                                        </div>
                                    </CardContent>
                            </Card>
                            </Link>))
                        : null
                        
                    }
                </div>
            </div>
        </div>
    );
}