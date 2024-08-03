import data from '@/db/recipes_ua_1.json';
import RecipeDetails from './RecipeDetails';
import type { RecipeType, PropsMetadataType } from '@/type/index';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: PropsMetadataType): Promise<Metadata> {
  const recipe = data.find((r) => r.id.toString() === params.id);

  if (!recipe) {
    return {
      title: 'Recipe Not Found',
      description: 'The requested recipe could not be found.',
    };
  }

  return {
    title: recipe.name,
    description: `Recipe for ${recipe.name}`,
  };
}
const recipedata: RecipeType[] = data;

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipedata.find((r) => r.id.toString() === params.id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <>
      <RecipeDetails recipe={recipe} />
    </>
  );
}
