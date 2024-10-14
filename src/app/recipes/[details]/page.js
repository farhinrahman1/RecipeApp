import RecipeDetailsItems from "@/components/recipes-details";


async function fetchRecipeDetails(currentRecipeId) {
    try {
        const apiResponse = await fetch("https://dummyjson.com/recipes/${currentRecipeId}");
        const data = await apiResponse.json();
        return data;
    } catch(error) {
        throw new Error(error);        
    }
}


export default async function RecipeDetails({params}) {
    const getRecipeDetails = await fetchRecipeDetails(params?.details);
    return (
        <RecipeDetailsItems getRecipeDetails={getRecipeDetails} />
    )
}