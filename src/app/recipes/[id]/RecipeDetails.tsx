'use client';
import { RecipeType } from '@/type/index';
import { Merriweather } from 'next/font/google';
import Image from 'next/image';

const merri = Merriweather({ subsets: ['cyrillic', 'latin'], weight: ['400'] });

const RecipeDetails = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <>
      <div className="min-h-screen break-words p-8">
        <div className="mx-auto max-w-4xl rounded-lg shadow-xl">
          <div className="border-8 border-double border-black bg-h_bg p-8 text-h_te dark:border-yellow-600 dark:bg-slate-700 dark:text-d_te">
            <div className="mb-8 flex justify-center">
              <Image
                src="/2.webp"
                alt={recipe.name}
                className="w-full max-w-sm rounded-full border-8 border-double border-black object-cover shadow-md dark:border-yellow-600"
                width={300}
                height={100}
              />
            </div>

            <h1 className={`text-5xl ${merri.className} mb-6 text-center font-bold`}>{recipe.name}</h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-semibold">Інгредієнти:</h3>
                <ul className="list-inside list-disc text-2xl">
                  {recipe.content.data.ingredients.map((ingredient, index) => (
                    <li key={index} className="capitalize-first mb-2">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-3xl font-semibold">Рецепт:</h3>
                <p className="whitespace-pre-line text-2xl">{recipe.content.data.recipe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
