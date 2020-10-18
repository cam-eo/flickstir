import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "./axios";
import requests from "./requests";
import YesIcon from "@material-ui/icons/Check";
import NoIcon from "@material-ui/icons/Close";
import PlayIcon from "@material-ui/icons/PlayArrow";
import DescriptionIcon from "@material-ui/icons/Description";
import RatingsIcon from "@material-ui/icons/Grade";
import MovieCard from "./MovieCard";
const API_KEY = "455e6aaca51f7fdd3d3560e3bdbe5cda";

function Main() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [currentMovie, setCurrentMovie] = useState([]);
  const [flipCard, setFlipCard] = useState([]);

  //everytime this component loads then run this
  useEffect(() => {
    async function fetchdata() {
      // const request = await axios.get(`/movie/550?api_key=${API_KEY}`);
      // const requestList = await axios.get(`/list/2?api_key=${API_KEY}`);
      const getList = await axios.get(requests.fetchTrending);
      setMovies(getList.data.results);
      setCurrentMovie(1);
      setFlipCard(true);
      setMovie(getList.data.results[0]);
      console.log(getList.data.results[0]);

      return getList;
    }
    fetchdata();
  }, []);

  const flipTheCard = (e) => {
    e.preventDefault();

    if (flipCard) {
      document.querySelector(".movieCard__back").className =
        "movieCard__back movieCard__back--flip";

      document.querySelector(".movieCard__front").className =
        "movieCard__front movieCard__front--flip";
      setFlipCard(false)
    } else {
      document.querySelector(".movieCard__back").className = "movieCard__back";
      document.querySelector(".movieCard__front").className =
        "movieCard__front";
      setFlipCard(true);
    }
  };

  const yes = (e) => {
    e.preventDefault();

    if (currentMovie < movies.length) {
      setCurrentMovie(currentMovie + 1);
      console.log("THIS IS THE MOVIE", currentMovie, movies[currentMovie]);
      setMovie(movies[currentMovie]);
    }
  };

  const no = (e) => {
    e.preventDefault();

    if (currentMovie < movies.length) {
      setCurrentMovie(currentMovie + 1);
      setMovie(movies[currentMovie]);
    }
  };

  return (
    <div className="main">
      <MovieCard
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        overview={movie.overview}
        title={movie.title ? movie.title : movie.name}
        genres={movie.genres}
        releaseDate={movie.release_date}
        tags={movie.tagline}
        cast={movie.credits}
        id={movie.id}
      />
      <div className="main__controls">
        <div className="main__controlsButton">
          <NoIcon className="main__controlsButtonIcon" onClick={no} />
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
          <YesIcon className="main__controlsButtonIcon" onClick={yes} />
        </div>
      </div>
    </div>
  );
}

export default Main;
