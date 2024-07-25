import data from '@/db/recipes_ua_1.json';
import RecipeDetails from './RecipeDetails';
import { RecipeType } from '@/type/index';


const recipedata: RecipeType[] = data;

export async function generateStaticParams() {
  return recipedata.map((recipe) => ({
    id: recipe.id.toString(),
  }));
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipedata.find((r) => r.id.toString() === params.id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return <RecipeDetails recipe={recipe} />;
}