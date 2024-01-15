import React from "react";

export const IconPhoto = () => {
  return (
    <div className="flex p-5">
      {/* фигня с градиентом */}
      <div className="flex z-10 pt-0 pl-0 pb-40 pr-28 w-max bg-white bg-gradient-to-br from-[rgba(21,28,73,0)] to-[rgba(16,22,56,1)]"></div>
      {/* Глубая рамка вокруг фото */}
      <div className="z-0 flex rounded-full w-max border-2 border-solid border-[rgb(68,131,255)] bg-[rgb(21,28,73)] relative p-5">
        {/* Прямоугольничек */}
        <div className="z-20 h-32 w-40 origin-center rotate-45 absolute top-64 left-48 border-t-2 border-b-2 border-solid border-[rgb(68,131,255)] bg-gradient-to-r from-[rgb(21,28,73)] to-[rgb(16,22,56)]" />
        <img
          className="z-30 w-80 h-80 object-cover rounded-full"
          src="https://img.freepik.com/free-photo/cat-warriors-with-burning-eyes-generative-ai_8829-2909.jpg?w=740&t=st=1705336844~exp=1705337444~hmac=cf556e622415ecb37ae53ad1ee43b068b5589a8cd480851bc2b72869c3400193"
        />
        <div className="z-40 w-32 h-32 bg-[rgb(7,0,62)] flex justify-center items-center text-center text-wrap text-white font-bold border border-solid border-[rgb(225,20,218)] rounded-full text-xl absolute bottom-0 left-0">
          Cyber Samurai #177
        </div>
        <div className="z-10 flex rounded-full w-48 h-48 border-2 border-solid border-[rgb(68,131,255)] bg-[rgb(16,22,56)] absolute -bottom-36 -right-24"></div>
      </div>
    </div>
  );
};
