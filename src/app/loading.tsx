import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-60 w-60 animate-spin rounded-full border-b-4 border-t-4 border-red-500"></div>
      <Image width={200} height={200} alt="loading" src="/loading.webp" className="h-56 w-56 rounded-full" />
    </div>
    // Change IMG
  );
};

export default Loading;
