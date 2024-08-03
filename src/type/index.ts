export type RecipeType = {
  id: number;
  name: string;
  info: {
    type: string;
    severity: number;
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
    img: string;
    data: {
      portion: string;
      ingredients: string[];
      recipe: string;
    };
  };
};

export type PropsMetadataType = {
  params: { id: string };
};

export type RecipeProps = {
  recipedata: RecipeType[];
};
export type IconProps = {
  className?: string;
};
export type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

export type RecipeStoreType = {
  currentPage: number;
  itemsPerPage: number;
  imgSrc: string;
  checkboxStates: { [key: string]: boolean };
  selectedType: string;
  filteredRecipes: RecipeType[];
  setCurrentPage: (page: number) => void;
  setImgSrc: (src: string) => void;
  toggleCheckbox: (id: string) => void;
  setSelectedType: (type: string) => void;
  setFilteredRecipes: (recipes: RecipeType[]) => void;
  applyFilter: (allRecipes: RecipeType[]) => void;
};
