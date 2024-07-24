import SideBar from './components/layout/SideBar';
import data from '@/db/recipes_ua_1.json';
import GridColums from '@/app/components/layout/GridColums'

import Image from 'next/image';

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

 const Home = () => {
  return (
    <>
      <div className="flex bg-gray-50 dark:bg-gray-800 ">
        {/* <SideBar /> */}
     
          <GridColums recipedata={recipedata} />
          
      </div>
    </>
  );
}

export default Home;