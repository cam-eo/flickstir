import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard({ image }) {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "",
      image: "",
      description: "",
      trailer: "",
    },
    {
      id: 1,
      title: "",
      image: "",
      description: "",
      trailer: "",
    },
  ]);

  return (
    <div className="movieCard">
      <div className="movieCard__container">
        <div className="movieCard__front">
          <img src={image} alt="Movie Cover" />
        </div>
        <div className="movieCard__back">
          <span>THIS IS THE BACK</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

/*

  <div className="movieCard__cardContainer">
    {movies.map((movie) => (
      <TinderCard className="swipe" key={movie.id}></TinderCard>
    ))}
  </div>
      
*/
