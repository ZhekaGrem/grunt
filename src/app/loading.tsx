import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
   <div className="relative flex justify-center items-center">
    <div className="absolute animate-spin rounded-full h-60 w-60 border-t-4 border-b-4 border-red-500"></div>
    <Image width={200} height={200} alt="loading" src="/loading.webp"  className="rounded-full h-56 w-56"/>
</div>
// Change IMG 
  );
};

export default Loading;
