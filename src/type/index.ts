export type RecipeType = {
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
