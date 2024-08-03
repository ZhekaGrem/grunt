import create from 'zustand';
import type { RecipeStoreType, RecipeType } from '@/type/index';

const useRecipeStore = create<RecipeStoreType>((set, get) => ({
  currentPage: 1,
  itemsPerPage: 12,
  imgSrc: '/2.webp',
  checkboxStates: {},
  selectedType: '',
  filteredRecipes: [],
  setCurrentPage: (page: number) => set({ currentPage: page }),
  setImgSrc: (src: string) => set({ imgSrc: src }),
  toggleCheckbox: (id: string) =>
    set((state) => ({
      checkboxStates: {
        ...state.checkboxStates,
        [id]: !state.checkboxStates[id],
      },
    })),
  setSelectedType: (type: string) =>
    set((state) => ({
      selectedType: state.selectedType === type ? '' : type,
    })),
  setFilteredRecipes: (recipes: RecipeType[]) => set({ filteredRecipes: recipes }),
  applyFilter: (allRecipes: RecipeType[]) => {
    const { selectedType } = get();
    const filtered =
      selectedType === '' ? allRecipes : allRecipes.filter((recipe) => recipe.info.type === selectedType);
    set({ filteredRecipes: filtered, currentPage: 1 });
  },
}));

export default useRecipeStore;
