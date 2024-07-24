import data from '@/db/recipes_ua_1.json';
import RecipeDetails from './RecipeDetails';

type Recipe = {
  id: number;
  name: string;
  info: {
    type: string;
    severity?: number;
    base: string;
    vegan: boolean;
    vegetarian: boolean;
    tested: boolean;
    rating: {
      like: number;
      dislike: number;
    };
  };
  content: {
    img?: string;
    data: {
      portion?: string;
      ingredients: string[];
      recipe: string;
    };
  };
};

const recipedata: Recipe[] = data;

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