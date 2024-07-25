'use client';
import { useRouter } from 'next/navigation';
import { RecipeType } from '@/type/index';



const RecipeDetails = ({ recipe }: { recipe: RecipeType }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden">
        <div className="p-8">
          {recipe.content.img && (
            <div className="flex justify-center mb-8">
              <img
                src={recipe.content.img}
                alt={recipe.name}
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}

          <h1 className="text-5xl font-bold mb-6 text-center text-[#0C1F23] dark:text-[#F3E0DC]">
            {recipe.name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-[#0C1F23] dark:text-[#F3E0DC]">Інгредієнти:</h3>
              <ul className="text-2xl  list-disc list-inside text-[#0C1F23] dark:text-[#F3E0DC]">
                {recipe.content.data.ingredients.map((ingredient, index) => (
                  <li key={index} className="mb-2">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-4 text-[#0C1F23] dark:text-[#F3E0DC]">Рецепт:</h3>
              <p className="text-2xl whitespace-pre-line text-[#0C1F23] dark:text-[#F3E0DC]">
                {recipe.content.data.recipe}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
