import React from "react";
import { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestNowPlaying).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (typeof str === "string" && str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
          <p className="text-sm text-gray-400 p-2">
            Release Date:{movie?.release_date}
          </p>
          <p className="text-gray-300 text-xs py-4">
            {truncateString(movie?.overview, 150)}
          </p>
          <button className="border text-black border-gray-300 bg-white cursor-pointer py-2 px-4">
            Play
          </button>
          <button className="border border-gray-300  cursor-pointer py-2 px-4 ml-3">
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
