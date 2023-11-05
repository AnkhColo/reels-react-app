import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Now Playing" fetchURL={requests.requestNowPlaying} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
    </div>
  );
};

export default Home;
