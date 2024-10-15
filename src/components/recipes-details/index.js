import Link from 'next/link';

export default function RecipeDetailsItems({ getRecipeDetails }) {
  return (
    <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      {/* Link styled as a button */}
      <Link
        href="/recipes"
        className=" px-3 py-1 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition-all text-lg font-medium">
        Go to Recipe List
      </Link>

      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        {/* Image section */}
        <div className="w-full lg:sticky top-0 sm:flex gap-2">
          <img
            src={getRecipeDetails?.image}
            name={getRecipeDetails?.name}
            className="w-4/5 rounded object-cover"
          />
        </div>

        {/* Text and details section */}
        <div className="space-y-4">
          {/* Recipe name */}
          <h2 className="text-3xl font-extrabold text-gray-950">
            {getRecipeDetails?.name}
          </h2>

          {/* Meal type */}
          <p className="text-xl font-extrabold text-gray-950">
            {getRecipeDetails?.mealType}
          </p>

          {/* Cuisine type */}
          <p className="text-xl font-extrabold text-gray-950">
            {getRecipeDetails?.cuisine}
          </p>

          {/* Ingredients section */}
          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-850">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-850">
              {getRecipeDetails?.ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
