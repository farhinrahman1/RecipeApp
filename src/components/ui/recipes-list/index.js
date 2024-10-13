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
    console.log(recipes);
    return (
        <div>
            <div className="p-4 mx-auto lg:max-w-full md:max-w-4xl sm:max-w-full">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes && recipes.length > 0 ?
                        recipes.map(recipe =>
                            <Link href={"/recopes-list/${recipe.id}"}>
                                <Card>
                                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                            <img src={recipe.image} alt={recipe.name} className="w-full h-full object-top" />
                                        </div>  
                                    </CardContent>
                            </Card>
                            </Link>)
                        : null
                        
                    }
                </div>
            </div>
        </div>
    );
}