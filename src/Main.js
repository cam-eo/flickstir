import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "./axios";
import requests from "./requests";
import YesIcon from "@material-ui/icons/Check";
import NoIcon from "@material-ui/icons/Close";
import PlayIcon from "@material-ui/icons/PlayArrow";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";
import RatingsIcon from "@material-ui/icons/Grade";
import MovieCard from "./MovieCard";
import { Flip } from "@material-ui/icons";
const API_KEY = "455e6aaca51f7fdd3d3560e3bdbe5cda";

function Main() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  //everytime this component loads then run this
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(`/movie/550?api_key=${API_KEY}`);
      setMovie(request.data);
      console.log(request.data);
      return request;
    }
    fetchdata();
  }, []);

  let flipCard = false;

  const flipTheCard = (e) => {
    e.preventDefault();

    if (flipCard) {
      document.querySelector(".movieCard__back").className =
        "movieCard__back movieCard__back--flip";

      document.querySelector(".movieCard__front").className =
        "movieCard__front movieCard__front--flip";
      flipCard = false;
    } else {
      document.querySelector(".movieCard__back").className = "movieCard__back";
      document.querySelector(".movieCard__front").className =
        "movieCard__front";
      flipCard = true;
    }
  };

  return (
    <div className="main">
      <MovieCard
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        overview={movie.overview}
        title={movie.title}
        genres={movie.genres}
        releaseDate={movie.release_date}
        tags={movie.tagline}
        cast={movie.cast}
      />
      <div className="main__controls">
        <div className="main__controlsButton">
          <NoIcon className="main__controlsButtonIcon" />
        </div>
        <div className="main__controlsButton" onClick={flipTheCard}>
          <DescriptionIcon className="main__controlsButtonIcon" />
        </div>
        <div className="main__controlsButton">
          <PlayIcon className="main__controlsButtonIcon" />
        </div>
        <div className="main__controlsButton">
          <RatingsIcon className="main__controlsButtonIcon" />
        </div>
        <div className="main__controlsButton">
          <YesIcon className="main__controlsButtonIcon" />
        </div>
      </div>
    </div>
  );
}

export default Main;
