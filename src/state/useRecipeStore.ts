import create from 'zustand';
import type { RecipeStore } from '@/type/index';

const useRecipeStore = create<RecipeStore>((set) => ({
  currentPage: 1,
  itemsPerPage: 12,
  imgSrc: '/2.webp',
  checkboxStates: {},
  setCurrentPage: (page) => set({ currentPage: page }),
  setImgSrc: (src) => set({ imgSrc: src }),
  toggleCheckbox: (id) =>
    set((state) => ({
      checkboxStates: {
        ...state.checkboxStates,
        [id]: !state.checkboxStates[id],
      },
    })),
}));

export default useRecipeStore;
