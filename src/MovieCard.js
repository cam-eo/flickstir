import React, { useState } from "react";
import "./MovieCard.css";

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
  console.log(genres);
  // const [movies, setMovies] = useState([
  //   {
  //     id: 0,
  //     title: "",
  //     image: "",
  //     description: "",
  //     trailer: "",
  //   },
  //   {
  //     id: 1,
  //     title: "",
  //     image: "",
  //     description: "",
  //     trailer: "",
  //   },
  // ]);

  return (
    <div className="movieCard">
      <div className="movieCard__container">
        <div className="movieCard__front">
          <img src={image} alt="Movie Cover" />
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
              {"THIS IS THE GENRE"}
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
