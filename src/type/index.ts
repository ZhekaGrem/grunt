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
export type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

export type RecipeStore = {
  currentPage: number;
  itemsPerPage: number;
  imgSrc: string;
  checkboxStates: { [key: number]: boolean };
  setCurrentPage: (page: number) => void;
  setImgSrc: (src: string) => void;
  toggleCheckbox: (id: number) => void;
};
