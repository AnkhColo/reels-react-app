import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
import VideoModal from "../components/VideoModal";

const Home = () => {
  return (
    <div>
      <Main />
      <VideoModal />
      <Row rowID="1" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row
        rowID="2"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
      <Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="Upcoming" fetchURL={requests.requestUpcoming} />
    </div>
  );
};

export default Home;
