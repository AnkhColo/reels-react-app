import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import ModalVideo from "react-modal-video";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false);
  const movieID = doc(db, "users", `${user?.email}`);

  const [isOpen, setOpen] = useState(false);

  const savedShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);

      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save movie:)");
    }
  };

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
          <React.Fragment>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId="L61p2uyiMSo"
              onClose={() => setOpen(false)}
            ></ModalVideo>

            <BiSolidMoviePlay
              onClick={() => setOpen(true)}
              size={25}
              className=" absolute top-9 left-3"
            />
          </React.Fragment>
        </p>
        <p onClick={savedShow}>
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
