import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../Firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-white  md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute  cursor-pointer opacity-50 hover:opacity-100 z-10"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full relative overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2 "
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className=" absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-80  text-white">
                <p className="text-xs md:text-sm whitespace-normal flex justify-center items-center h-full">
                  {item?.title}
                </p>
              </div>
              <p>
                <AiOutlineClose
                  className="absolute text-gray-300 top-4 left-4"
                  onClick={() => deleteShow(item.id)}
                />
              </p>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute  cursor-pointer opacity-50 hover:opacity-100 z-10"
          size={40}
        />
      </div>
    </div>
  );
};

export default SavedShows;
