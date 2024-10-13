import RecipeList from "@/components/ui/recipes-list";


async function fetchRecipes() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();
        return data?.recipes;
    } catch (error) {
        throw new Error(error)
    }
}


export default async function Recipes() {
    const recipes = await fetchRecipes();
    return <RecipeList recipes={recipes} />;
}