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
const API_KEY = "455e6aaca51f7fdd3d3560e3bdbe5cda";

function Main() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  //everytime this component loads then run this
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(`/movie/550?api_key=${API_KEY}`);
      setMovie(request.data);
      return request;
    }
    fetchdata();
  }, []);

  return (
    <div className="main">
      <div className="main__content">
        <div className="main__movieInfo">
          <div className="main__movieInfoButtons">
            <div className="main__movieInfoButton" tabindex="1">
              <DescriptionIcon className="main__movieInfoButtonIcon" />
            </div>
            <div className="main__movieInfoButton" tabindex="2">
              <FaceIcon className="main__movieInfoButtonIcon" />
            </div>
            <div className="main__movieInfoButton" tabindex="3">
              <RatingsIcon className="main__movieInfoButtonIcon" />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className="main__functions">
          <div className="main__watchedIt">
            <span>Watched it?</span>
            <input type="checkbox" />
          </div>

          {/* <button className="main__buttonWatchedIt">Watched it?</button> */}
          <div className="main__buttonRow">
            <div className="main__functionButton">
              <NoIcon fontSize="large" className="main__noIcon" />
            </div>
            <div className="main__functionButton">
              <PlayIcon fontSize="large" className="main__noIcon" />
            </div>
            <div className="main__functionButton">
              <YesIcon fontSize="large" className="main__noIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
