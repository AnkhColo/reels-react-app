import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2 ">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className=" absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-80  text-white">
        <p className="text-xs md:text-sm whitespace-normal flex justify-center items-center h-full">
          {item?.title}
        </p>
        <p>
          <BiSolidMoviePlay size={25} className=" absolute top-9 left-3" />
        </p>
        <p>
          {like ? (
            <FaHeart className=" absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className=" absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
