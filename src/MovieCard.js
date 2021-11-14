import React, { useState, useEffect } from "react";
import "./MovieCard.css";
import axios from "./axios";
const API_KEY = "455e6aaca51f7fdd3d3560e3bdbe5cda";

function MovieCard({
  id,
  image,
  overview,
  title,
  genres,
  releaseDate,
  tags,
  cast,
}) {

  useEffect(() => {
    async function fetchdata() {
      const movieInfoRequest = await axios.get(
        `/movie/${id}?api_key=${API_KEY}`
      );

      return movieInfoRequest;
    }
    fetchdata();
  }, [id]);

  return (
    <div className="movieCard">
      <div className="movieCard__container">
        <div className="movieCard__front">
          <img className='movieCard__frontPoster' src={image} alt="Movie Cover" />
          <span className='movieCard__frontWatchedTag'>WATCHED</span>
        </div>
        <div className="movieCard__back">
          <div className="movieCard__backDescription">
            <p>
              <strong>Title: </strong>
              {title}
            </p>
            <p>
              <strong>Description: </strong>
              {overview}
            </p>
            <p>
              <strong>Genres: </strong>
              {"THIS IS THE GENRES"}
            </p>
            <p>
              <strong>Release Date: </strong>
              {releaseDate}
            </p>
            <p>
              <strong>Tags: </strong>
              {tags}
            </p>
            <p>
              <strong>Cast: </strong>
              {cast}
            </p>
          </div>
          <div className="movieCard__backRatings"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
