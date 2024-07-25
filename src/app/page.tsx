import SideBar from './components/layout/SideBar';
import data from '@/db/recipes_ua_1.json';
import GridColums from '@/app/components/layout/GridColums';
import { RecipeType } from '@/type/index';

const recipedata: RecipeType[] = data;

const Home = () => {
  return (
    <>
      <div className="flex bg-gray-50 dark:bg-gray-800 ">
        {/* <SideBar /> */}

        <GridColums recipedata={recipedata} />
      </div>
    </>
  );
};

export default Home;
